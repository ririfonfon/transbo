
//#define DEBUG 1
//#define DEBUGH 1
//#define DEBUGC 1
//#define DEBUGMASTER 1
//#define DEBUGDMX 1
//#define DEBUGRVB 1
//#define DEBUGcolor 1
//#define DEBUGSPEC 1

#include <Arduino.h>
#include <FS.h>
#include <EEPROM.h>
#define EEPROM_SIZE 64
#include <WiFiClient.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <WebSocketsServer.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>

int list[8];
uint8_t clientn=0;
const char* host = "console";
const uint8_t Master=6;
int Mast[Master];
uint8_t Mem = 1;
int M1[] ={0,41,42};
int M2[] ={0,43,44};
//int M3[] ={};
int M4[] ={0,131,141,151,161};
//int M5[] ={};

//grp Led
int R[] ={0,4,7,10,13};
int G[] ={0,5,8,11,14};
int B[] ={0,6,9,12,15};

//grp Transbo
int RR[] ={0,132,142,152,162};
int GG[] ={0,133,143,153,163};
int BB[] ={0,134,144,154,164};

//grp Comptoire
int RRR[] ={0,21,24,27};
int GGG[] ={0,22,25,28};
int BBB[] ={0,23,26,29};

//grp rgb Led
float lred;
float lgreen;
float lblue;

//grp rgb Transbo
float tred;
float tgreen;
float tblue;

//grp rgb comptoire gauche
float cgred;
float cggreen;
float cgblue;
//grp rgb comptoire centrale
float cred;
float cgreen;
float cblue;
//grp rgb comptoire droit
float cdred;
float cdgreen;
float cdblue;

//memoire 6
//grp rgb comptoire gauche
float ccgred;
float ccggreen;
float ccgblue;
//grp rgb comptoire centrale
float ccred;
float ccgreen;
float ccblue;
//grp rgb comptoire droit
float ccdred;
float ccdgreen;
float ccdblue;
//grp rgb Transbo
float ctred;
float ctgreen;
float ctblue;
//grp rgb Led
float clred;
float clgreen;
float clblue;

uint8_t start_dmx = 1 ;
const uint8_t end_dmx = 171;
int D[end_dmx];

// WiFi network settings

const char* ssid     = "esptransbo";
const char* password = "esptransbo";

//ESP8266WiFiMulti WiFiMulti;
ESP8266WebServer server ( 80 );
WebSocketsServer webSocket = WebSocketsServer(81);

// dmx shield
#include <LXESP8266UARTDMX.h>

