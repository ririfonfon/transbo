//////////////////////////////////////////V O I D////////////////////////////////////////
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

void eeprom_read()
{
    ccred = EEPROM.read(1);
    ccgreen = EEPROM.read(2);
    ccblue = EEPROM.read(3);
    clred = EEPROM.read(4);
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
    csred = EEPROM.read(25);
    csgreen = EEPROM.read(26);
    csblue = EEPROM.read(27);
    cbred = EEPROM.read(28);
    cbgreen = EEPROM.read(29);
    cbblue = EEPROM.read(30);
    cered = EEPROM.read(31);
    cegreen = EEPROM.read(32);
    ceblue = EEPROM.read(33);
    cewhite = EEPROM.read(34);
    ceambre = EEPROM.read(35);
    ceuv = EEPROM.read(36);
    DIA = EEPROM.read(37);

#ifdef DEBUG
    Serial.println("EEPROM READ");
#endif
} //eeprom_read

void eeprom_write()
{
    EEPROM.write(1, ccred);
    EEPROM.write(2, ccgreen);
    EEPROM.write(3, ccblue);
    EEPROM.write(4, clred);
    EEPROM.write(5, clgreen);
    EEPROM.write(6, clblue);
    EEPROM.write(7, ctred);
    EEPROM.write(8, ctgreen);
    EEPROM.write(9, ctblue);
    EEPROM.write(10, cttred);
    EEPROM.write(11, cttgreen);
    EEPROM.write(12, cttblue);
    EEPROM.write(13, cttwhite);
    EEPROM.write(14, clored);
    EEPROM.write(15, clogreen);
    EEPROM.write(16, cloblue);
    EEPROM.write(17, clowhite);
    EEPROM.write(18, cclured);
    EEPROM.write(19, cclugreen);
    EEPROM.write(20, cclublue);
    EEPROM.write(21, ccluwhite);
    EEPROM.write(22, crered);
    EEPROM.write(23, cregreen);
    EEPROM.write(24, creblue);
    EEPROM.write(25, csred);
    EEPROM.write(26, csgreen);
    EEPROM.write(27, csblue);
    EEPROM.write(28, cbred);
    EEPROM.write(29, cbgreen);
    EEPROM.write(30, cbblue);
    EEPROM.write(31, cered);
    EEPROM.write(32, cegreen);
    EEPROM.write(33, ceblue);
    EEPROM.write(34, cewhite);
    EEPROM.write(35, ceambre);
    EEPROM.write(36, ceuv);
    EEPROM.write(37, DIA);

    EEPROM.write(62, 'O');
    EEPROM.write(63, 'K');
    EEPROM.commit();

#ifdef DEBUG
    Serial.println("EEPROM WRITE");
#endif
} //eeprom_write

