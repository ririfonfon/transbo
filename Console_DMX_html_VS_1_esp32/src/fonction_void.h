//////////////////////////////////////////V O I D////////////////////////////////////////
/////// send to all but not origin !
void feedback(uint8_t num, String txt)
{
    for (int i = 0; i < MAX_CLIENT; i++)
    {
        if (list[i] && i != num)
        {
            webSocket.sendTXT(i, txt);
        } // if (list[i] && i != num)
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
    crored = EEPROM.read(38);
    crogreen = EEPROM.read(39);
    croblue = EEPROM.read(40);
    crowhite = EEPROM.read(41);
    croambre = EEPROM.read(42);
    crouv = EEPROM.read(43);
    cmered = EEPROM.read(44);
    cmegreen = EEPROM.read(45);
    cmeblue = EEPROM.read(46);
    cmewhite = EEPROM.read(47);
    cmeambre = EEPROM.read(48);
    cmeuv = EEPROM.read(49);

#ifdef DEBUG
    Serial.println("EEPROM READ");
#endif
} // eeprom_read

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
    EEPROM.write(38, crored);
    EEPROM.write(39, crogreen);
    EEPROM.write(40, croblue);
    EEPROM.write(41, crowhite);
    EEPROM.write(42, croambre);
    EEPROM.write(43, crouv);
    EEPROM.write(44, cmered);
    EEPROM.write(45, cmegreen);
    EEPROM.write(46, cmeblue);
    EEPROM.write(47, cmewhite);
    EEPROM.write(48, cmeambre);
    EEPROM.write(49, cmeuv);

    EEPROM.write(62, 'O');
    EEPROM.write(63, 'K');
    EEPROM.commit();

#ifdef DEBUG
    Serial.println("EEPROM WRITE");
#endif
} // eeprom_write

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

            webSocket.sendTXT(i, "en:" + String(lround(crored)));
            webSocket.sendTXT(i, "eo:" + String(lround(crogreen)));
            webSocket.sendTXT(i, "ep:" + String(lround(croblue)));
            webSocket.sendTXT(i, "eq:" + String(lround(crowhite)));
            webSocket.sendTXT(i, "er:" + String(lround(croambre)));
            webSocket.sendTXT(i, "es:" + String(lround(crouv)));

            webSocket.sendTXT(i, "et:" + String(lround(cmered)));
            webSocket.sendTXT(i, "eu:" + String(lround(cmegreen)));
            webSocket.sendTXT(i, "ev:" + String(lround(cmeblue)));
            webSocket.sendTXT(i, "ew:" + String(lround(cmewhite)));
            webSocket.sendTXT(i, "ex:" + String(lround(cmeambre)));
            webSocket.sendTXT(i, "ey:" + String(lround(cmeuv)));

            webSocket.sendTXT(i, "em:" + String(lround(DIA)));

        } // if (list[i] !=0)

    } // for client

} // load_spec

void save_spec()
{
    eeprom_write();
} // save_spec