//////////////////////////////////////////S E T U P////////////////////////////////////////
void setup() {
  EEPROM.begin(EEPROM_SIZE);
  
//init pin dmx low
  pinMode(2,OUTPUT);
  digitalWrite(2,LOW);
// DMX
    ESP8266DMX.startOutput(); // initialize with bus length

    #ifdef DEBUG
    Serial.begin(115200);
    Serial.println();
    #endif

// connect to WiFi

 /* You can remove the password parameter if you want the AP to be open. */

  WiFi.hostname(host);
  WiFi.mode(WIFI_AP);
  WiFi.softAP(ssid, password, 10, 1);

  IPAddress myIP = WiFi.softAPIP();
  
 /*
    WiFi.hostname(host);
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, password);

// wait for connection to be established
    while(WiFi.waitForConnectResult() != WL_CONNECTED){
      WiFi.begin(ssid, password);
      #ifdef DEBUG
      Serial.println("WiFi connection failed, retrying.");
      #endif
      delay(500);
    }
*/
//fsbrowser serveur
  SPIFFS.begin();
  {
    Dir dir = SPIFFS.openDir("/");
    while (dir.next()) {
      String fileName = dir.fileName();
      size_t fileSize = dir.fileSize();
      #ifdef DEBUG;
      Serial.printf("FS File: %s, size: %s\n", fileName.c_str(), formatBytes(fileSize).c_str());
      #endif;
    }//while (dir.next()) {
    #ifdef DEBUG;
    Serial.printf("\n");
    #endif;
  }//SPIFFS.begin();

  //SERVER INIT
  //list directory
  server.on("/list", HTTP_GET, handleFileList);
  //load editor
  server.on("/edit", HTTP_GET, [](){
    if(!handleFileRead("/edit.htm")) server.send(404, "text/plain", "FileNotFound");
  });
  //create file
  server.on("/edit", HTTP_PUT, handleFileCreate);
  //delete file
  server.on("/edit", HTTP_DELETE, handleFileDelete);
  //first callback is called after the request has ended with all parsed arguments
  //second callback handles file uploads at that location
  server.on("/edit", HTTP_POST, [](){ server.send(200, "text/plain", ""); }, handleFileUpload);

  //called when the url is not defined here
  //use it to load content from SPIFFS
  server.onNotFound([](){
  if(!handleFileRead(server.uri()))
  server.send(404, "text/plain", "FileNotFound");
  }
  );//server.onNotFound

// start webSocket server
    webSocket.begin();
    webSocket.onEvent(webSocketEvent);

    if(MDNS.begin(host)) {
      #ifdef DEBUG
      Serial.println("MDNS responder started");
      #endif
    }

// handle index
  #ifdef DEBUG
  Serial.println("HTTP server setup");
  #endif

//Serveur
  server.on("/set", srv_handle_set);
  server.serveStatic("/", SPIFFS, "/console.html");
  server.begin();

  #ifdef DEBUG
  Serial.println("HTTP server started.");
  Serial.println("ready!");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.print("RSSI: ");
  Serial.print(WiFi.RSSI());
  Serial.println(" dBm");
  Serial.println();
  Serial.print("Configuring access point...");
  Serial.println("AP IP address: ");
  Serial.println(myIP);
  Serial.println("HTTP server started");
  #endif

  MDNS.addService("http", "tcp", 80);
  MDNS.addService("ws", "tcp", 81);
  
/*defo dmx*/
ESP8266DMX.setSlot(1, 0);
ESP8266DMX.setSlot(2, 255);
ESP8266DMX.setSlot(135, 0);
ESP8266DMX.setSlot(136, 0);
ESP8266DMX.setSlot(137, 0);
ESP8266DMX.setSlot(138, 0);
ESP8266DMX.setSlot(139, 0);
ESP8266DMX.setSlot(140, 0);
ESP8266DMX.setSlot(145, 0);
ESP8266DMX.setSlot(146, 0);
ESP8266DMX.setSlot(147, 0);
ESP8266DMX.setSlot(148, 0);
ESP8266DMX.setSlot(149, 0);
ESP8266DMX.setSlot(150, 0);
ESP8266DMX.setSlot(155, 0);
ESP8266DMX.setSlot(156, 0);
ESP8266DMX.setSlot(157, 0);
ESP8266DMX.setSlot(158, 0);
ESP8266DMX.setSlot(159, 0);
ESP8266DMX.setSlot(160, 0);
ESP8266DMX.setSlot(165, 0);
ESP8266DMX.setSlot(166, 0);
ESP8266DMX.setSlot(167, 0);
ESP8266DMX.setSlot(168, 0);
ESP8266DMX.setSlot(169, 0);
ESP8266DMX.setSlot(170, 0);
//defo color
lred=255;
lgreen=0;
lblue=255;

tred=255;
tgreen=127;
tblue=0;

cgred=255;
cggreen=0;
cgblue=255;
cred=255;
cgreen=0;
cblue=255;
cdred=255;
cdgreen=0;
cdblue=255;

send_rvb1();

/*EEPROM*/
  if(EEPROM.read(62) != 'O' || EEPROM.read(63) != 'K') {

    #ifdef DEBUG
    Serial.println("failed to initialise EEPROM");
    Serial.println("Formate EEPROM");
    #endif
    
    for (int i = 0 ; i < EEPROM_SIZE ; i++) {
    EEPROM.write(i, '\0');
    if (i%50 == 0)delay(100);
    }
    #ifdef DEBUG
    Serial.println("EEPROM content cleared!");
    #endif
    
ccgred=0;
ccggreen=0;
ccgblue=0;
ccred=0;
ccgreen=0;
ccblue=0;
ccdred=0;
ccdgreen=0;
ccdblue=0;
ctred=0;
ctgreen=0;
ctblue=0;
clred=0;
clgreen=0;
clblue=0;

    EEPROM.write(1,ccgred);
    EEPROM.write(2,ccggreen);
    EEPROM.write(3,ccgblue);
    EEPROM.write(4,ccred);
    EEPROM.write(5,ccgreen);
    EEPROM.write(6,ccblue);
    EEPROM.write(7,ccdred);
    EEPROM.write(8,ccdgreen);
    EEPROM.write(9,ccdblue);
    EEPROM.write(10,ctred);
    EEPROM.write(11,ctgreen);
    EEPROM.write(12,ctblue);
    EEPROM.write(13,clred);
    EEPROM.write(14,clgreen);
    EEPROM.write(15,clblue);
    EEPROM.write(62,'O');
    EEPROM.write(63,'K');
    EEPROM.commit();
  }//(EEPROM.read(62) != 'O' || EEPROM.read(63) != 'K')
 
  if(EEPROM.read(62)== 'O' && EEPROM.read(63)== 'K') {
   ccgred=EEPROM.read(1);
   ccggreen=EEPROM.read(2);
   ccgblue=EEPROM.read(3);
   ccred=EEPROM.read(4);
   ccgreen=EEPROM.read(5);
   ccblue=EEPROM.read(6);
   ccdred=EEPROM.read(7);
   ccdgreen=EEPROM.read(8);
   ccdblue=EEPROM.read(9);
   ctred=EEPROM.read(10);
   ctgreen=EEPROM.read(11);
   ctblue=EEPROM.read(12);
   clred=EEPROM.read(13);
   clgreen=EEPROM.read(14);
   clblue=EEPROM.read(15);

   #ifdef DEBUG
   Serial.println("EEPROM READ");
   #endif

#ifdef DEBUGSPEC
Serial.print("ccgred=");Serial.println(ccgred);
Serial.print("ccggreen=");Serial.println(ccggreen);
Serial.print("ccgblue=");Serial.println(ccgblue);

Serial.print("ccred=");Serial.println(ccred);
Serial.print("ccgreen=");Serial.println(ccgreen);
Serial.print("ccblue=");Serial.println(ccblue);

Serial.print("ccdred=");Serial.println(ccdred);
Serial.print("ccdgreen=");Serial.println(ccdgreen);
Serial.print("ccdblue=");Serial.println(ccdblue);

Serial.print("ctred=");Serial.println(ctred);
Serial.print("ctgreen=");Serial.println(ctgreen);
Serial.print("ctblue=");Serial.println(ctblue);

Serial.print("clred=");Serial.println(clred);
Serial.print("clgreen=");Serial.println(clgreen);
Serial.print("clblue=");Serial.println(clblue);
#endif
  }//(EEPROM.begin(EEPROM_SIZE)) 
  
}//setup

