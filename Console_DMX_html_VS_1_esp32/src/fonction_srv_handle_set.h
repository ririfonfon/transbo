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