void load_spec()
{
    eeprom_read();
    for (int i = 0; i < MAX_CLIENT; i++)
    {

        if (list[i])
        {

            webSocket.sendTXT(i, "ba:" + String(lround(ccred)));
            webSocket.sendTXT(i, "bb:" + String(lround(ccgreen)));
            webSocket.sendTXT(i, "bc:" + String(lround(ccblue)));

            webSocket.sendTXT(i, "bd:" + String(lround(clured)));
            webSocket.sendTXT(i, "be:" + String(lround(clgreen)));
            webSocket.sendTXT(i, "bf:" + String(lround(clblue)));

            webSocket.sendTXT(i, "bg:" + String(lround(ctred)));
            webSocket.sendTXT(i, "bh:" + String(lround(ctgreen)));
            webSocket.sendTXT(i, "bi:" + String(lround(ctblue)));

            webSocket.sendTXT(i, "bj:" + String(lround(cttred)));
            webSocket.sendTXT(i, "bk:" + String(lround(cttgreen)));
            webSocket.sendTXT(i, "bl:" + String(lround(cttblue)));
            webSocket.sendTXT(i, "bm:" + String(lround(cttwhite)));

            webSocket.sendTXT(i, "bn:" + String(lround(clored)));
            webSocket.sendTXT(i, "bo:" + String(lround(clogreen)));
            webSocket.sendTXT(i, "bp:" + String(lround(cloblue)));
            webSocket.sendTXT(i, "bq:" + String(lround(clowhite)));

            webSocket.sendTXT(i, "br:" + String(lround(cclured)));
            webSocket.sendTXT(i, "bs:" + String(lround(cclugreen)));
            webSocket.sendTXT(i, "bt:" + String(lround(cclublue)));
            webSocket.sendTXT(i, "bu:" + String(lround(ccluwhite)));

            webSocket.sendTXT(i, "bv:" + String(lround(crered)));
            webSocket.sendTXT(i, "bw:" + String(lround(cregreen)));
            webSocket.sendTXT(i, "bx:" + String(lround(creblue)));

            webSocket.sendTXT(i, "ea:" + String(lround(csred)));
            webSocket.sendTXT(i, "eb:" + String(lround(csgreen)));
            webSocket.sendTXT(i, "ec:" + String(lround(csblue)));

            webSocket.sendTXT(i, "ed:" + String(lround(cbred)));
            webSocket.sendTXT(i, "ee:" + String(lround(cbgreen)));
            webSocket.sendTXT(i, "ef:" + String(lround(cbblue)));

            webSocket.sendTXT(i, "eg:" + String(lround(cered)));
            webSocket.sendTXT(i, "eh:" + String(lround(cegreen)));
            webSocket.sendTXT(i, "ei:" + String(lround(ceblue)));
            webSocket.sendTXT(i, "ej:" + String(lround(cewhite)));
            webSocket.sendTXT(i, "ek:" + String(lround(ceambre)));
            webSocket.sendTXT(i, "el:" + String(lround(ceuv)));

            webSocket.sendTXT(i, "em:" + String(lround(DIA)));


        } // if (list[i] !=0)

    } // for client

} //load_spec

void save_spec()
{
    eeprom_write();
} //save_spec