//////////////////////////////////////////V O I D////////////////////////////////////////
void load_spec(){
  
   ccgred=EEPROM.read(1);
   ccggreen=EEPROM.read(2);
   ccgblue=EEPROM.read(3);
   ccred=EEPROM.read(4);
   ccgreen=EEPROM.read(5);
   ccblue=EEPROM.read(6);
   ccdred=EEPROM.read(7);
   ccdgreen=EEPROM.read(8);
   ccdblue=EEPROM.read(9);
   ctred=EEPROM.read(10);
   ctgreen=EEPROM.read(11);
   ctblue=EEPROM.read(12);
   clred=EEPROM.read(13);
   clgreen=EEPROM.read(14);
   clblue=EEPROM.read(15); 


for (int i=1 ; i<= clientn; i++) {

  if (list[i] !=0) {
   
   webSocket.sendTXT(list[i], "ai:"+String(round(ccgred)));
   webSocket.sendTXT(list[i], "aj:"+String(round(ccggreen)));
   webSocket.sendTXT(list[i], "ak:"+String(round(ccgblue)));

   webSocket.sendTXT(list[i], "al:"+String(round(ccred)));
   webSocket.sendTXT(list[i], "am:"+String(round(ccgreen)));
   webSocket.sendTXT(list[i], "an:"+String(round(ccblue)));

   webSocket.sendTXT(list[i], "ao:"+String(round(ccdred)));
   webSocket.sendTXT(list[i], "ap:"+String(round(ccdgreen)));
   webSocket.sendTXT(list[i], "aq:"+String(round(ccdblue)));

   webSocket.sendTXT(list[i], "ar:"+String(round(ctred)));
   webSocket.sendTXT(list[i], "as:"+String(round(ctgreen)));
   webSocket.sendTXT(list[i], "at:"+String(round(ctblue)));

   webSocket.sendTXT(list[i], "au:"+String(round(clred)));
   webSocket.sendTXT(list[i], "av:"+String(round(clgreen)));
   webSocket.sendTXT(list[i], "aw:"+String(round(clblue)));

  }// if (list[i] !=0)
   
 }// for client
  
}//load_spec

