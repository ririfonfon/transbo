// platformio run --target uploadfs // cmd console download spiff

#define VERSION 10

// #define DEBUG 1
// #define DEBUGH 1
// #define DEBUGC 1
// #define DEBUGMASTER 1
// #define DEBUGDMX 1
// #define DEBUGRVB 1
// #define DEBUGcolor 1
// #define DEBUGsocket 1
// #define DEBUGSPEC 1

#include <Arduino.h>
#include <WiFi.h>
#include <WiFiAP.h>

#include <WebSocketsServer.h>
#include <WebServer.h>
#include <ESPmDNS.h>
#include <SPIFFS.h>

#include <EEPROM.h>
#define EEPROM_SIZE 64

#include <wifi_variable.h>

struct Led
{
  // state variables
  uint8_t pin;
  bool on;

  // methods
  void update()
  {
    digitalWrite(pin, on ? HIGH : LOW);
  }
};

bool master_init = true;

Led onboard_led = {2, false};

WebServer server(80);
WebSocketsServer webSocket = WebSocketsServer(81);

// dmx
#include <LXESP32DMX.h>

#include <a_mem_value.h>
#include <fonction_void.h>

#include <fonction_web_socket.h>
#include <fonction_srv_handle_set.h>

#include <fonction_spiffs.h>

// ota
#include <ota.h>

//////////////////////////////////////////////////// S E T U P
void setup()
{
  EEPROM.begin(EEPROM_SIZE);

  // init led
  init_led();

  // init dmx
  init_dmx_out();

#ifdef DEBUG
  Serial.begin(115200);
  Serial.println();
#endif

  //////////////////////////////////////////////////// connect to WiFi

  // WiFi.mode(WIFI_OFF);
  // delay(1000);
  // WiFi.mode(WIFI_AP);
  // delay(1000);

  // WiFi.softAPConfig(Ip, Ip, NMask);

  // WiFi.softAPsetHostname(host);
  // WiFi.softAP(ssid, password, 10, 1, MAX_CLIENT);
  // WiFi.begin();
  // IPAddress myIP = WiFi.softAPIP();

  WiFi.setHostname(host);
  // IPAddress Ip(192, 168, 0, 150);// riri dev
  IPAddress Ip(192, 168, 2, 250);// Transbo
  IPAddress NMask(255, 0, 0, 0);
  WiFi.config(Ip, Ip, NMask);

  WiFi.begin(ssid, password);
  delay(1000);
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(100);
  }

  Serial.println("\nConnected to the WiFi network");

  IPAddress myIP = WiFi.localIP();

  //////////////////////////////////////////////////// SPIFFS
  SPIFFS.begin();
  listDir(SPIFFS, "/", 0);

  //////////////////////////////////////////////////// SERVER INIT
  // list directory
  server.on("/list", HTTP_GET, handleFileList);
  // load editor
  server.on("/edit", HTTP_GET, []()
            {
    if (!handleFileRead("/edit.html"))
      server.send(404, "text/plain", "FileNotFound"); });
  // create file
  server.on("/edit", HTTP_PUT, handleFileCreate);
  // delete file
  server.on("/edit", HTTP_DELETE, handleFileDelete);
  // first callback is called after the request has ended with all parsed arguments
  // second callback handles file uploads at that location
  server.on(
      "/edit", HTTP_POST, []()
      { server.send(200, "text/plain", ""); },
      handleFileUpload);

  // called when the url is not defined here
  // use it to load content from SPIFFS
  server.onNotFound([]()
                    {
    if (!handleFileRead(server.uri()))
      server.send(404, "text/plain", "FileNotFound"); }); // server.onNotFound

  // start webSocket server
  webSocket.begin();
  webSocket.onEvent(webSocketEvent);
  webSocket.enableHeartbeat(15000, 3000, 2);

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

  // Serveur
  server.on("/set", srv_handle_set);
  server.serveStatic("/", SPIFFS, "/console.html");
  server.serveStatic("/main.js", SPIFFS, "/main.js");
  server.serveStatic("/main.css", SPIFFS, "/main.css");
  server.serveStatic("/favicon.ico", SPIFFS, "/favicon.ico");
  server.serveStatic("/special.html", SPIFFS, "/special.html");
  server.serveStatic("/special", SPIFFS, "/special.html");
  server.serveStatic("/special.js", SPIFFS, "/special.js");
  server.serveStatic("/special.css", SPIFFS, "/special.css");
  server.serveStatic("/remote", SPIFFS, "/remote.html");
  server.serveStatic("/remote.js", SPIFFS, "/remote.js");
  server.serveStatic("/remote.css", SPIFFS, "/remote.css");
  server.begin();

  MDNS.addService("http", "tcp", 80);
  MDNS.addService("ws", "tcp", 81);

  //////////////////////////////////////////////////// defo dmx
  defo_dmx();

  //////////////////////////////////////////////////// EEPROM
  init_eeprom();
  eeprom_read();

#ifdef DEBUG
  Serial.println("HTTP server started.");
  Serial.println("ready!");
  Serial.println();
  Serial.print("Configuring access point...");
  Serial.println("AP IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println("HTTP server OK");
#endif

  WiFi.setAutoReconnect(true);
  WiFi.persistent(true);

  //////////////////////////////////////////////////// ota
  ota_setup();

} // setup

//////////////////////////////////////////////////// loop
void loop()
{
  webSocket.loop();
  server.handleClient();
  onboard_led.on = millis() % 2000 < 1000;
  onboard_led.update();
  // OTA
  ota_loop();

  if (master_init)
  {
    defo_master();
    master_init = false;
  }
} // loop()
