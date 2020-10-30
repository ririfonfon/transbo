
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

#include <variable.h>

//ESP8266WiFiMulti WiFiMulti;
ESP8266WebServer server(80);
WebSocketsServer webSocket = WebSocketsServer(81);

// dmx shield
#include <LXESP8266UARTDMX.h>

#include <void.h>
#include <srv_handle_set.h>

#include <web_socket.h>
#include <spiffs.h>

//////////////////////////////////////////S E T U P////////////////////////////////////////
void setup()
{
  EEPROM.begin(EEPROM_SIZE);

  //init pin dmx low
  pinMode(2, OUTPUT);
  digitalWrite(2, LOW);
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
    while (dir.next())
    {
      String fileName = dir.fileName();
      size_t fileSize = dir.fileSize();
#ifdef DEBUG;
      Serial.printf("FS File: %s, size: %s\n", fileName.c_str(), formatBytes(fileSize).c_str());
#endif;
    } //while (dir.next()) {
#ifdef DEBUG;
    Serial.printf("\n");
#endif;
  } //SPIFFS.begin();

  //SERVER INIT
  //list directory
  server.on("/list", HTTP_GET, handleFileList);
  //load editor
  server.on("/edit", HTTP_GET, []() {
    if (!handleFileRead("/edit.htm"))
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
  } //(EEPROM.begin(EEPROM_SIZE))

} //setup

//////////////////////////////////////////loop///////////////////////////////////////////////
void loop()
{
  webSocket.loop();
  server.handleClient();
} // loop()