void send_rvb1()
{
    ///////////////////////////////////////////////////////grp Trans 1
    for (int i = 1; i < (sizeof(RR) / 4); i++)
    {
        int temp = RR[i];
        D[temp] = tred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RR

    for (int i = 1; i < (sizeof(GG) / 4); i++)
    {
        int temp = GG[i];
        D[temp] = tgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GG

    for (int i = 1; i < (sizeof(BB) / 4); i++)
    {
        int temp = BB[i];
        D[temp] = tblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BB

    ///////////////////////////////////////////////////////grp regie
    for (int i = 1; i < (sizeof(RRRRRRR) / 4); i++)
    {
        int temp = RRRRRRR[i];
        D[temp] = rered;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRRR

    for (int i = 1; i < (sizeof(GGGGGGG) / 4); i++)
    {
        int temp = GGGGGGG[i];
        D[temp] = regreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGGG

    for (int i = 1; i < (sizeof(BBBBBBB) / 4); i++)
    {
        int temp = BBBBBBB[i];
        D[temp] = reblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBBB

} //send_rvb1

void send_rvb2()
{
    ///////////////////////////////////////////////////////grp trans 2
    for (int i = 1; i < (sizeof(RRRR) / 4); i++)
    {
        int temp = RRRR[i];
        D[temp] = ttred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRR

    for (int i = 1; i < (sizeof(GGGG) / 4); i++)
    {
        int temp = GGGG[i];
        D[temp] = ttgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGG

    for (int i = 1; i < (sizeof(BBBB) / 4); i++)
    {
        int temp = BBBB[i];
        D[temp] = ttblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBB

    for (int i = 1; i < (sizeof(WWWW) / 4); i++)
    {
        int temp = WWWW[i];
        D[temp] = ttwhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for WWWW

    ///////////////////////////////////////////////////////grp club
    for (int i = 1; i < (sizeof(RRRRRR) / 4); i++)
    {
        int temp = RRRRRR[i];
        D[temp] = clured;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRR

    for (int i = 1; i < (sizeof(GGGGGG) / 4); i++)
    {
        int temp = GGGGGG[i];
        D[temp] = clugreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGG

    for (int i = 1; i < (sizeof(BBBBBB) / 4); i++)
    {
        int temp = BBBBBB[i];
        D[temp] = clublue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBB

    for (int i = 1; i < (sizeof(WWWWWW) / 4); i++)
    {
        int temp = WWWWWW[i];
        D[temp] = cluwhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for WWWW

    ///////////////////////////////////////////////////////escalier
    for (int i = 1; i < (sizeof(RRRRRRRRRR) / 4); i++)
    {
        int temp = RRRRRRRRRR[i];
        D[temp] = ered;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRRRRRRRRR

    for (int i = 1; i < (sizeof(GGGGGGGGG) / 4); i++)
    {
        int temp = GGGGGGGGGG[i];
        D[temp] = egreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGGGGGGGG

    for (int i = 1; i < (sizeof(BBBBBBBBBB) / 4); i++)
    {
        int temp = BBBBBBBBBB[i];
        D[temp] = eblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBBBBBBBB

    for (int i = 1; i < (sizeof(WWWWWWWWWW) / 4); i++)
    {
        int temp = WWWWWWWWWW[i];
        D[temp] = ewhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for WWWWWWWWWW

    for (int i = 1; i < (sizeof(AAAAAAAAAA) / 4); i++)
    {
        int temp = AAAAAAAAAA[i];
        D[temp] = eambre;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for AAAAAAAAAA

    for (int i = 1; i < (sizeof(UUUUUUUUUU) / 4); i++)
    {
        int temp = UUUUUUUUUU[i];
        D[temp] = euv;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for UUUUUUUUUU
} //send_rvb2

void send_rvb3()
{
    //grp Colonnes
    for (int i = 1; i < (sizeof(RRR) / 4); i++)
    {
        int temp = RRR[i];
        D[temp] = cred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRR

    for (int i = 1; i < (sizeof(GGG) / 4); i++)
    {
        int temp = GGG[i];
        D[temp] = cgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGG

    for (int i = 1; i < (sizeof(BBB) / 4); i++)
    {
        int temp = BBB[i];
        D[temp] = cblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBB

} //send_rvb3

void send_rvb4()
{
    //grp Led bar
    for (int i = 1; i < (sizeof(R) / 4); i++)
    {
        int temp = R[i];
        D[temp] = ((lred / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for R

    for (int i = 1; i < (sizeof(G) / 4); i++)
    {
        int temp = G[i];
        D[temp] = ((lgreen / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for G

    for (int i = 1; i < (sizeof(B) / 4); i++)
    {
        int temp = B[i];
        D[temp] = ((lblue / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for B

    //grp sandwich
    for (int i = 1; i < (sizeof(RRRRRRRR) / 4); i++)
    {
        int temp = RRRRRRRR[i];
        D[temp] = sred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRRRRRRR

    for (int i = 1; i < (sizeof(GGGGGGGG) / 4); i++)
    {
        int temp = GGGGGGGG[i];
        D[temp] = sgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGGGGGG

    for (int i = 1; i < (sizeof(BBBBBBBB) / 4); i++)
    {
        int temp = BBBBBBBB[i];
        D[temp] = sblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBBBBBB

    //grp bouteille
    for (int i = 1; i < (sizeof(RRRRRRRRR) / 4); i++)
    {
        int temp = RRRRRRRRR[i];
        D[temp] = bred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRRRRRRRR

    for (int i = 1; i < (sizeof(GGGGGGGG) / 4); i++)
    {
        int temp = GGGGGGGGG[i];
        D[temp] = bgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGGGGGGG

    for (int i = 1; i < (sizeof(BBBBBBBBB) / 4); i++)
    {
        int temp = BBBBBBBBB[i];
        D[temp] = bblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBBBBBBB

} //send_rvb4

void send_rvb6()
{
    ///////////////////////////////////////////////////////grp led bar
    for (int i = 1; i < (sizeof(R) / 4); i++)
    {
        int temp = R[i];
        D[temp] = ((lred / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for R

    for (int i = 1; i < (sizeof(G) / 4); i++)
    {
        int temp = G[i];
        D[temp] = ((lgreen / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for G

    for (int i = 1; i < (sizeof(B) / 4); i++)
    {
        int temp = B[i];
        D[temp] = ((lblue / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for B

    ///////////////////////////////////////////////////////grp trans 1
    for (int i = 1; i < (sizeof(RR) / 4); i++)
    {
        int temp = RR[i];
        D[temp] = tred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RR

    for (int i = 1; i < (sizeof(GG) / 4); i++)
    {
        int temp = GG[i];
        D[temp] = tgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GG

    for (int i = 1; i < (sizeof(BB) / 4); i++)
    {
        int temp = BB[i];
        D[temp] = tblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BB

    ///////////////////////////////////////////////////////grp colonnes
    for (int i = 1; i < (sizeof(RRR) / 4); i++)
    {
        int temp = RRR[i];
        D[temp] = cred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRR

    for (int i = 1; i < (sizeof(GGG) / 4); i++)
    {
        int temp = GGG[i];
        D[temp] = cgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGG

    for (int i = 1; i < (sizeof(BBB) / 4); i++)
    {
        int temp = BBB[i];
        D[temp] = cblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBB

    ///////////////////////////////////////////////////////grp trans 2
    for (int i = 1; i < (sizeof(RRRR) / 4); i++)
    {
        int temp = RRRR[i];
        D[temp] = ttred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRR

    for (int i = 1; i < (sizeof(GGGG) / 4); i++)
    {
        int temp = GGGG[i];
        D[temp] = ttgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGG

    for (int i = 1; i < (sizeof(BBBB) / 4); i++)
    {
        int temp = BBBB[i];
        D[temp] = ttblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBB

    for (int i = 1; i < (sizeof(WWWW) / 4); i++)
    {
        int temp = WWWW[i];
        D[temp] = ttwhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for WWWW

    ///////////////////////////////////////////////////////grp logo
    for (int i = 1; i < (sizeof(RRRRR) / 4); i++)
    {
        int temp = RRRRR[i];
        D[temp] = lored;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRRR

    for (int i = 1; i < (sizeof(GGGGG) / 4); i++)
    {
        int temp = GGGGG[i];
        D[temp] = logreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGGG

    for (int i = 1; i < (sizeof(BBBBB) / 4); i++)
    {
        int temp = BBBBB[i];
        D[temp] = loblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBBB

    for (int i = 1; i < (sizeof(WWWWW) / 4); i++)
    {
        int temp = WWWWW[i];
        D[temp] = lowhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for WWWWW

    ///////////////////////////////////////////////////////grp club
    for (int i = 1; i < (sizeof(RRRRRR) / 4); i++)
    {
        int temp = RRRRRR[i];
        D[temp] = clured;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRR

    for (int i = 1; i < (sizeof(GGGGGG) / 4); i++)
    {
        int temp = GGGGGG[i];
        D[temp] = clugreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGG

    for (int i = 1; i < (sizeof(BBBBBB) / 4); i++)
    {
        int temp = BBBBBB[i];
        D[temp] = clublue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBB

    for (int i = 1; i < (sizeof(WWWWWW) / 4); i++)
    {
        int temp = WWWWWW[i];
        D[temp] = cluwhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for WWWW

    ///////////////////////////////////////////////////////grp regie
    for (int i = 1; i < (sizeof(RRRRRRR) / 4); i++)
    {
        int temp = RRRRRRR[i];
        D[temp] = rered;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRRR

    for (int i = 1; i < (sizeof(GGGGGGG) / 4); i++)
    {
        int temp = GGGGGGG[i];
        D[temp] = regreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGGG

    for (int i = 1; i < (sizeof(BBBBBBB) / 4); i++)
    {
        int temp = BBBBBBB[i];
        D[temp] = reblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBBB

    ///////////////////////////////////////////////////////grp sandwich
    for (int i = 1; i < (sizeof(RRRRRRRR) / 4); i++)
    {
        int temp = RRRRRRRR[i];
        D[temp] = sred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRRRRRR

    for (int i = 1; i < (sizeof(GGGGGGGG) / 4); i++)
    {
        int temp = GGGGGGGG[i];
        D[temp] = sgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGGGGGG

    for (int i = 1; i < (sizeof(BBBBBBBB) / 4); i++)
    {
        int temp = BBBBBBBB[i];
        D[temp] = sblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBBBBBB

    ///////////////////////////////////////////////////////grp bouteille
    for (int i = 1; i < (sizeof(RRRRRRRRR) / 4); i++)
    {
        int temp = RRRRRRRRR[i];
        D[temp] = bred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRRRRRRRR

    for (int i = 1; i < (sizeof(GGGGGGGG) / 4); i++)
    {
        int temp = GGGGGGGGG[i];
        D[temp] = bgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGGGGGGG

    for (int i = 1; i < (sizeof(BBBBBBBBB) / 4); i++)
    {
        int temp = BBBBBBBBB[i];
        D[temp] = bblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBBBBBBB

    ///////////////////////////////////////////////////////escalier
    for (int i = 1; i < (sizeof(RRRRRRRRRR) / 4); i++)
    {
        int temp = RRRRRRRRRR[i];
        D[temp] = ered;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRRRRRRRRRR

    for (int i = 1; i < (sizeof(GGGGGGGGG) / 4); i++)
    {
        int temp = GGGGGGGGGG[i];
        D[temp] = egreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGGGGGGGGG

    for (int i = 1; i < (sizeof(BBBBBBBBBB) / 4); i++)
    {
        int temp = BBBBBBBBBB[i];
        D[temp] = eblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBBBBBBBBB

    for (int i = 1; i < (sizeof(WWWWWWWWWW) / 4); i++)
    {
        int temp = WWWWWWWWWW[i];
        D[temp] = ewhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for WWWWWWWWWW

    for (int i = 1; i < (sizeof(AAAAAAAAAA) / 4); i++)
    {
        int temp = AAAAAAAAAA[i];
        D[temp] = eambre;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for AAAAAAAAAA

    for (int i = 1; i < (sizeof(UUUUUUUUUU) / 4); i++)
    {
        int temp = UUUUUUUUUU[i];
        D[temp] = euv;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for UUUUUUUUUU

} //send_rvb6

void send_Mast(int Mas)
{
    if (Mas == 1)
    {
        for (int i = 1; i < (sizeof(M1) / 4); i++)
        {
            int temp = M1[i];
            if (OFF)
            {
                D[temp] = 0;
            }
            else
            {
                D[temp] = Mast[1];
            }
            ESP32DMX.setSlot(temp, D[temp]);

        } //for M1
    }
    if (Mas == 2)
    {
        for (int i = 1; i < (sizeof(M2) / 4); i++)
        {
            int temp = M2[i];
            if (OFF)
            {
                D[temp] = 0;
            }
            else
            {
                D[temp] = Mast[2];
            }
            ESP32DMX.setSlot(temp, D[temp]);
        } //for M2
    }
    if (Mas == 3 || Mas == 0)
    {
        for (int i = 1; i < (sizeof(M3) / 4); i++)
        {
            int temp = M3[i];
            D[temp] = (Mast[3] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } //for M3
    }
    if (Mas == 4 || Mas == 0)
    {
        for (int i = 1; i < (sizeof(M4) / 4); i++)
        {
            int temp = M4[i];
            D[temp] = (Mast[4] / 255) * MM;
            ESP32DMX.setSlot(temp, D[temp]);
        } //for M3
    }
    if (Mas == 5 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M5) / 4); i++)
        {
            int temp = M5[i];
            D[temp] = (Mast[5] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } //for M5
    }
    if (Mas == 6 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M6) / 4); i++)
        {
            int temp = M6[i];
            D[temp] = (Mast[6] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } //for M6
    }
    if (Mas == 7 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M7) / 4); i++)
        {
            int temp = M7[i];
            D[temp] = (Mast[7] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } //for M7
    }
    if (Mas == 8 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M8) / 4); i++)
        {
            int temp = M8[i];
            D[temp] = (Mast[8] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } //for M8
    }
    if (Mas == 9 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M9) / 4); i++)
        {
            int temp = M9[i];
            D[temp] = (Mast[9] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } //for M9
    }
    if (Mas == 10 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M10) / 4); i++)
        {
            int temp = M10[i];
            D[temp] = (Mast[10] / 255) * MM;
            
            if(i==1)
            {
                if (GAUCHE)
                {
                ESP32DMX.setSlot(temp, D[temp]);
                }
                else
                {
                ESP32DMX.setSlot(temp, 0);
                }
            }
            else if(i==2)
            {
                if (DROIT)
                {
                ESP32DMX.setSlot(temp, D[temp]);
                }
                else
                {
                ESP32DMX.setSlot(temp, 0);
                }
            }
            
        } //for M10
    }

} //send_Mast

void send_Auto_on()
{
    for (int i = 1; i < (sizeof(Soundfull) / 4); i++)
    {
        int temp = Soundfull[i];
        D[temp] = 25;
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Speedfull) / 4); i++)
    {
        int temp = Speedfull[i];
        D[temp] = 127;
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Soundnicols) / 4); i++)
    {
        int temp = Soundnicols[i];
        D[temp] = 125;
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Speednicols) / 4); i++)
    {
        int temp = Speednicols[i];
        D[temp] = 127;
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Soundcob) / 4); i++)
    {
        int temp = Soundcob[i];
        D[temp] = 160; // 110 cut 160 fade 210 in&out
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Speedcob) / 4); i++)
    {
        int temp = Speedcob[i];
        D[temp] = 180;
        ESP32DMX.setSlot(temp, D[temp]);
    }
} //send_Auto_on

void send_Auto_off()
{
    for (int i = 1; i < (sizeof(Soundfull) / 4); i++)
    {
        int temp = Soundfull[i];
        D[temp] = 0;
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Speedfull) / 4); i++)
    {
        int temp = Speedfull[i];
        D[temp] = 0;
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Soundnicols) / 4); i++)
    {
        int temp = Soundnicols[i];
        D[temp] = 0;
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Speednicols) / 4); i++)
    {
        int temp = Speednicols[i];
        D[temp] = 0;
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Soundcob) / 4); i++)
    {
        int temp = Soundcob[i];
        D[temp] = 0;
        ESP32DMX.setSlot(temp, D[temp]);
    }
    for (int i = 1; i < (sizeof(Speedcob) / 4); i++)
    {
        int temp = Speedcob[i];
        D[temp] = 0;
        ESP32DMX.setSlot(temp, D[temp]);
    }
} //send_Auto_off

void init_dmx_in()
{
    //init pin dmx
    pinMode(4, OUTPUT);
    digitalWrite(4, LOW); // LOW dmx in
    pinMode(17, INPUT);
    ESP32DMX.startOutput(17); // initialize with bus length
} // init_dmx_in

void init_dmx_out()
{
    pinMode(4, OUTPUT);
    digitalWrite(4, HIGH); // HIGH dmx out
    pinMode(16, OUTPUT);
    ESP32DMX.startOutput(16); // initialize with bus length
} // init_dmx_out

void defo_dmx()
{
    ESP32DMX.setSlot(1, 0);
    ESP32DMX.setSlot(2, 255);

    for (int i = 135; i < end_dmx; i++)
    {
        ESP32DMX.setSlot(i, 0);
    }

    //defo color
    //grp rgb Led bar
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

    //grp rgb colonnes
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

    // grp sandwich
    sred = lred;
    sgreen = lgreen;
    sblue = lblue;

    // grp bouteille
    bred = lred;
    bgreen = lgreen;
    bblue = lblue;

    // grp escalier
    ered = lred;
    egreen = lgreen;
    eblue = lblue;
    ewhite = defowhite;
    eambre = 0;
    euv = 0;

    send_rvb6();

} //defo_dmx

void init_eeprom()
{
    if (EEPROM.read(62) != 'O' || EEPROM.read(63) != 'K')
    {

#ifdef DEBUG
        Serial.println("failed to initialise EEPROM");
        Serial.println("Formate EEPROM");
#endif

        for (int i = 0; i < EEPROM_SIZE; i++)
        {
            EEPROM.write(i, '\0');
            if (i % 50 == 0)
                delay(100);
        }
#ifdef DEBUG
        Serial.println("EEPROM content cleared!");
#endif

        ccred = 0; // colonnes
        ccgreen = 0;
        ccblue = 0;

        clred = 0; // led bar
        clgreen = 0;
        clblue = 0;

        ctred = 0; // trans 1
        ctgreen = 0;
        ctblue = 0;

        cttred = 0; // trans 2
        cttgreen = 0;
        cttblue = 0;
        cttwhite = 0;

        clored = 0; //logo
        clogreen = 0;
        cloblue = 0;
        clowhite = 0;

        cclured = 0; // club
        cclugreen = 0;
        cclublue = 0;
        ccluwhite = 0;

        crered = 0; // regie
        cregreen = 0;
        creblue = 0;

        csred = 0; // sandwich
        csgreen = 0;
        csblue = 0;

        cbred = 0; // bouteille
        cbgreen = 0;
        cbblue = 0;

        cered = 0;// escalier
        cegreen = 0;
        ceblue = 0;
        cewhite = 0;
        ceambre = 0;
        ceuv = 0;

        DIA = 30; // niveau bar

        eeprom_write();

    } //(EEPROM.read(62) != 'O' || EEPROM.read(63) != 'K')

    if (EEPROM.read(62) == 'O' && EEPROM.read(63) == 'K')
    {
        eeprom_read();
    } //(EEPROM.read(62) == 'O' && EEPROM.read(63) == 'K')
} //init_eeprom()

void init_led()
{
    pinMode(onboard_led.pin, OUTPUT);
} //init_led

void live()
{
    int count = M;
    bool count_clock;
    while (count > 0)
    {
        count_clock = millis() % 15 < 1;
        onboard_led.on = millis() % 1000 < 500;
        onboard_led.update();

        if (count_clock)
        {
            count -= 1;
            M = count;
            MM = M + DIA;
            if (MM > 255)
                MM = 255;
            send_Mast(0);
            feedback(12, "az:" + String(lround(M)));
        }
    }
} //live

void bar()
{
    int count = M;
    bool count_clock;
    while (count < 255)
    {
        count_clock = millis() % 40 < 1;
        onboard_led.on = millis() % 1000 < 500;
        onboard_led.update();

        if (count_clock)
        {
            count += 1;
            M = count;
            MM = M + DIA;
            if (MM > 255)
                MM = 255;
            send_Mast(0);
            feedback(12, "az:" + String(lround(M)));
        }
    }

} //bar

void defo_master()
{
    MM = DIA;
    send_Mast(0);

    for (int i = 3; i > 11; i++)
    {
        Mast[i] = 255;
        send_Mast(i);
    }
}