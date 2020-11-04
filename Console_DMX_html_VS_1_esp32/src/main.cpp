// platformio run --target uploadfs // cmd console download spiff

#define DEBUG 1
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
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

// #include <WiFiMulti.h>
#include <WiFiAP.h>
#include <WebSocketsServer.h>
#include <WebServer.h>
#include <ESPmDNS.h>
#include <SPIFFS.h>
#include <SPIFFSEditor.h>

#include <variable.h>

WebServer server(80);
WebSocketsServer webSocket = WebSocketsServer(81);

// dmx shield
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

  // connect to WiFi

  /* You can remove the password parameter if you want the AP to be open. */

  WiFi.setHostname(host);
  WiFi.mode(WIFI_AP);
  WiFi.softAP(ssid, password, 10, 1);

  IPAddress myIP = WiFi.softAPIP();
 
  SPIFFS.begin();

  listDir(SPIFFS, "/", 0);

  //SERVER INIT
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

  /*defo dmx*/
  ESP32DMX.setSlot(1, 0);
  ESP32DMX.setSlot(2, 255);

  for (int i = 135; i < end_dmx; i++)
  {
    ESP32DMX.setSlot(i, 0);
  }

  //defo color
  lred = 255;
  lgreen = 0;
  lblue = 255;

  tred = 255;
  tgreen = 127;
  tblue = 0;

  cgred = 255;
  cggreen = 0;
  cgblue = 255;
  cred = 255;
  cgreen = 0;
  cblue = 255;
  cdred = 255;
  cdgreen = 0;
  cdblue = 255;

  send_rvb1();

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

    ccgred = 0;
    ccggreen = 0;
    ccgblue = 0;
    ccred = 0;
    ccgreen = 0;
    ccblue = 0;
    ccdred = 0;
    ccdgreen = 0;
    ccdblue = 0;
    ctred = 0;
    ctgreen = 0;
    ctblue = 0;
    clred = 0;
    clgreen = 0;
    clblue = 0;

    EEPROM.write(1, ccgred);
    EEPROM.write(2, ccggreen);
    EEPROM.write(3, ccgblue);
    EEPROM.write(4, ccred);
    EEPROM.write(5, ccgreen);
    EEPROM.write(6, ccblue);
    EEPROM.write(7, ccdred);
    EEPROM.write(8, ccdgreen);
    EEPROM.write(9, ccdblue);
    EEPROM.write(10, ctred);
    EEPROM.write(11, ctgreen);
    EEPROM.write(12, ctblue);
    EEPROM.write(13, clred);
    EEPROM.write(14, clgreen);
    EEPROM.write(15, clblue);
    EEPROM.write(62, 'O');
    EEPROM.write(63, 'K');
    EEPROM.commit();
  } //(EEPROM.read(62) != 'O' || EEPROM.read(63) != 'K')

  if (EEPROM.read(62) == 'O' && EEPROM.read(63) == 'K')
  {
    ccgred = EEPROM.read(1);
    ccggreen = EEPROM.read(2);
    ccgblue = EEPROM.read(3);
    ccred = EEPROM.read(4);
    ccgreen = EEPROM.read(5);
    ccblue = EEPROM.read(6);
    ccdred = EEPROM.read(7);
    ccdgreen = EEPROM.read(8);
    ccdblue = EEPROM.read(9);
    ctred = EEPROM.read(10);
    ctgreen = EEPROM.read(11);
    ctblue = EEPROM.read(12);
    clred = EEPROM.read(13);
    clgreen = EEPROM.read(14);
    clblue = EEPROM.read(15);

    #ifdef DEBUG
    Serial.println("EEPROM READ");
    #endif

   #ifdef DEBUGSPEC
    Serial.print("ccgred=");
    Serial.println(ccgred);
    Serial.print("ccggreen=");
    Serial.println(ccggreen);
    Serial.print("ccgblue=");
    Serial.println(ccgblue);

    Serial.print("ccred=");
    Serial.println(ccred);
    Serial.print("ccgreen=");
    Serial.println(ccgreen);
    Serial.print("ccblue=");
    Serial.println(ccblue);

    Serial.print("ccdred=");
    Serial.println(ccdred);
    Serial.print("ccdgreen=");
    Serial.println(ccdgreen);
    Serial.print("ccdblue=");
    Serial.println(ccdblue);

    Serial.print("ctred=");
    Serial.println(ctred);
    Serial.print("ctgreen=");
    Serial.println(ctgreen);
    Serial.print("ctblue=");
    Serial.println(ctblue);

    Serial.print("clred=");
    Serial.println(clred);
    Serial.print("clgreen=");
    Serial.println(clgreen);
    Serial.print("clblue=");
    Serial.println(clblue);
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
