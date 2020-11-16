/////// send to all but not origin !
void feedback(uint8_t num, String txt)
{
    for (int i = 0; i < MAX_CLIENT; i++)
    {
        if (list[i] && i != num)
        {
            webSocket.sendTXT(i, txt);
        } //if (list[i] && i != num)
    }
}

//////////////////////////////////////////websocket///////////////////////////////////////////////
void webSocketEvent(uint8_t num, WStype_t type, uint8_t *payload, size_t lenght)
{
    switch (type)
    {
    case WStype_DISCONNECTED:
        clientn -= 1;
        list[num] = false;

#ifdef DEBUG
        Serial.println("Disconnected!");
        Serial.print("num : ");
        Serial.println(num);
        Serial.print("clientn : ");
        Serial.println(clientn);
#endif
        break;

    case WStype_CONNECTED:
        clientn += 1;
        list[num] = true;

#ifdef DEBUG
        Serial.println("Client connected!");
        Serial.print("num : ");
        Serial.println(num);
        Serial.print("clientn : ");
        Serial.println(clientn);
#endif

        for (int i = 0; i < MAX_CLIENT; i++)
        {
            if (list[i])
            {
#ifdef DEBUG
                Serial.println("WStype_CONNECTED == '*LOAD*'");
#endif
                webSocket.sendTXT(i, "aa:" + String(lround(Mast[1])));
                webSocket.sendTXT(i, "ab:" + String(lround(Mast[2])));
                webSocket.sendTXT(i, "ac:" + String(lround(Mast[3])));
                webSocket.sendTXT(i, "ad:" + String(lround(Mast[4])));
                webSocket.sendTXT(i, "ae:" + String(lround(Mast[5])));
                webSocket.sendTXT(i, "af:" + String(lround(Mast[6])));
                webSocket.sendTXT(i, "ag:" + String(lround(Mast[7])));
                webSocket.sendTXT(i, "ah:" + String(lround(Mast[8])));
                webSocket.sendTXT(i, "ai:" + String(lround(Mast[9])));
                webSocket.sendTXT(i, "az:" + String(lround(M)));
                webSocket.sendTXT(i, "m:" + String(Mem));
            } //if (i != num) {
        }     //for (int i = 0; i < clientn; i++)
        break;

    case WStype_TEXT:
        //  is the start for this data

        if (payload[0] == 'a')
        {
#ifdef DEBUGsocket
            Serial.println("payload[0] == 'a'");
            for (int i = 0; i < MAX_CLIENT; i++)
            {
                Serial.print("i : ");
                Serial.print(i);

                if (i != num)
                {
                    Serial.print("    num : ");
                    Serial.print(num);
                    Serial.print("   !=   ");
                    Serial.print("  list[i] : ");
                    Serial.println(list[i]);
                } //if (i != num) {
                else
                {
                    Serial.print("    num : ");
                    Serial.print(num);
                    Serial.print("   ======   ");
                    Serial.print("  list[i] : ");
                    Serial.println(list[i]);
                }

            } //for (int i = 0; i < MAX_CLIENT; i++)
#endif
            if (payload[1] == 'a')
            {
                char *pEnd;
                Mast[1] = strtol((const char *)&payload[2], &pEnd, 8);
                send_Mast(1);
                feedback(num, "aa:" + String(lround(Mast[1])));
            } //a

            if (payload[1] == 'b')
            {
                char *pEnd;
                Mast[2] = strtol((const char *)&payload[2], &pEnd, 8);
                send_Mast(2);
                feedback(num, "ab:" + String(lround(Mast[2])));

            } //b

            if (payload[1] == 'c')
            {
                char *pEnd;
                Mast[3] = strtol((const char *)&payload[2], &pEnd, 8);
                send_Mast(3);
                feedback(num, "ac:" + String(lround(Mast[3])));

            } //c

            if (payload[1] == 'd')
            {
                char *pEnd;
                Mast[4] = strtol((const char *)&payload[2], &pEnd, 8);
                send_rvb4();
                feedback(num, "ad:" + String(lround(Mast[4])));

            } //d

            if (payload[1] == 'e')
            {
                char *pEnd;
                Mast[5] = strtol((const char *)&payload[2], &pEnd, 8);
                send_Mast(5);
                feedback(num, "ae:" + String(lround(Mast[5])));

            } //e

            if (payload[1] == 'f')
            {
                char *pEnd;
                Mast[6] = strtol((const char *)&payload[2], &pEnd, 8);
                send_Mast(6);
                feedback(num, "af:" + String(lround(Mast[6])));

            } //f

            if (payload[1] == 'g')
            {
                char *pEnd;
                Mast[7] = strtol((const char *)&payload[2], &pEnd, 8);
                send_Mast(7);
                feedback(num, "ag:" + String(lround(Mast[7])));

            } //g

            if (payload[1] == 'h')
            {
                char *pEnd;
                Mast[8] = strtol((const char *)&payload[2], &pEnd, 8);
                send_Mast(8);
                feedback(num, "ah:" + String(lround(Mast[8])));

            } //h

            if (payload[1] == 'i')
            {
                char *pEnd;
                Mast[9] = strtol((const char *)&payload[2], &pEnd, 8);
                send_Mast(9);
                feedback(num, "ai:" + String(lround(Mast[9])));

            } //i

            if (payload[1] == 'z')
            {
                char *pEnd;
                M = strtol((const char *)&payload[2], &pEnd, 8);
                send_Mast(0);
                feedback(num, "az:" + String(lround(M)));
            } //z
        }     //payload[0] = A

        else if (payload[0] == 'b')
        {
#ifdef DEBUGsocket
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
        else if (payload[0] == '*')
        {
#ifdef DEBUG
            Serial.println("payload[0] == '*LOAD*'");
#endif
            for (int i = 0; i < MAX_CLIENT; i++)
            {
                if (list[i] && i != num)
                {
                    webSocket.sendTXT(i, "aa:" + String(lround(Mast[1])));
                    webSocket.sendTXT(i, "ab:" + String(lround(Mast[2])));
                    webSocket.sendTXT(i, "ac:" + String(lround(Mast[3])));
                    webSocket.sendTXT(i, "ad:" + String(lround(Mast[4])));
                    webSocket.sendTXT(i, "ae:" + String(lround(Mast[5])));
                    webSocket.sendTXT(i, "af:" + String(lround(Mast[6])));
                    webSocket.sendTXT(i, "ag:" + String(lround(Mast[7])));
                    webSocket.sendTXT(i, "ah:" + String(lround(Mast[8])));
                    webSocket.sendTXT(i, "ai:" + String(lround(Mast[9])));
                    webSocket.sendTXT(i, "az:" + String(lround(M)));
                    webSocket.sendTXT(i, "m:" + String(Mem));
                } //if (i != num) {
            }     //for (int i = 0; i < clientn; i++)

        } //payload[0] == *
        else if (payload[0] == 'm')
        {
            char *pEnd;
            int check = strtol((const char *)&payload[1], &pEnd, 10);

            if (check == 1)
            {
                Mem = 1;
                feedback(num, "m:1");
                mem_value(1);
                send_Auto_off();
                send_rvb6(); // all
            }                //mem1 mauve

            else if (check == 2)
            {
                Mem = 2;
                feedback(num, "m:2");
                mem_value(2);
                send_Auto_off();
                send_rvb6(); // all
            }                //mem2 rouge

            else if (check == 3)
            {
                Mem = 3;
                feedback(num, "m:3");
                mem_value(3);
                send_Auto_off();
                send_rvb6(); // all
            }                //mem3 vert

            else if (check == 4)
            {
                Mem = 4;
                feedback(num, "m:4");
                mem_value(4);
                send_Auto_off();
                send_rvb6(); // all
            }                //mem4 bleu

            else if (check == 5)
            {
                Mem = 5;
                feedback(num, "m:5");
                mem_value(5);
                send_Auto_off();
                send_rvb6(); // all
            }                //mem5 orange

            else if (check == 6)
            {
                Mem = 6;
                feedback(num, "m:6");
                eeprom_read();
                mem_value(6);
                send_Auto_off();
                send_rvb6();
            } //mem6 special

            else if (check == 7)
            {
                Mem = 7;
                feedback(num, "m:7");
                send_Auto_on();

            } // mem7 audio

            else if (check == 8)
            {
                Mem = 8;
                feedback(num, "m:8");
                mem_value(8);
                send_Auto_off();
                send_rvb6(); // all

            } // mem8 yellow

            else if (check == 9)
            {
                Mem = 9;
                feedback(num, "m:9");
                mem_value(9);
                send_Auto_off();
                send_rvb6(); // all

            } // mem9 magenta

            else if (check == 10)
            {
                Mem = 10;
                feedback(num, "m:10");
                mem_value(10);
                send_Auto_off();
                send_rvb6(); // all

            } // mem10 cyan

            else if (check == 11)
            {
                Mem = 11;
                feedback(num, "m:11");
                mem_value(11);
                send_Auto_off();
                send_rvb6(); // all

            } // mem11 [   ]

            else if (check == 12)
            {
                Mem = 12;
                feedback(num, "m:12");
                mem_value(12);
                send_Auto_off();
                send_rvb6(); // all

            } // mem12 SERVICE
        }     //payload[0] == 'm'
        else if (payload[0] == 'l')
        {
            char *pEnd;
            int LMem = strtol((const char *)&payload[1], &pEnd, 10);
#ifdef DEBUG
            Serial.print("Lmem=");
            Serial.println(LMem);
#endif
            if (LMem == 0)
            {
                load_spec();
            } //if(Mem==0){

            else if (LMem == 1)
            {
                save_spec();
            } //if(Mem==1){
            else if (LMem == 2)
            {
                mem_value(6);
                send_Auto_off();
                send_rvb6(); // all
            }
        } //payload[0] == 'l'
        break;
    } //type
} //web socket