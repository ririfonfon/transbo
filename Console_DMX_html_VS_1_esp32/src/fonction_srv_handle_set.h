//////////////////////////////////////////srv_handle_set////////////////////////////////////////
void srv_handle_set()
{
    for (uint8_t i = 0; i < server.args(); i++)
    {
        if (server.argName(i) == "c")
        {
            uint32_t rvbtmp = (uint32_t)strtol(server.arg(i).c_str(), NULL, 16);
            if (rvbtmp >= 0x000000 && rvbtmp <= 0xFFFFFF)
            {
                tred = (rvbtmp >> 16);
                tgreen = (uint8_t((rvbtmp << 8) >> 16));
                tblue = (uint8_t((rvbtmp << 16) >> 16));

                rered = tred;
                regreen = tgreen;
                reblue = tblue;

                send_rvb1();
            }
        }

        if (server.argName(i) == "d")
        {
            uint32_t rvbtmp = (uint32_t)strtol(server.arg(i).c_str(), NULL, 16);
            if (rvbtmp >= 0x000000 && rvbtmp <= 0xFFFFFF)
            {
                ttred = (rvbtmp >> 16);
                ttgreen = (uint8_t((rvbtmp << 8) >> 16));
                ttblue = (uint8_t((rvbtmp << 16) >> 16));
                ttwhite = 0;

                clured = ttred;
                clugreen = ttgreen;
                clublue = ttblue;
                cluwhite = ttwhite;

                send_rvb2();
            }
        }

        //////////////////////////////////////////memoire///////////////////////////////////////////////
        if (server.argName(i) == "m")
        {
            Mem = (uint8_t)strtol(server.arg(i).c_str(), NULL, 10);

            for (int i = 0; i <= clientn; i++)
            {
                if (list[i] != -1)
                {
                    webSocket.sendTXT(list[i], "m:" + String(Mem));
                }
            } //for (int i = 0; i <= clientn; i++)

            if (Mem == 1)
            {
                //grp rgb Led
                lred = 255;
                lgreen = 0;
                lblue = 255;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = defowhite;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = defowhite;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 0;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all
            }                //mem1 mauve

            else if (Mem == 2)
            {
                lred = 255;
                lgreen = 0;
                lblue = 0;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = defowhite;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = defowhite;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 0;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all
            }                //mem2 rouge

            else if (Mem == 3)
            {
                lred = 0;
                lgreen = 255;
                lblue = 0;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = defowhite;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = defowhite;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 0;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all
            }                //mem3 vert

            else if (Mem == 4)
            {
                lred = 0;
                lgreen = 0;
                lblue = 255;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = defowhite;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = defowhite;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 0;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all
            }                //mem4 bleu

            else if (Mem == 5)
            {
                lred = 255;
                lgreen = 127;
                lblue = 0;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = defowhite;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = defowhite;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 0;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all
            }                //mem5 orange

            else if (Mem == 6)
            {
                eeprom_read();

                //grp rgb comptoire
                cred = ccred;
                cgreen = ccgreen;
                cblue = ccblue;

                lred = clured;
                lgreen = clgreen;
                lblue = clblue;

                tred = ctred;
                tgreen = ctgreen;
                tblue = ctblue;

                ttred = cttred;
                ttgreen = cttgreen;
                ttblue = cttblue;
                ttwhite = cttwhite;

                lored = clored;
                logreen = clogreen;
                loblue = cloblue;
                lowhite = clowhite;

                clured = cclured;
                clugreen = cclugreen;
                clublue = cclublue;
                cluwhite = ccluwhite;

                rered = crered;
                regreen = cregreen;
                reblue = creblue;

                send_Auto_off();
                send_rvb6();
            } //mem6 special

            else if (Mem == 7)
            {
                send_Auto_on();

            } // mem7 audio

            else if (Mem == 8)
            {
                lred = 255;
                lgreen = 255;
                lblue = 0;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = defowhite;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = defowhite;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 0;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all

            } // mem8 yellow

            else if (Mem == 9)
            {
                lred = 255;
                lgreen = 0;
                lblue = 255;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = defowhite;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = defowhite;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 0;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all

            } // mem9 magenta

            else if (Mem == 10)
            {
                lred = 0;
                lgreen = 255;
                lblue = 255;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = defowhite;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = defowhite;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 0;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all

            } // mem10 cyan

            else if (Mem == 11)
            {
                lred = 0;
                lgreen = 0;
                lblue = 0;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = 0;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = 0;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 0;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all

            } // mem11 [   ]

            else if (Mem == 12)
            {
                lred = 255;
                lgreen = 255;
                lblue = 255;

                //grp rgb Transbo 1
                tred = lred;
                tgreen = lgreen;
                tblue = lblue;

                //grp rgbw Transbo 2
                ttred = lred;
                ttgreen = lgreen;
                ttblue = lblue;
                ttwhite = 255;

                //grp rgb comptoire
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;

                //grp rgbw logo
                lored = lred;
                logreen = lgreen;
                loblue = lblue;
                lowhite = 255;

                //grp rgbw club
                clured = lred;
                clugreen = lgreen;
                clublue = lblue;
                cluwhite = 255;

                //grp rgb regie
                rered = lred;
                regreen = lgreen;
                reblue = lblue;

                send_Auto_off();
                send_rvb6(); // all

            } // mem12 SERVICE

        } //serveur m

        //////////////////////////////////////////special mem///////////////////////////////////////////
        if (server.argName(i) == "mem")
        {
#ifdef DEBUGSPEC
            Serial.print("mem=");
#endif

            Mem = (uint8_t)strtol(server.arg(i).c_str(), NULL, 10);

            if (Mem == 0)
            {

#ifdef DEBUGSPEC
                Serial.print("mem=");
                Serial.println(Mem);
#endif
                load_spec();
            } //if(Mem==0){

            if (Mem == 1)
            {
#ifdef DEBUGSPEC
                Serial.print("mem=");
                Serial.println(Mem);
#endif
                save_spec();
            } //if(Mem==1){
        }     //serveur mem

    } //serveur args
    server.send(200, "text/plain", "OK");
} //srv_handle_set()
