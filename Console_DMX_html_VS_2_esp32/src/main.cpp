// platformio run --target uploadfs // cmd console download spiff

#define DEBUG 1
//#define DEBUGH 1
//#define DEBUGC 1
//#define DEBUGMASTER 1
//#define DEBUGDMX 1
//#define DEBUGRVB 1
//#define DEBUGcolor 1
#define DEBUGSPEC 1

#include <Arduino.h>
#include <SPIFFS.h>
#include <FS.h>
#include <EEPROM.h>
#define EEPROM_SIZE 64
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

#include <ESPAsyncWebServer.h>
// #include <WebSocketsServer.h>
// #include <WebServer.h>
 #include <ESPmDNS.h>

#include <SPIFFSEditor.h>

#include <variable.h>

AsyncWebServer server(80);
AsyncWebSocket webSocket("/webSocket");
// WebSocketsServer webSocket = WebSocketsServer(81);

// dmx
#include <LXESP32DMX.h>

#include <fonction_void.h>
#include <fonction_srv_handle_set.h>
#include <fonction_web_socket.h>
#include <fonction_spiffs.h>


//////////////////////////////////////////S E T U P////////////////////////////////////////
void setup()
{
  EEPROM.begin(EEPROM_SIZE);

  //init pin dmx
  pinMode(2, OUTPUT);
  digitalWrite(2, HIGH);// HIGH dmx out
  // DMX
  ESP32DMX.startOutput(); // initialize with bus length

 #ifdef DEBUG
  Serial.begin(115200);
  Serial.println();
 #endif

  //////////////////////////////////////////////////// connect to WiFi

  /* You can remove the password parameter if you want the AP to be open. */

  WiFi.setHostname(host);
  WiFi.mode(WIFI_AP);
  WiFi.softAP(ssid, password, 10, 1);

  IPAddress myIP = WiFi.softAPIP();
 
  SPIFFS.begin();

  listDir(SPIFFS, "/", 0);

  ///////////////////////////////////////////////////SERVER INIT
  //list directory
  server.on("/list", HTTP_GET, handleFileList);
  //load editor
  server.on("/edit", HTTP_GET, []() {
    if (!handleFileRead("/edit.html"))
      server.send(404, "text/plain", "FileNotFound");
  });
  //create file
  server.on("/edit", HTTP_PUT, handleFileCreate);
  //delete file
  server.on("/edit", HTTP_DELETE, handleFileDelete);
  //first callback is called after the request has ended with all parsed arguments
  //second callback handles file uploads at that location
  server.on(
      "/edit", HTTP_POST, []() {
        server.send(200, "text/plain", "");
      },
      handleFileUpload);

  //called when the url is not defined here
  //use it to load content from SPIFFS
  server.onNotFound([]() {
    if (!handleFileRead(server.uri()))
      server.send(404, "text/plain", "FileNotFound");
  }); //server.onNotFound

  // start webSocket server
  webSocket.begin();
  webSocket.onEvent(webSocketEvent);

  if (MDNS.begin(host))
  {
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

  MDNS.addService("http", "tcp", 80);
  MDNS.addService("ws", "tcp", 81);

 ////////////////////////////////////// /*defo dmx*/
  ESP32DMX.setSlot(1, 0);
  ESP32DMX.setSlot(2, 255);

  for (int i = 135; i < end_dmx; i++)
  {
    ESP32DMX.setSlot(i, 0);
  }

  //defo color
  lred = 255;//led
  lgreen = 0;
  lblue = 255;

  tred = 255;// trans 1
  tgreen = 127;
  tblue = 0;

  ttred = 255;//trans 2
  ttgreen = 0;
  ttblue =  0;
  ttwhite = 10;

  cred = 255;//comptoire
  cgreen = 0;
  cblue = 255;

  lored = 255;//logo
  logreen = 0;
  loblue = 255;

  clured = 255;//club
  clugreen = 127;
  clublue = 0;
  clowhite = 10;

  rered = 255;// regie
  regreen = 127;
  reblue = 0;

  send_rvb6();

  /*EEPROM*/
  if (EEPROM.read(62) != 'O' || EEPROM.read(63) != 'K')
  {

   #ifdef DEBUG
    Serial.println("failed to initialise EEPROM");
    Serial.println("Formate EEPROM");
   #endif

    for (int i = 0; i < EEPROM_SIZE; i++)
    {
      EEPROM.write(i, '\0');
      if (i % 50 == 0)
        delay(100);
    }
   #ifdef DEBUG
    Serial.println("EEPROM content cleared!");
   #endif

    ccred = 0;// comptoire
    ccgreen = 0;
    ccblue = 0; 

    clred = 0;// led
    clgreen = 0;
    clblue = 0; 

    ctred = 0;// trans 1
    ctgreen = 0;
    ctblue = 0; 

    cttred = 0;// trans 2
    cttgreen = 0;
    cttblue = 0;
    cttwhite = 0;

    clored = 0;//logo
    clogreen = 0;
    cloblue = 0;
    clowhite = 0;

    cclured = 0;// club
    cclugreen = 0;
    cclublue = 0;
    ccluwhite = 0;

    crered = 0;// regie
    cregreen = 0;
    creblue = 0; 

    EEPROM.write(1, ccred);
    EEPROM.write(2, ccgreen);
    EEPROM.write(3, ccblue);
    EEPROM.write(4, clred);
    EEPROM.write(5, clgreen);
    EEPROM.write(6, clblue);
    EEPROM.write(7, ctred);
    EEPROM.write(8, ctgreen);
    EEPROM.write(9, ctblue);
    EEPROM.write(10, cttred);
    EEPROM.write(11, cttgreen);
    EEPROM.write(12, cttblue);
    EEPROM.write(13, cttwhite);
    EEPROM.write(14, clored);
    EEPROM.write(15, clogreen);
    EEPROM.write(16,cloblue);
    EEPROM.write(17,clowhite);
    EEPROM.write(18,cclured);
    EEPROM.write(19,cclugreen);
    EEPROM.write(20,cclublue);
    EEPROM.write(21,ccluwhite);
    EEPROM.write(22,crered);
    EEPROM.write(23,cregreen);
    EEPROM.write(24,creblue);

    EEPROM.write(62, 'O');
    EEPROM.write(63, 'K');
    EEPROM.commit();
  } //(EEPROM.read(62) != 'O' || EEPROM.read(63) != 'K')

  if (EEPROM.read(62) == 'O' && EEPROM.read(63) == 'K')
  {
    ccred = EEPROM.read(1);
    ccgreen = EEPROM.read(2);
    ccblue = EEPROM.read(3);
    clred = EEPROM.read(4);
    clgreen = EEPROM.read(5);
    clblue = EEPROM.read(6);
    ctred = EEPROM.read(7);
    ctgreen = EEPROM.read(8);
    ctblue = EEPROM.read(9);
    cttred = EEPROM.read(10);
    cttgreen = EEPROM.read(11);
    cttblue = EEPROM.read(12);
    cttwhite = EEPROM.read(13);
    clored = EEPROM.read(14);
    clogreen = EEPROM.read(15);
    cloblue = EEPROM.read(16);
    clowhite = EEPROM.read(17);
    cclured = EEPROM.read(18);
    cclugreen = EEPROM.read(19);
    cclublue = EEPROM.read(20);
    ccluwhite = EEPROM.read(21);
    crered = EEPROM.read(22);
    cregreen = EEPROM.read(23);
    creblue = EEPROM.read(24);

    #ifdef DEBUG
    Serial.println("EEPROM READ");
    #endif

  } //(EEPROM.read(62) == 'O' && EEPROM.read(63) == 'K')

  #ifdef DEBUG
  Serial.println("HTTP server started.");
  Serial.println("ready!");
  Serial.println();
  Serial.print("Configuring access point...");
  Serial.println("AP IP address: ");
  Serial.println(myIP);
  Serial.println("HTTP server OK");
  #endif

} //setup


//////////////////////////////////////////loop///////////////////////////////////////////////
void loop()
{
  webSocket.loop();
  server.handleClient();
} // loop()
