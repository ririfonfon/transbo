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

                rored = tred;
                rogreen = tgreen;
                roblue = tblue;
                rowhite = defowhite;
                roambre = 0;
                rouv = 0;

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

                ered = ttred;
                egreen = ttgreen;
                eblue = ttblue;
                ewhite = defowhite;
                eambre = 0;
                euv = 0;

                cred = ttred;
                cgreen = ttgreen;
                cblue = ttblue;

                send_rvb2();
            }
        }

        //////////////////////////////////////////memoire///////////////////////////////////////////////

        //////////////////////////////////////////special mem///////////////////////////////////////////
        if (server.argName(i) == "mem")
        {
            int LMem = (uint8_t)strtol(server.arg(i).c_str(), NULL, 10);
#ifdef DEBUGSPEC
            Serial.print("mem=");
            Serial.println(LMem);
#endif

            if (LMem == 0)
            {
                load_spec();
            } //if(Mem==0){

            if (LMem == 1)
            {
                save_spec();
            } //if(Mem==1){
            else if (LMem == 2)
            {
                mem_value(6);
                send_Auto_off();
                send_rvb6(); // all
            }
        } //serveur mem

    } //serveur args
    server.send(200, "text/plain", "OK");
} //srv_handle_set()
