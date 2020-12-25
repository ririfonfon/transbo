#include <ESPmDNS.h>
#include <ArduinoOTA.h>

void ota_setup()
{
    // Port defaults
    // ArduinoOTA.setPort(8266);

    // Hostname defaults
    String nameDevice = "console_control";
    nameDevice += " v ";
    nameDevice += VERSION;
    ArduinoOTA.setHostname(nameDevice.c_str());

    // No authentication by default
    // ArduinoOTA.setPassword((const char *)"123");

    ArduinoOTA.onStart([]() {
#ifdef DEBUG
        Serial.println("Start");
#endif
    });
    ArduinoOTA.onEnd([]() {
#ifdef DEBUG
        Serial.println("\nEnd");
#endif
    });
    ArduinoOTA.onProgress([](unsigned int progress, unsigned int total) {
#ifdef DEBUG
        Serial.printf("Progress: %u%%\r", (progress / (total / 100)));
#endif
    });
    ArduinoOTA.onError([](ota_error_t error) {
#ifdef DEBUG
        Serial.printf("Error[%u]: ", error);
        if (error == OTA_AUTH_ERROR)
            Serial.println("Auth Failed");
        else if (error == OTA_BEGIN_ERROR)
            Serial.println("Begin Failed");
        else if (error == OTA_CONNECT_ERROR)
            Serial.println("Connect Failed");
        else if (error == OTA_RECEIVE_ERROR)
            Serial.println("Receive Failed");
        else if (error == OTA_END_ERROR)
            Serial.println("End Failed");
#endif
    });
    ArduinoOTA.begin();
}

void ota_loop()
{
    ArduinoOTA.handle();
}