void save_spec(){
    EEPROM.write(1,ccgred);
    EEPROM.write(2,ccggreen);
    EEPROM.write(3,ccgblue);
    EEPROM.write(4,ccred);
    EEPROM.write(5,ccgreen);
    EEPROM.write(6,ccblue);
    EEPROM.write(7,ccdred);
    EEPROM.write(8,ccdgreen);
    EEPROM.write(9,ccdblue);
    EEPROM.write(10,ctred);
    EEPROM.write(11,ctgreen);
    EEPROM.write(12,ctblue);
    EEPROM.write(13,clred);
    EEPROM.write(14,clgreen);
    EEPROM.write(15,clblue);
    EEPROM.write(62,'O');
    EEPROM.write(63,'K');
    EEPROM.commit();
}//save_spec

void send_rvb() {
    for (int i=1;i<(sizeof(R)/4); i++)
    {
      int temp=R[i];
      D[temp]=((lred/255)*Mast[5]);
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for R

    for (int i=1;i<(sizeof(G)/4); i++)
    {
      int temp=G[i];
      D[temp]=((lgreen/255)*Mast[5]);
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for G

    for (int i=1;i<(sizeof(B)/4); i++)
    {
      int temp=B[i];
      D[temp]=((lblue/255)*Mast[5]);
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for B

}//send_rvb

void send_rvb1() {
    for (int i=1;i<(sizeof(RR)/4); i++)
    {
      int temp=RR[i];
      D[temp]=tred;
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for RR

    for (int i=1;i<(sizeof(GG)/4); i++)
    {
      int temp=GG[i];
      D[temp]=tgreen; 
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for GG

    for (int i=1;i<(sizeof(BB)/4); i++)
    {
      int temp=BB[i];
      D[temp]=tblue;  
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for BB

}//send_rvb1

void send_rvb2() {
//grp comptoire gauche  
ESP8266DMX.setSlot(RRR[1], round((cgred/255)*Mast[3]));
ESP8266DMX.setSlot(GGG[1], round((cggreen/255)*Mast[3]));
ESP8266DMX.setSlot(BBB[1], round((cgblue/255)*Mast[3]));
//grp comptoire centrale
ESP8266DMX.setSlot(RRR[2], round((cred/255)*Mast[3]));
ESP8266DMX.setSlot(GGG[2], round((cgreen/255)*Mast[3]));
ESP8266DMX.setSlot(BBB[2], round((cblue/255)*Mast[3]));
//grp comptoire droit
ESP8266DMX.setSlot(RRR[3], round((cdred/255)*Mast[3]));
ESP8266DMX.setSlot(GGG[3], round((cdgreen/255)*Mast[3]));
ESP8266DMX.setSlot(BBB[3], round((cdblue/255)*Mast[3]));

}//send_rvb2

void send_rvb6(){
//grp led
    for (int i=1;i<(sizeof(R)/4); i++)
    {
      int temp=R[i];
      D[temp]=((clred/255)*Mast[5]);
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for R

    for (int i=1;i<(sizeof(G)/4); i++)
    {
      int temp=G[i];
      D[temp]=((clgreen/255)*Mast[5]);
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for G

    for (int i=1;i<(sizeof(B)/4); i++)
    {
      int temp=B[i];
      D[temp]=((clblue/255)*Mast[5]);
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for B

//grp transbo  
    for (int i=1;i<(sizeof(RR)/4); i++)
    {
      int temp=RR[i];
      D[temp]=ctred;
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for RR

    for (int i=1;i<(sizeof(GG)/4); i++)
    {
      int temp=GG[i];
      D[temp]=ctgreen; 
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for GG

    for (int i=1;i<(sizeof(BB)/4); i++)
    {
      int temp=BB[i];
      D[temp]=ctblue;  
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for BB 

//grp comptoire gauche
ESP8266DMX.setSlot(RRR[1], round((cgred/255)*Mast[3]));
ESP8266DMX.setSlot(GGG[1], round((cggreen/255)*Mast[3]));
ESP8266DMX.setSlot(BBB[1], round((cgblue/255)*Mast[3]));
//grp comptoire centrale
ESP8266DMX.setSlot(RRR[2], round((cred/255)*Mast[3]));
ESP8266DMX.setSlot(GGG[2], round((cgreen/255)*Mast[3]));
ESP8266DMX.setSlot(BBB[2], round((cblue/255)*Mast[3]));
//grp comptoire droit
ESP8266DMX.setSlot(RRR[3], round((cdred/255)*Mast[3]));
ESP8266DMX.setSlot(GGG[3], round((cdgreen/255)*Mast[3]));
ESP8266DMX.setSlot(BBB[3], round((cdblue/255)*Mast[3]));
}//send_rvb6

void send_Mast() {
    for (int i=1;i<(sizeof(M1)/4); i++)
    {
      int temp=M1[i];
      D[temp]=Mast[1];
      ESP8266DMX.setSlot(temp, D[temp]);

    }//for M1

    for (int i=1;i<(sizeof(M2)/4); i++)
    {
      int temp=M2[i];
      D[temp]=Mast[2];
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for M2

    for (int i=1;i<(sizeof(M4)/4); i++)
    {
      int temp=M4[i];
      D[temp]=Mast[4];
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for M4
}//send_Mast

//////////////////////////////////////////websocket///////////////////////////////////////////////
void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t lenght) {          
    switch(type) {
case WStype_DISCONNECTED:
            clientn=clientn-1;
            list[clientn]=0;
            #ifdef DEBUG
            Serial.println("Disconnected!");
            Serial.print("clientn : ");
            Serial.println(clientn);
            Serial.print("list[clientn] : ");
            Serial.println(list[clientn]);
            #endif

            break;
case WStype_CONNECTED:
            clientn=clientn+1;
            list[clientn]=num;
            #ifdef DEBUG
            Serial.println("Client connected!");
            Serial.print("clientn : ");
            Serial.println(clientn);
            Serial.print("list[clientn] : ");
            Serial.println(list[clientn]);
            #endif

            break;
case WStype_TEXT:
//  is the start for this data
   if(payload[0] == 'a') {
    #ifdef DEBUGSPEC
    Serial.println("payload[0] == 'a'");
    #endif
   if(payload[1] == 'a') {
    #ifdef DEBUGSPEC
    Serial.println("payload[1] == 'a'");
    #endif
   char * pEnd;
   Mast[1] = strtol ((const char *) &payload[2],&pEnd,8);
   for (int i=1;i<(sizeof(M1)/4); i++)
    {
      int temp=M1[i];
      D[temp]=Mast[1];
      ESP8266DMX.setSlot(temp, D[temp]);

    }//for M1
}//a

if(payload[1] == 'b') {
   char * pEnd;
   Mast[2] = strtol ((const char *) &payload[2],&pEnd,8);
   for (int i=1;i<(sizeof(M2)/4); i++)
    {
      int temp=M2[i];
      D[temp]=Mast[2];
      ESP8266DMX.setSlot(temp, D[temp]);

    }//for M2
}//b

if(payload[1] == 'c') {
   char * pEnd;
   Mast[3] = strtol ((const char *) &payload[2],&pEnd,8);
   send_rvb2();
}//c

if(payload[1] == 'd') {
   char * pEnd;
   Mast[4] = strtol ((const char *) &payload[2],&pEnd,8);
   for (int i=1;i<(sizeof(M4)/4); i++) {
      int temp=M4[i];
      D[temp]=Mast[4];
      ESP8266DMX.setSlot(temp, D[temp]);
    }//for M4
}//d

if(payload[1] == 'e') {
   char * pEnd;
   Mast[5] = strtol ((const char *) &payload[2],&pEnd,8);
   send_rvb();
  }//e
  
//  wvu tsr qpo nml kji //
if(payload[1] == 'i') {
   char * pEnd;
   ccgred = strtol ((const char *) &payload[2],&pEnd,8);
  }//i
if(payload[1] == 'j') {
   char * pEnd;
   ccggreen = strtol ((const char *) &payload[2],&pEnd,8);
  }//j
if(payload[1] == 'k') {
   char * pEnd;
   ccgblue = strtol ((const char *) &payload[2],&pEnd,8);
  }//k

if(payload[1] == 'l') {
   char * pEnd;
   ccred = strtol ((const char *) &payload[2],&pEnd,8);
  }//l
if(payload[1] == 'm') {
   char * pEnd;
   ccgreen = strtol ((const char *) &payload[2],&pEnd,8);
  }//m
if(payload[1] == 'n') {
   char * pEnd;
   ccblue = strtol ((const char *) &payload[2],&pEnd,8);
  }//n

if(payload[1] == 'o') {
   char * pEnd;
   ccdred = strtol ((const char *) &payload[2],&pEnd,8);
  }//o
if(payload[1] == 'p') {
   char * pEnd;
   ccdgreen = strtol ((const char *) &payload[2],&pEnd,8);
  }//p
if(payload[1] == 'q') {
   char * pEnd;
   ccdblue = strtol ((const char *) &payload[2],&pEnd,8);
  }//k

if(payload[1] == 'r') {
   char * pEnd;
   ctred = strtol ((const char *) &payload[2],&pEnd,8);
  }//r
if(payload[1] == 's') {
   char * pEnd;
   ctgreen = strtol ((const char *) &payload[2],&pEnd,8);
  }//s
if(payload[1] == 't') {
   char * pEnd;
   ctblue = strtol ((const char *) &payload[2],&pEnd,8);
  }//t

if(payload[1] == 'u') {
   char * pEnd;
   clred = strtol ((const char *) &payload[2],&pEnd,8);
  }//u
if(payload[1] == 'v') {
   char * pEnd;
   clgreen = strtol ((const char *) &payload[2],&pEnd,8);
  }//v
if(payload[1] == 'w') {
   char * pEnd;
   clblue = strtol ((const char *) &payload[2],&pEnd,8);
     }//w
   }//payload[0]  
    break;
 }//type
}//web socket

//////////////////////////////////////////srv_handle_set////////////////////////////////////////
void srv_handle_set() {
  for (uint8_t i=0; i < server.args(); i++){
    if(server.argName(i) == "c") {
      uint32_t rvbtmp = (uint32_t) strtol(&server.arg(i)[0], NULL, 16);
      if(rvbtmp >= 0x000000 && rvbtmp <= 0xFFFFFF)
      {
        tred=(rvbtmp>>16);
        tgreen=(uint8_t((rvbtmp<<8)>>16));
        tblue=(uint8_t((rvbtmp<<16)>>16));
        send_rvb1();
      }
    }

//////////////////////////////////////////memoire///////////////////////////////////////////////
    if(server.argName(i) == "m") {
      Mem = (uint8_t) strtol(&server.arg(i)[0], NULL, 10);
      #ifdef DEBUGH
      Serial.print("m=");
      Serial.println(Mem);
      #endif
      
if(Mem==1) {
      lred=255;
      lgreen=0;
      lblue=255;
//grp rgb comptoire gauche
     cgred=lred;
     cggreen=lgreen;
     cgblue=lblue;
//grp rgb comptoire centrale
     cred=lred;
     cgreen=lgreen;
     cblue=lblue;
//grp rgb comptoire droit
     cdred=lred;
     cdgreen=lgreen;
     cdblue=lblue; 
     
      send_rvb();
      send_rvb2();
}//mem1

if(Mem==2) {
      lred=255;
      lgreen=0;
      lblue=0;
//grp rgb comptoire gauche
     cgred=lred;
     cggreen=lgreen;
     cgblue=lblue;
//grp rgb comptoire centrale
     cred=lred;
     cgreen=lgreen;
     cblue=lblue;
//grp rgb comptoire droit
     cdred=lred;
     cdgreen=lgreen;
     cdblue=lblue; 
     
      send_rvb();
      send_rvb2();
}//mem2

if(Mem==3) {
      lred=0;
      lgreen=255;
      lblue=0;
//grp rgb comptoire gauche
     cgred=lred;
     cggreen=lgreen;
     cgblue=lblue;
//grp rgb comptoire centrale
     cred=lred;
     cgreen=lgreen;
     cblue=lblue;
//grp rgb comptoire droit
     cdred=lred;
     cdgreen=lgreen;
     cdblue=lblue; 
     
      send_rvb();
      send_rvb2();
}//mem3

if(Mem==4) {
      lred=0;
      lgreen=0;
      lblue=255;
      
//grp rgb comptoire gauche
     cgred=lred;
     cggreen=lgreen;
     cgblue=lblue;
//grp rgb comptoire centrale
     cred=lred;
     cgreen=lgreen;
     cblue=lblue;
//grp rgb comptoire droit
     cdred=lred;
     cdgreen=lgreen;
     cdblue=lblue; 
     
      send_rvb();
      send_rvb2();
}//mem4

if(Mem==5) {
      lred=255;
      lgreen=127;
      lblue=0;

//grp rgb comptoire gauche
     cgred=lred;
     cggreen=lgreen;
     cgblue=lblue;
//grp rgb comptoire centrale
     cred=lred;
     cgreen=lgreen;
     cblue=lblue;
//grp rgb comptoire droit
     cdred=lred;
     cdgreen=lgreen;
     cdblue=lblue; 
     
      send_rvb();
      send_rvb2();
}//mem5

if(Mem==6) {
   ccgred=EEPROM.read(1);
   ccggreen=EEPROM.read(2);
   ccgblue=EEPROM.read(3);
   ccred=EEPROM.read(4);
   ccgreen=EEPROM.read(5);
   ccblue=EEPROM.read(6);
   ccdred=EEPROM.read(7);
   ccdgreen=EEPROM.read(8);
   ccdblue=EEPROM.read(9);
   ctred=EEPROM.read(10);
   ctgreen=EEPROM.read(11);
   ctblue=EEPROM.read(12);
   clred=EEPROM.read(13);
   clgreen=EEPROM.read(14);
   clblue=EEPROM.read(15); 
//grp rgb comptoire gauche
     cgred=ccgred;
     cggreen=ccggreen;
     cgblue=ccgblue;
//grp rgb comptoire centrale
     cred=ccred;
     cgreen=ccgreen;
     cblue=ccblue;
//grp rgb comptoire droit
     cdred=ccdred;
     cdgreen=ccdgreen;
     cdblue=ccdblue; 

     tred=ctred;
     tgreen=ctgreen;
     tblue=ctblue;

     lred=clred;
     lgreen=clgreen;
     lblue=clblue;
     
      send_rvb6();
}//mem6
      
  }//serveur m

//////////////////////////////////////////special mem///////////////////////////////////////////
if(server.argName(i) == "mem") {
  #ifdef DEBUGSPEC
  Serial.print("mem=");
  #endif
  
  Mem = (uint8_t) strtol(&server.arg(i)[0], NULL, 10);

if(Mem==0){
  
  #ifdef DEBUGSPEC
  Serial.print("mem=");Serial.println(Mem);
  #endif
  load_spec();
}//if(Mem==0){

if(Mem==1){
  #ifdef DEBUGSPEC
  Serial.print("mem=");Serial.println(Mem);
  #endif
  save_spec();
}//if(Mem==1){
    }//serveur mem
  }//serveur args
  server.send(200, "text/plain", "OK");
}//srv_handle_set()

//////////////////////////////////////////spiffs///////////////////////////////////////////////
File fsUploadFile;

//format bytes
String formatBytes(size_t bytes){
  if (bytes < 1024){
    return String(bytes)+"B";
  } else if(bytes < (1024 * 1024)){
    return String(bytes/1024.0)+"KB";
  } else if(bytes < (1024 * 1024 * 1024)){
    return String(bytes/1024.0/1024.0)+"MB";
  } else {
    return String(bytes/1024.0/1024.0/1024.0)+"GB";
  }
}//formatBytes(size_t bytes)

String getContentType(String filename){
  if(server.hasArg("download")) return "application/octet-stream";
  else if(filename.endsWith(".htm")) return "text/html";
  else if(filename.endsWith(".html")) return "text/html";
  else if(filename.endsWith(".css")) return "text/css";
  else if(filename.endsWith(".js")) return "application/javascript";
  else if(filename.endsWith(".png")) return "image/png";
  else if(filename.endsWith(".gif")) return "image/gif";
  else if(filename.endsWith(".jpg")) return "image/jpeg";
  else if(filename.endsWith(".ico")) return "image/x-icon";
  else if(filename.endsWith(".xml")) return "text/xml";
  else if(filename.endsWith(".pdf")) return "application/x-pdf";
  else if(filename.endsWith(".zip")) return "application/x-zip";
  else if(filename.endsWith(".gz")) return "application/x-gzip";
  return "text/plain";
}//getContentType(String filename)

bool handleFileRead(String path){
  #ifdef DEBUG;
  Serial.println("handleFileRead: " + path);
  #endif;
  if(path.endsWith("/")) path += "index.htm";
  String contentType = getContentType(path);
  String pathWithGz = path + ".gz";
  if(SPIFFS.exists(pathWithGz) || SPIFFS.exists(path)){
    if(SPIFFS.exists(pathWithGz))
      path += ".gz";
    File file = SPIFFS.open(path, "r");
    size_t sent = server.streamFile(file, contentType);
    file.close();
    return true;
  }
  return false;
}//handleFileRead(String path)

void handleFileUpload(){
  if(server.uri() != "/edit") return;
  HTTPUpload& upload = server.upload();
  if(upload.status == UPLOAD_FILE_START){
    String filename = upload.filename;
    if(!filename.startsWith("/")) filename = "/"+filename;
    #ifdef DEBUG;
    Serial.print("handleFileUpload Name: "); Serial.println(filename);
    #endif;
    fsUploadFile = SPIFFS.open(filename, "w");
    filename = String();
  } else if(upload.status == UPLOAD_FILE_WRITE){
    //DBG_OUTPUT_PORT.print("handleFileUpload Data: "); DBG_OUTPUT_PORT.println(upload.currentSize);
    if(fsUploadFile)
      fsUploadFile.write(upload.buf, upload.currentSize);
  } else if(upload.status == UPLOAD_FILE_END){
    if(fsUploadFile)
      fsUploadFile.close();
      #ifdef DEBUG;
      Serial.print("handleFileUpload Size: "); Serial.println(upload.totalSize);
      #endif;
  }
}//handleFileUpload()

void handleFileDelete(){
  if(server.args() == 0) return server.send(500, "text/plain", "BAD ARGS");
  String path = server.arg(0);
  #ifdef DEBUG;
  Serial.println("handleFileDelete: " + path);
  #endif
  if(path == "/")
    return server.send(500, "text/plain", "BAD PATH");
  if(!SPIFFS.exists(path))
    return server.send(404, "text/plain", "FileNotFound");
  SPIFFS.remove(path);
  server.send(200, "text/plain", "");
  path = String();
}//handleFileDelete()

void handleFileCreate(){
  if(server.args() == 0)
    return server.send(500, "text/plain", "BAD ARGS");
  String path = server.arg(0);
  #ifdef DEBUG;
  Serial.println("handleFileCreate: " + path);
  #endif;
  if(path == "/")
    return server.send(500, "text/plain", "BAD PATH");
  if(SPIFFS.exists(path))
    return server.send(500, "text/plain", "FILE EXISTS");
  File file = SPIFFS.open(path, "w");
  if(file)
    file.close();
  else
    return server.send(500, "text/plain", "CREATE FAILED");
  server.send(200, "text/plain", "");
  path = String();
}//handleFileCreate()

void handleFileList() {
  if(!server.hasArg("dir")) {server.send(500, "text/plain", "BAD ARGS"); return;}

  String path = server.arg("dir");
  #ifdef DEBUG;
  Serial.println("handleFileList: " + path);
  #endif;
  Dir dir = SPIFFS.openDir(path);
  path = String();

  String output = "[";
  while(dir.next()){
    File entry = dir.openFile("r");
    if (output != "[") output += ',';
    bool isDir = false;
    output += "{\"type\":\"";
    output += (isDir)?"dir":"file";
    output += "\",\"name\":\"";
    output += String(entry.name()).substring(1);
    output += "\"}";
    entry.close();
  }

  output += "]";
  server.send(200, "text/json", output);
}//handleFileList()

//////////////////////////////////////////loop///////////////////////////////////////////////
void loop() {
    webSocket.loop();
    server.handleClient();
}// loop()
