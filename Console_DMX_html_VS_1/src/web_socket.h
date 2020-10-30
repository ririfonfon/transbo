//////////////////////////////////////////websocket///////////////////////////////////////////////
void webSocketEvent(uint8_t num, WStype_t type, uint8_t *payload, size_t lenght)
{
    switch (type)
    {
     case WStype_DISCONNECTED:
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

     case WStype_CONNECTED:
        clientn = clientn + 1;
        list[clientn] = num;
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
        if (payload[0] == 'a')
        {
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
                    ESP8266DMX.setSlot(temp, D[temp]);

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
                    ESP8266DMX.setSlot(temp, D[temp]);

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
                Mast[4] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M4) / 4); i++)
                {
                    int temp = M4[i];
                    D[temp] = Mast[4];
                    ESP8266DMX.setSlot(temp, D[temp]);
                } //for M4
            }     //d

            if (payload[1] == 'e')
            {
                char *pEnd;
                Mast[5] = strtol((const char *)&payload[2], &pEnd, 8);
                send_rvb();
            } //e

            if (payload[1] == 'f')
            {
                char *pEnd;
                Mast[6] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M6) / 4); i++)
                {
                    int temp = M6[i];
                    D[temp] = Mast[6];
                    ESP8266DMX.setSlot(temp, D[temp]);
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
                    ESP8266DMX.setSlot(temp, D[temp]);
                } //for M7
            }     //g

            if (payload[1] == 'h')
            {
                char *pEnd;
                Mast[8] = strtol((const char *)&payload[2], &pEnd, 8);
                for (int i = 1; i < (sizeof(M7) / 4); i++)
                {
                    int temp = M8[i];
                    D[temp] = Mast[8];
                    ESP8266DMX.setSlot(temp, D[temp]);
                } //for M7
            }     //h

            //  wvu tsr qpo nml kji //
            if (payload[1] == 'i')
            {
                char *pEnd;
                ccgred = strtol((const char *)&payload[2], &pEnd, 8);
            } //i
            if (payload[1] == 'j')
            {
                char *pEnd;
                ccggreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //j
            if (payload[1] == 'k')
            {
                char *pEnd;
                ccgblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //k

            if (payload[1] == 'l')
            {
                char *pEnd;
                ccred = strtol((const char *)&payload[2], &pEnd, 8);
            } //l
            if (payload[1] == 'm')
            {
                char *pEnd;
                ccgreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //m
            if (payload[1] == 'n')
            {
                char *pEnd;
                ccblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //n

            if (payload[1] == 'o')
            {
                char *pEnd;
                ccdred = strtol((const char *)&payload[2], &pEnd, 8);
            } //o
            if (payload[1] == 'p')
            {
                char *pEnd;
                ccdgreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //p
            if (payload[1] == 'q')
            {
                char *pEnd;
                ccdblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //q

            if (payload[1] == 'r')
            {
                char *pEnd;
                ctred = strtol((const char *)&payload[2], &pEnd, 8);
            } //r
            if (payload[1] == 's')
            {
                char *pEnd;
                ctgreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //s
            if (payload[1] == 't')
            {
                char *pEnd;
                ctblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //t

            if (payload[1] == 'u')
            {
                char *pEnd;
                clred = strtol((const char *)&payload[2], &pEnd, 8);
            } //u
            if (payload[1] == 'v')
            {
                char *pEnd;
                clgreen = strtol((const char *)&payload[2], &pEnd, 8);
            } //v
            if (payload[1] == 'w')
            {
                char *pEnd;
                clblue = strtol((const char *)&payload[2], &pEnd, 8);
            } //w
        } //payload[0]
        break;
    } //type
} //web socket