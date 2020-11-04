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
                lred = 255;
                lgreen = 0;
                lblue = 255;
                //grp rgb comptoire gauche
                cgred = lred;
                cggreen = lgreen;
                cgblue = lblue;
                //grp rgb comptoire centrale
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;
                //grp rgb comptoire droit
                cdred = lred;
                cdgreen = lgreen;
                cdblue = lblue;

                send_rvb();
                send_rvb2();
            } //mem1 mauve

            if (Mem == 2)
            {
                lred = 255;
                lgreen = 0;
                lblue = 0;
                //grp rgb comptoire gauche
                cgred = lred;
                cggreen = lgreen;
                cgblue = lblue;
                //grp rgb comptoire centrale
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;
                //grp rgb comptoire droit
                cdred = lred;
                cdgreen = lgreen;
                cdblue = lblue;

                send_rvb();
                send_rvb2();
            } //mem2 rouge

            if (Mem == 3)
            {
                lred = 0;
                lgreen = 255;
                lblue = 0;
                //grp rgb comptoire gauche
                cgred = lred;
                cggreen = lgreen;
                cgblue = lblue;
                //grp rgb comptoire centrale
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;
                //grp rgb comptoire droit
                cdred = lred;
                cdgreen = lgreen;
                cdblue = lblue;

                send_rvb();
                send_rvb2();
            } //mem3 vert

            if (Mem == 4)
            {
                lred = 0;
                lgreen = 0;
                lblue = 255;

                //grp rgb comptoire gauche
                cgred = lred;
                cggreen = lgreen;
                cgblue = lblue;
                //grp rgb comptoire centrale
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;
                //grp rgb comptoire droit
                cdred = lred;
                cdgreen = lgreen;
                cdblue = lblue;

                send_rvb();
                send_rvb2();
            } //mem4 bleu

            if (Mem == 5)
            {
                lred = 255;
                lgreen = 127;
                lblue = 0;

                //grp rgb comptoire gauche
                cgred = lred;
                cggreen = lgreen;
                cgblue = lblue;
                //grp rgb comptoire centrale
                cred = lred;
                cgreen = lgreen;
                cblue = lblue;
                //grp rgb comptoire droit
                cdred = lred;
                cdgreen = lgreen;
                cdblue = lblue;

                send_rvb();
                send_rvb2();
            } //mem5 orange

            if (Mem == 6)
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
                //grp rgb comptoire gauche
                cgred = ccgred;
                cggreen = ccggreen;
                cgblue = ccgblue;
                //grp rgb comptoire centrale
                cred = ccred;
                cgreen = ccgreen;
                cblue = ccblue;
                //grp rgb comptoire droit
                cdred = ccdred;
                cdgreen = ccdgreen;
                cdblue = ccdblue;

                tred = ctred;
                tgreen = ctgreen;
                tblue = ctblue;

                lred = clred;
                lgreen = clgreen;
                lblue = clblue;

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
    }         //serveur args
    server.send(200, "text/plain", "OK");
} //srv_handle_set()