void send_rvb1()
{
    ///////////////////////////////////////////////////////grp Trans 1
    for (int i = 1; i < (sizeof(R_trans_face) / 4); i++)
    {
        int temp = R_trans_face[i];
        D[temp] = tred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_trans_face

    for (int i = 1; i < (sizeof(G_trans_face) / 4); i++)
    {
        int temp = G_trans_face[i];
        D[temp] = tgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_trans_face

    for (int i = 1; i < (sizeof(B_trans_face) / 4); i++)
    {
        int temp = B_trans_face[i];
        D[temp] = tblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_trans_face

    ///////////////////////////////////////////////////////grp regie
    for (int i = 1; i < (sizeof(R_regie) / 4); i++)
    {
        int temp = R_regie[i];
        D[temp] = rered;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_regie

    for (int i = 1; i < (sizeof(G_regie) / 4); i++)
    {
        int temp = G_regie[i];
        D[temp] = regreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_regie

    for (int i = 1; i < (sizeof(B_regie) / 4); i++)
    {
        int temp = B_regie[i];
        D[temp] = reblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_regie

    ///////////////////////////////////////////////////////route
    for (int i = 1; i < (sizeof(R_route) / 4); i++)
    {
        int temp = R_route[i];
        D[temp] = rored;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_route

    for (int i = 1; i < (sizeof(G_route) / 4); i++)
    {
        int temp = G_route[i];
        D[temp] = rogreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_route

    for (int i = 1; i < (sizeof(B_route) / 4); i++)
    {
        int temp = B_route[i];
        D[temp] = roblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_route

    for (int i = 1; i < (sizeof(W_route) / 4); i++)
    {
        int temp = W_route[i];
        D[temp] = rowhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for W_route

    for (int i = 1; i < (sizeof(A_route) / 4); i++)
    {
        int temp = A_route[i];
        D[temp] = roambre;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for A_route

    for (int i = 1; i < (sizeof(U_route) / 4); i++)
    {
        int temp = U_route[i];
        D[temp] = rouv;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for U_route

} // send_rvb1

void send_rvb2()
{
    ///////////////////////////////////////////////////////grp trans 2
    for (int i = 1; i < (sizeof(R_trans_lat) / 4); i++)
    {
        int temp = R_trans_lat[i];
        D[temp] = ttred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_trans_lat

    for (int i = 1; i < (sizeof(G_trans_lat) / 4); i++)
    {
        int temp = G_trans_lat[i];
        D[temp] = ttgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_trans_lat

    for (int i = 1; i < (sizeof(B_trans_lat) / 4); i++)
    {
        int temp = B_trans_lat[i];
        D[temp] = ttblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_trans_lat

    for (int i = 1; i < (sizeof(W_trans_lat) / 4); i++)
    {
        int temp = W_trans_lat[i];
        D[temp] = ttwhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for W_trans_lat

    ///////////////////////////////////////////////////////grp club
    for (int i = 1; i < (sizeof(R_club) / 4); i++)
    {
        int temp = R_club[i];
        D[temp] = clured;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_club

    for (int i = 1; i < (sizeof(G_club) / 4); i++)
    {
        int temp = G_club[i];
        D[temp] = clugreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_club

    for (int i = 1; i < (sizeof(B_club) / 4); i++)
    {
        int temp = B_club[i];
        D[temp] = clublue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_club

    for (int i = 1; i < (sizeof(W_club) / 4); i++)
    {
        int temp = W_club[i];
        D[temp] = cluwhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for W_club

    ///////////////////////////////////////////////////////escalier
    for (int i = 1; i < (sizeof(R_escalier) / 4); i++)
    {
        int temp = R_escalier[i];
        D[temp] = ered;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_route

    for (int i = 1; i < (sizeof(G_escalier) / 4); i++)
    {
        int temp = G_escalier[i];
        D[temp] = egreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_escalier

    for (int i = 1; i < (sizeof(B_escalier) / 4); i++)
    {
        int temp = B_escalier[i];
        D[temp] = eblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_escalier

    for (int i = 1; i < (sizeof(W_escalier) / 4); i++)
    {
        int temp = W_escalier[i];
        D[temp] = ewhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for W_escalier

    for (int i = 1; i < (sizeof(A_escalier) / 4); i++)
    {
        int temp = A_escalier[i];
        D[temp] = eambre;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for A_escalier

    for (int i = 1; i < (sizeof(U_escalier) / 4); i++)
    {
        int temp = U_escalier[i];
        D[temp] = euv;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for U_escalier

    /////////////////////////////////////////////////////// grp colonnes

    for (int i = 1; i < (sizeof(R_colonnes) / 4); i++)
    {
        int temp = R_colonnes[i];
        D[temp] = cred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_colonnes

    for (int i = 1; i < (sizeof(G_colonnes) / 4); i++)
    {
        int temp = G_colonnes[i];
        D[temp] = cgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_colonnes

    for (int i = 1; i < (sizeof(B_colonnes) / 4); i++)
    {
        int temp = B_colonnes[i];
        D[temp] = cblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_colonnes
} // send_rvb2

void send_rvb3()
{
    // grp Colonnes
    for (int i = 1; i < (sizeof(R_colonnes) / 4); i++)
    {
        int temp = R_colonnes[i];
        D[temp] = cred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_colonnes

    for (int i = 1; i < (sizeof(G_colonnes) / 4); i++)
    {
        int temp = G_colonnes[i];
        D[temp] = cgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_colonnes

    for (int i = 1; i < (sizeof(B_colonnes) / 4); i++)
    {
        int temp = B_colonnes[i];
        D[temp] = cblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_colonnes

} // send_rvb3

void send_rvb4()
{
    // grp Led bar
    for (int i = 1; i < (sizeof(R_bar) / 4); i++)
    {
        int temp = R_bar[i];
        D[temp] = ((lred / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_bar

    for (int i = 1; i < (sizeof(G_bar) / 4); i++)
    {
        int temp = G_bar[i];
        D[temp] = ((lgreen / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_bar

    for (int i = 1; i < (sizeof(B_bar) / 4); i++)
    {
        int temp = B_bar[i];
        D[temp] = ((lblue / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_bar

    // grp sandwich
    for (int i = 1; i < (sizeof(R_sandwich) / 4); i++)
    {
        int temp = R_sandwich[i];
        D[temp] = sred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_sandwich

    for (int i = 1; i < (sizeof(G_sandwich) / 4); i++)
    {
        int temp = G_sandwich[i];
        D[temp] = sgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_sandwich

    for (int i = 1; i < (sizeof(B_sandwich) / 4); i++)
    {
        int temp = B_sandwich[i];
        D[temp] = sblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_sandwich

    // grp bouteille
    for (int i = 1; i < (sizeof(R_bouteille) / 4); i++)
    {
        int temp = R_bouteille[i];
        D[temp] = bred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_bouteille

    for (int i = 1; i < (sizeof(G_bouteille) / 4); i++)
    {
        int temp = G_bouteille[i];
        D[temp] = bgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_bouteille

    for (int i = 1; i < (sizeof(B_bouteille) / 4); i++)
    {
        int temp = B_bouteille[i];
        D[temp] = bblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_bouteille

} // send_rvb4

void send_rvb6()
{
    ///////////////////////////////////////////////////////grp led bar
    for (int i = 1; i < (sizeof(R_bar) / 4); i++)
    {
        int temp = R_bar[i];
        D[temp] = ((lred / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_bar

    for (int i = 1; i < (sizeof(G_bar) / 4); i++)
    {
        int temp = G_bar[i];
        D[temp] = ((lgreen / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_bar

    for (int i = 1; i < (sizeof(B_bar) / 4); i++)
    {
        int temp = B_bar[i];
        D[temp] = ((lblue / 255) * Mast[4]);
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_bar

    ///////////////////////////////////////////////////////grp trans 1
    for (int i = 1; i < (sizeof(R_trans_face) / 4); i++)
    {
        int temp = R_trans_face[i];
        D[temp] = tred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_trans_face

    for (int i = 1; i < (sizeof(G_trans_face) / 4); i++)
    {
        int temp = G_trans_face[i];
        D[temp] = tgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_trans_face

    for (int i = 1; i < (sizeof(B_trans_face) / 4); i++)
    {
        int temp = B_trans_face[i];
        D[temp] = tblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_trans_face

    ///////////////////////////////////////////////////////grp colonnes
    for (int i = 1; i < (sizeof(R_colonnes) / 4); i++)
    {
        int temp = R_colonnes[i];
        D[temp] = cred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_colonnes

    for (int i = 1; i < (sizeof(G_colonnes) / 4); i++)
    {
        int temp = G_colonnes[i];
        D[temp] = cgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_colonnes

    for (int i = 1; i < (sizeof(B_colonnes) / 4); i++)
    {
        int temp = B_colonnes[i];
        D[temp] = cblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_colonnes

    ///////////////////////////////////////////////////////grp trans 2
    for (int i = 1; i < (sizeof(R_trans_lat) / 4); i++)
    {
        int temp = R_trans_lat[i];
        D[temp] = ttred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_trans_lat

    for (int i = 1; i < (sizeof(G_trans_lat) / 4); i++)
    {
        int temp = G_trans_lat[i];
        D[temp] = ttgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_trans_lat

    for (int i = 1; i < (sizeof(B_trans_lat) / 4); i++)
    {
        int temp = B_trans_lat[i];
        D[temp] = ttblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_trans_lat

    for (int i = 1; i < (sizeof(W_trans_lat) / 4); i++)
    {
        int temp = W_trans_lat[i];
        D[temp] = ttwhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for W_trans_lat

    ///////////////////////////////////////////////////////grp logo
    for (int i = 1; i < (sizeof(R_logo) / 4); i++)
    {
        int temp = R_logo[i];
        D[temp] = lored;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_logo

    for (int i = 1; i < (sizeof(G_logo) / 4); i++)
    {
        int temp = G_logo[i];
        D[temp] = logreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_logo

    for (int i = 1; i < (sizeof(B_logo) / 4); i++)
    {
        int temp = B_logo[i];
        D[temp] = loblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_logo

    for (int i = 1; i < (sizeof(W_logo) / 4); i++)
    {
        int temp = W_logo[i];
        D[temp] = lowhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for W_logo

    ///////////////////////////////////////////////////////grp club
    for (int i = 1; i < (sizeof(R_club) / 4); i++)
    {
        int temp = R_club[i];
        D[temp] = clured;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_club
    for (int i = 1; i < (sizeof(G_club) / 4); i++)
    {
        int temp = G_club[i];
        D[temp] = clugreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_club

    for (int i = 1; i < (sizeof(B_club) / 4); i++)
    {
        int temp = B_club[i];
        D[temp] = clublue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_club

    for (int i = 1; i < (sizeof(W_club) / 4); i++)
    {
        int temp = W_club[i];
        D[temp] = cluwhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for W_club

    ///////////////////////////////////////////////////////grp regie
    for (int i = 1; i < (sizeof(R_regie) / 4); i++)
    {
        int temp = R_regie[i];
        D[temp] = rered;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_regie

    for (int i = 1; i < (sizeof(G_regie) / 4); i++)
    {
        int temp = G_regie[i];
        D[temp] = regreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_regie

    for (int i = 1; i < (sizeof(B_regie) / 4); i++)
    {
        int temp = B_regie[i];
        D[temp] = reblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_regie

    ///////////////////////////////////////////////////////grp sandwich
    for (int i = 1; i < (sizeof(R_sandwich) / 4); i++)
    {
        int temp = R_sandwich[i];
        D[temp] = sred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_sandwich

    for (int i = 1; i < (sizeof(G_sandwich) / 4); i++)
    {
        int temp = G_sandwich[i];
        D[temp] = sgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_sandwich

    for (int i = 1; i < (sizeof(B_sandwich) / 4); i++)
    {
        int temp = B_sandwich[i];
        D[temp] = sblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_sandwich

    ///////////////////////////////////////////////////////grp bouteille
    for (int i = 1; i < (sizeof(R_bouteille) / 4); i++)
    {
        int temp = R_bouteille[i];
        D[temp] = bred;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_bouteille

    for (int i = 1; i < (sizeof(G_bouteille) / 4); i++)
    {
        int temp = G_bouteille[i];
        D[temp] = bgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_bouteille

    for (int i = 1; i < (sizeof(B_bouteille) / 4); i++)
    {
        int temp = B_bouteille[i];
        D[temp] = bblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_bouteille

    ///////////////////////////////////////////////////////escalier , medza
    for (int i = 1; i < (sizeof(R_escalier) / 4); i++)
    {
        int temp = R_escalier[i];
        D[temp] = ered;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_route

    for (int i = 1; i < (sizeof(G_escalier) / 4); i++)
    {
        int temp = G_escalier[i];
        D[temp] = egreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_escalier

    for (int i = 1; i < (sizeof(B_escalier) / 4); i++)
    {
        int temp = B_escalier[i];
        D[temp] = eblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_escalier

    for (int i = 1; i < (sizeof(W_escalier) / 4); i++)
    {
        int temp = W_escalier[i];
        D[temp] = ewhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for W_escalier

    for (int i = 1; i < (sizeof(A_escalier) / 4); i++)
    {
        int temp = A_escalier[i];
        D[temp] = eambre;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for A_escalier

    for (int i = 1; i < (sizeof(U_escalier) / 4); i++)
    {
        int temp = U_escalier[i];
        D[temp] = euv;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for U_escalier

    ///////////////////////////////////////////////////////route
    for (int i = 1; i < (sizeof(R_route) / 4); i++)
    {
        int temp = R_route[i];
        D[temp] = ered;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for R_routeR

    for (int i = 1; i < (sizeof(G_route) / 4); i++)
    {
        int temp = G_route[i];
        D[temp] = egreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for G_route

    for (int i = 1; i < (sizeof(B_route) / 4); i++)
    {
        int temp = B_route[i];
        D[temp] = eblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for B_route

    for (int i = 1; i < (sizeof(W_route) / 4); i++)
    {
        int temp = W_route[i];
        D[temp] = ewhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for W_route

    for (int i = 1; i < (sizeof(A_route) / 4); i++)
    {
        int temp = A_route[i];
        D[temp] = eambre;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for A_route

    for (int i = 1; i < (sizeof(U_route) / 4); i++)
    {
        int temp = U_route[i];
        D[temp] = euv;
        ESP32DMX.setSlot(temp, D[temp]);
    } // for U_route

} // send_rvb6

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
                D[temp] = (Mast[1] / 255) * MM;
            }
            ESP32DMX.setSlot(temp, D[temp]);

        } // for M1
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
                D[temp] = (Mast[2] / 255) * MM;
            }
            ESP32DMX.setSlot(temp, D[temp]);
        } // for M2
    }
    if (Mas == 3 || Mas == 0)
    {
        for (int i = 1; i < (sizeof(M3) / 4); i++)
        {
            int temp = M3[i];
            D[temp] = (Mast[3] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } // for M3
    }
    if (Mas == 4 || Mas == 0)
    {
        for (int i = 1; i < (sizeof(M4) / 4); i++)
        {
            int temp = M4[i];
            D[temp] = (Mast[4] / 255) * MM;
            ESP32DMX.setSlot(temp, D[temp]);
        } // for M3
    }
    if (Mas == 5 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M5) / 4); i++)
        {
            int temp = M5[i];
            D[temp] = (Mast[5] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } // for M5
    }
    if (Mas == 6 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M6) / 4); i++)
        {
            int temp = M6[i];
            D[temp] = (Mast[6] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } // for M6
    }
    if (Mas == 7 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M7) / 4); i++)
        {
            int temp = M7[i];
            D[temp] = (Mast[7] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } // for M7
    }
    if (Mas == 8 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M8) / 4); i++)
        {
            int temp = M8[i];
            D[temp] = (Mast[8] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } // for M8
    }
    if (Mas == 9 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M9) / 4); i++)
        {
            int temp = M9[i];
            D[temp] = (Mast[9] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } // for M9
    }
    if (Mas == 10 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M10) / 4); i++)
        {
            int temp = M10[i];
            D[temp] = (Mast[10] / 255) * MM;

            if (i == 1)
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
            else if (i == 2)
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

        } // for M10
    }
    if (Mas == 11 || Mas == 0)
    {

        for (int i = 1; i < (sizeof(M11) / 4); i++)
        {
            int temp = M11[i];
            D[temp] = (Mast[11] / 255) * M;
            ESP32DMX.setSlot(temp, D[temp]);
        } // for M9
    }

} // send_Mast

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
} // send_Auto_on

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
} // send_Auto_off

void init_dmx_in()
{
    // init pin dmx
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

    // defo color
    // grp rgb Led bar
    lred = 255;
    lgreen = 0;
    lblue = 255;
    lwhite = 0;
    lambre = 0;
    luv = 100;

    // grp rgb Transbo 1
    tred = lred;
    tgreen = lgreen;
    tblue = lblue;

    // grp rgbw Transbo 2
    ttred = lred;
    ttgreen = lgreen;
    ttblue = lblue;
    ttwhite = defowhite;

    // grp rgb colonnes
    cred = lred;
    cgreen = lgreen;
    cblue = lblue;

    // grp rgbw logo
    lored = lred;
    logreen = lgreen;
    loblue = lblue;
    lowhite = defowhite;

    // grp rgbw club
    clured = lred;
    clugreen = lgreen;
    clublue = lblue;
    cluwhite = 0;

    // grp rgb regie
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
    ewhite = 255;
    eambre = lambre;
    euv = luv;

    // grp route
    rored = lred;
    rogreen = lgreen;
    roblue = lblue;
    rowhite = lwhite;
    roambre = lambre;
    rouv = luv;

    // grp medza
    mered = lred;
    megreen = lgreen;
    meblue = lblue;
    mewhite = 255;
    meambre = lambre;
    meuv = luv;

    send_rvb6();

} // defo_dmx

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

        clored = 0; // logo
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

        cered = 0; // escalier
        cegreen = 0;
        ceblue = 0;
        cewhite = 0;
        ceambre = 0;
        ceuv = 0;

        crored = 0; // route
        crogreen = 0;
        croblue = 0;
        crowhite = 0;
        croambre = 0;
        crouv = 0;

        cmered = 0; // medza
        cmegreen = 0;
        cmeblue = 0;
        cmewhite = 0;
        cmeambre = 0;
        cmeuv = 0;

        DIA = 30; // niveau bar

        eeprom_write();

    } //(EEPROM.read(62) != 'O' || EEPROM.read(63) != 'K')

    if (EEPROM.read(62) == 'O' && EEPROM.read(63) == 'K')
    {
        eeprom_read();
    } //(EEPROM.read(62) == 'O' && EEPROM.read(63) == 'K')
} // init_eeprom()

void init_led()
{
    pinMode(onboard_led.pin, OUTPUT);
} // init_led

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
} // live

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

} // bar

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