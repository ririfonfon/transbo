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
                send_rvb1();
            }
        }

        //////////////////////////////////////////memoire///////////////////////////////////////////////
        if (server.argName(i) == "m")
        {
            Mem = (uint8_t)strtol(server.arg(i).c_str(), NULL, 10);
#ifdef DEBUGH
            Serial.print("m=");
            Serial.println(Mem);
#endif

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

                send_rvb6(); // all
            }                //mem1 mauve

            if (Mem == 2)
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

                send_rvb6(); // all
            }                //mem2 rouge

            if (Mem == 3)
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

                send_rvb6(); // all
            }                //mem3 vert

            if (Mem == 4)
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

                send_rvb6(); // all
            }                //mem4 bleu

            if (Mem == 5)
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

                send_rvb6(); // all
            }                //mem5 orange

            if (Mem == 6)
            {
                ccred = EEPROM.read(1);
                ccgreen = EEPROM.read(2);
                ccblue = EEPROM.read(3);
                clured = EEPROM.read(4);
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

                send_rvb6();
            } //mem6 special

            if (Mem == 7)
            {
                ESP32DMX.setSlot(1, 0);
                ESP32DMX.setSlot(2, 255);

                for (int i = 135; i < end_dmx; i++)
                {
                    ESP32DMX.setSlot(i, 0);
                }

            } // mem7 audio

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
