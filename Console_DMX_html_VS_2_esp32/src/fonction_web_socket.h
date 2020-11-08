//////////////////////////////////////////websocket///////////////////////////////////////////////
// void webSocketEvent(uint8_t num, WStype_t type, uint8_t *payload, size_t lenght)
void webSocketEvent(AsyncWebSocket       *server,
             AsyncWebSocketClient *client,
             AwsEventType          type,
             void                 *arg,
             uint8_t              *payload,
             size_t                lenght)
{
    switch (type)
    {
    case  WS_EVT_DISCONNECT:
        clientn = clientn - 1;
        list[clientn] = 0;
#ifdef DEBUG
        Serial.println("Disconnected!");
        Serial.print("clientn : ");
        Serial.println(clientn);
        Serial.print("list[clientn] : ");
        Serial.println(list[clientn]);
#endif

        break;

    case WS_EVT_CONNECT:
        clientn = clientn + 1;
        list[clientn] = client->id();
#ifdef DEBUG
        Serial.println("Client connected!");
        Serial.print("clientn : ");
        Serial.println(clientn);
        Serial.print("list[clientn] : ");
        Serial.println(list[clientn]);
#endif

        break;

    // case WStype_TEXT:
    // case WS_TEXT:
    case WS_EVT_DATA:

        //  is the start for this data
        if (payload[0] == 'a')
        {
            for (int i = 0; i < clientn; i++)
            {
                // webSocket.sendTXT(list[i], payload);
                // webSocket.textAll(payload,lenght);
                webSocket.text(list[i], payload, lenght);
                #ifdef DEBUG
                Serial.println("webSocket.textAll(payload,lenght);");
                Serial.print("clientn : ");
                Serial.println(clientn);
                Serial.print("list[clientn] : ");
                Serial.println(list[clientn]);
                #endif

            }

#ifdef DEBUGSPEC
            Serial.println("payload[0] == 'a'");
#endif
            if (payload[1] == 'a')
            {
#ifdef DEBUGSPEC
                Serial.println("payload[1] == 'a'");
#endif
                char *pEnd;
                Mast[1] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M1) / 4); i++)
                {
                    int temp = M1[i];
                    D[temp] = Mast[1];
                    ESP32DMX.setSlot(temp, D[temp]);

                } //for M1
            }     //a

            if (payload[1] == 'b')
            {
                char *pEnd;
                Mast[2] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M2) / 4); i++)
                {
                    int temp = M2[i];
                    D[temp] = Mast[2];
                    ESP32DMX.setSlot(temp, D[temp]);

                } //for M2
            }     //b

            if (payload[1] == 'c')
            {
                char *pEnd;
                Mast[3] = strtol((const char *)&payload[2], &pEnd, 8);
                send_rvb2();
            } //c

            if (payload[1] == 'd')
            {
                char *pEnd;
                Mast[5] = strtol((const char *)&payload[2], &pEnd, 8);
                send_rvb();
            } //d

            if (payload[1] == 'e')
            {
                char *pEnd;
                Mast[5] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M5) / 4); i++)
                {
                    int temp = M5[i];
                    D[temp] = Mast[5];
                    ESP32DMX.setSlot(temp, D[temp]);
                } //for M5
            }     //e

            if (payload[1] == 'f')
            {
                char *pEnd;
                Mast[6] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M6) / 4); i++)
                {
                    int temp = M6[i];
                    D[temp] = Mast[6];
                    ESP32DMX.setSlot(temp, D[temp]);
                } //for M6
            }     //f

            if (payload[1] == 'g')
            {
                char *pEnd;
                Mast[7] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M7) / 4); i++)
                {
                    int temp = M7[i];
                    D[temp] = Mast[7];
                    ESP32DMX.setSlot(temp, D[temp]);
                } //for M7
            }     //g

            if (payload[1] == 'h')
            {
                char *pEnd;
                Mast[8] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M8) / 4); i++)
                {
                    int temp = M8[i];
                    D[temp] = Mast[8];
                    ESP32DMX.setSlot(temp, D[temp]);
                } //for M8
            }     //h

            if (payload[1] == 'i')
            {
                char *pEnd;
                Mast[9] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M9) / 4); i++)
                {
                    int temp = M9[i];
                    D[temp] = Mast[9];
                    ESP32DMX.setSlot(temp, D[temp]);
                } //for M9
            }     //i
        }         //payload[0] = A

        else if (payload[0] == 'b')
        {
#ifdef DEBUGSPEC
            Serial.println("payload[0] == 'b'");
#endif
            //  wvu tsr qpo nml kji //
            if (payload[1] == 'a')
            {
                char *pEnd;
                ccred = strtol((const char *)&payload[2], &pEnd, 8);
            } //a
            else if (payload[1] == 'b')
            {
                char *pEnd;
                ccgreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //b
            else if (payload[1] == 'c')
            {
                char *pEnd;
                ccblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //c
            else if (payload[1] == 'd')
            {
                char *pEnd;
                clred = strtol((const char *)&payload[2], &pEnd, 8);
            } //d
            else if (payload[1] == 'e')
            {
                char *pEnd;
                clgreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //e
            else if (payload[1] == 'f')
            {
                char *pEnd;
                clblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //f
            else if (payload[1] == 'j')
            {
                char *pEnd;
                ctred = strtol((const char *)&payload[2], &pEnd, 8);
            } //j
            else if (payload[1] == 'h')
            {
                char *pEnd;
                ctgreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //h
            else if (payload[1] == 'i')
            {
                char *pEnd;
                ctblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //i
            else if (payload[1] == 'j')
            {
                char *pEnd;
                cttred = strtol((const char *)&payload[2], &pEnd, 8);
            } //j
            else if (payload[1] == 'k')
            {
                char *pEnd;
                cttgreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //k
            else if (payload[1] == 'l')
            {
                char *pEnd;
                cttblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //l
            else if (payload[1] == 'm')
            {
                char *pEnd;
                cttwhite = strtol((const char *)&payload[2], &pEnd, 8);
            } //m
            else if (payload[1] == 'n')
            {
                char *pEnd;
                clored = strtol((const char *)&payload[2], &pEnd, 8);
            } //n
            else if (payload[1] == 'o')
            {
                char *pEnd;
                clogreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //o
            else if (payload[1] == 'p')
            {
                char *pEnd;
                cloblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //p
            else if (payload[1] == 'q')
            {
                char *pEnd;
                clowhite = strtol((const char *)&payload[2], &pEnd, 8);
            } //q
            else if (payload[1] == 'r')
            {
                char *pEnd;
                cclured = strtol((const char *)&payload[2], &pEnd, 8);
            } //r
            else if (payload[1] == 's')
            {
                char *pEnd;
                cclugreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //s
            else if (payload[1] == 't')
            {
                char *pEnd;
                cclublue = strtol((const char *)&payload[2], &pEnd, 8);
            } //t
            else if (payload[1] == 'u')
            {
                char *pEnd;
                ccluwhite = strtol((const char *)&payload[2], &pEnd, 8);
            } //u
            else if (payload[1] == 'v')
            {
                char *pEnd;
                crered = strtol((const char *)&payload[2], &pEnd, 8);
            } //v
            else if (payload[1] == 'w')
            {
                char *pEnd;
                cregreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //w
            else if (payload[1] == 'x')
            {
                char *pEnd;
                creblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //x

        } //payload[0] == B
        break;
    } //type
} //web socket