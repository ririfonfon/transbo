//////////////////////////////////////////V O I D////////////////////////////////////////
void load_spec()
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

    for (int i = 1; i <= clientn; i++)
    {

        if (list[i] != 0)
        {

            webSocket.text(list[i], "ba:" + String(lround(ccred)));
            webSocket.sendTXT(list[i], "bb:" + String(lround(ccgreen)));
            webSocket.sendTXT(list[i], "bc:" + String(lround(ccblue)));

            webSocket.sendTXT(list[i], "bd:" + String(lround(clured)));
            webSocket.sendTXT(list[i], "be:" + String(lround(clgreen)));
            webSocket.sendTXT(list[i], "bf:" + String(lround(clblue)));

            webSocket.sendTXT(list[i], "bg:" + String(lround(ctred)));
            webSocket.sendTXT(list[i], "bh:" + String(lround(ctgreen)));
            webSocket.sendTXT(list[i], "bi:" + String(lround(ctblue)));

            webSocket.sendTXT(list[i], "bj:" + String(lround(cttred)));
            webSocket.sendTXT(list[i], "bk:" + String(lround(cttgreen)));
            webSocket.sendTXT(list[i], "bl:" + String(lround(cttblue)));
            webSocket.sendTXT(list[i], "bm:" + String(lround(cttwhite)));

            webSocket.sendTXT(list[i], "bn:" + String(lround(clored)));
            webSocket.sendTXT(list[i], "bo:" + String(lround(clogreen)));
            webSocket.sendTXT(list[i], "bp:" + String(lround(cloblue)));
            webSocket.sendTXT(list[i], "bq:" + String(lround(clowhite)));

            webSocket.sendTXT(list[i], "br:" + String(lround(cclured)));
            webSocket.sendTXT(list[i], "bs:" + String(lround(cclugreen)));
            webSocket.sendTXT(list[i], "bt:" + String(lround(cclublue)));
            webSocket.sendTXT(list[i], "bu:" + String(lround(ccluwhite)));

            webSocket.sendTXT(list[i], "bv:" + String(lround(crered)));
            webSocket.sendTXT(list[i], "bw:" + String(lround(cregreen)));
            webSocket.sendTXT(list[i], "bx:" + String(lround(creblue)));

        } // if (list[i] !=0)

    } // for client

} //load_spec

void save_spec()
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

    EEPROM.write(62, 'O');
    EEPROM.write(63, 'K');
    EEPROM.commit();
} //save_spec

void send_rvb()
{
    //grp Led
    for (int i = 1; i < (sizeof(R) / 4); i++)
    {
        int temp = R[i];
        D[temp] = ((lred / 255) * Mast[5]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for R

    for (int i = 1; i < (sizeof(G) / 4); i++)
    {
        int temp = G[i];
        D[temp] = ((lgreen / 255) * Mast[5]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for G

    for (int i = 1; i < (sizeof(B) / 4); i++)
    {
        int temp = B[i];
        D[temp] = ((lblue / 255) * Mast[5]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for B

} //send_rvb

void send_rvb1()
{
    //grp Trans 1
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

} //send_rvb1

void send_rvb2()
{
    //grp Comptoire
    for (int i = 1; i < (sizeof(RRR) / 4); i++)
    {
        int temp = RRR[i];
        D[temp] = round((cred / 255) * Mast[3]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRR

    for (int i = 1; i < (sizeof(GGG) / 4); i++)
    {
        int temp = GGG[i];
        D[temp] = round((cgreen / 255) * Mast[3]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGG

    for (int i = 1; i < (sizeof(BBB) / 4); i++)
    {
        int temp = BBB[i];
        D[temp] = round((cblue / 255) * Mast[3]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBB

} //send_rvb2

void send_rvb6()
{
    ///////////////////////////////////////////////////////grp led
    for (int i = 1; i < (sizeof(R) / 4); i++)
    {
        int temp = R[i];
        D[temp] = ((lred / 255) * Mast[5]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for R

    for (int i = 1; i < (sizeof(G) / 4); i++)
    {
        int temp = G[i];
        D[temp] = ((lgreen / 255) * Mast[5]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for G

    for (int i = 1; i < (sizeof(B) / 4); i++)
    {
        int temp = B[i];
        D[temp] = ((lblue / 255) * Mast[5]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for B

    ///////////////////////////////////////////////////////grp transbo
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

    ///////////////////////////////////////////////////////grp comptoire
    for (int i = 1; i < (sizeof(RRR) / 4); i++)
    {
        int temp = RRR[i];
        D[temp] = round((cred / 255) * Mast[3]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RRR

    for (int i = 1; i < (sizeof(GGG) / 4); i++)
    {
        int temp = GGG[i];
        D[temp] = round((cgreen / 255) * Mast[3]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GGG

    for (int i = 1; i < (sizeof(BBB) / 4); i++)
    {
        int temp = BBB[i];
        D[temp] = round((cblue / 255) * Mast[3]);
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BBB

    ///////////////////////////////////////////////////////grp trans 2
    for (int i = 1; i < (sizeof(RRRR) / 4); i++)
    {
        int temp = RRRR[i];
        D[temp] = ttred;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for RR

    for (int i = 1; i < (sizeof(GGGG) / 4); i++)
    {
        int temp = GGGG[i];
        D[temp] = ttgreen;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for GG

    for (int i = 1; i < (sizeof(BBBB) / 4); i++)
    {
        int temp = BBBB[i];
        D[temp] = ttblue;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BB

    for (int i = 1; i < (sizeof(WWWW) / 4); i++)
    {
        int temp = WWWW[i];
        D[temp] = ttwhite;
        ESP32DMX.setSlot(temp, D[temp]);
    } //for BB

} //send_rvb6

void send_Mast()
{
    for (int i = 1; i < (sizeof(M1) / 4); i++)
    {
        int temp = M1[i];
        D[temp] = Mast[1];
        ESP32DMX.setSlot(temp, D[temp]);

    } //for M1

    for (int i = 1; i < (sizeof(M2) / 4); i++)
    {
        int temp = M2[i];
        D[temp] = Mast[2];
        ESP32DMX.setSlot(temp, D[temp]);
    } //for M2

    for (int i = 1; i < (sizeof(M3) / 4); i++)
    {
        int temp = M3[i];
        D[temp] = Mast[3];
        ESP32DMX.setSlot(temp, D[temp]);
    } //for M3

    for (int i = 1; i < (sizeof(M5) / 4); i++)
    {
        int temp = M5[i];
        D[temp] = Mast[5];
        ESP32DMX.setSlot(temp, D[temp]);
    } //for M5

    for (int i = 1; i < (sizeof(M6) / 4); i++)
    {
        int temp = M6[i];
        D[temp] = Mast[6];
        ESP32DMX.setSlot(temp, D[temp]);
    } //for M6

    for (int i = 1; i < (sizeof(M7) / 4); i++)
    {
        int temp = M7[i];
        D[temp] = Mast[7];
        ESP32DMX.setSlot(temp, D[temp]);
    } //for M7

    for (int i = 1; i < (sizeof(M8) / 4); i++)
    {
        int temp = M8[i];
        D[temp] = Mast[8];
        ESP32DMX.setSlot(temp, D[temp]);
    } //for M8

    for (int i = 1; i < (sizeof(M9) / 4); i++)
    {
        int temp = M9[i];
        D[temp] = Mast[9];
        ESP32DMX.setSlot(temp, D[temp]);
    } //for M9

} //send_Mast