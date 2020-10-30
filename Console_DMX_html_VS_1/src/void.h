//////////////////////////////////////////V O I D////////////////////////////////////////
void load_spec()
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

    for (int i = 1; i <= clientn; i++)
    {

        if (list[i] != 0)
        {

            webSocket.sendTXT(list[i], "ai:" + String(round(ccgred)));
            webSocket.sendTXT(list[i], "aj:" + String(round(ccggreen)));
            webSocket.sendTXT(list[i], "ak:" + String(round(ccgblue)));

            webSocket.sendTXT(list[i], "al:" + String(round(ccred)));
            webSocket.sendTXT(list[i], "am:" + String(round(ccgreen)));
            webSocket.sendTXT(list[i], "an:" + String(round(ccblue)));

            webSocket.sendTXT(list[i], "ao:" + String(round(ccdred)));
            webSocket.sendTXT(list[i], "ap:" + String(round(ccdgreen)));
            webSocket.sendTXT(list[i], "aq:" + String(round(ccdblue)));

            webSocket.sendTXT(list[i], "ar:" + String(round(ctred)));
            webSocket.sendTXT(list[i], "as:" + String(round(ctgreen)));
            webSocket.sendTXT(list[i], "at:" + String(round(ctblue)));

            webSocket.sendTXT(list[i], "au:" + String(round(clred)));
            webSocket.sendTXT(list[i], "av:" + String(round(clgreen)));
            webSocket.sendTXT(list[i], "aw:" + String(round(clblue)));

        } // if (list[i] !=0)

    } // for client

} //load_spec

void save_spec()
{
    EEPROM.write(1, ccgred);
    EEPROM.write(2, ccggreen);
    EEPROM.write(3, ccgblue);
    EEPROM.write(4, ccred);
    EEPROM.write(5, ccgreen);
    EEPROM.write(6, ccblue);
    EEPROM.write(7, ccdred);
    EEPROM.write(8, ccdgreen);
    EEPROM.write(9, ccdblue);
    EEPROM.write(10, ctred);
    EEPROM.write(11, ctgreen);
    EEPROM.write(12, ctblue);
    EEPROM.write(13, clred);
    EEPROM.write(14, clgreen);
    EEPROM.write(15, clblue);
    EEPROM.write(62, 'O');
    EEPROM.write(63, 'K');
    EEPROM.commit();
} //save_spec

void send_rvb()
{
    for (int i = 1; i < (sizeof(R) / 4); i++)
    {
        int temp = R[i];
        D[temp] = ((lred / 255) * Mast[5]);
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for R

    for (int i = 1; i < (sizeof(G) / 4); i++)
    {
        int temp = G[i];
        D[temp] = ((lgreen / 255) * Mast[5]);
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for G

    for (int i = 1; i < (sizeof(B) / 4); i++)
    {
        int temp = B[i];
        D[temp] = ((lblue / 255) * Mast[5]);
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for B

} //send_rvb

void send_rvb1()
{
    for (int i = 1; i < (sizeof(RR) / 4); i++)
    {
        int temp = RR[i];
        D[temp] = tred;
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for RR

    for (int i = 1; i < (sizeof(GG) / 4); i++)
    {
        int temp = GG[i];
        D[temp] = tgreen;
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for GG

    for (int i = 1; i < (sizeof(BB) / 4); i++)
    {
        int temp = BB[i];
        D[temp] = tblue;
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for BB

} //send_rvb1

void send_rvb2()
{
    //grp comptoire gauche
    ESP8266DMX.setSlot(RRR[1], round((cgred / 255) * Mast[3]));
    ESP8266DMX.setSlot(GGG[1], round((cggreen / 255) * Mast[3]));
    ESP8266DMX.setSlot(BBB[1], round((cgblue / 255) * Mast[3]));
    //grp comptoire centrale
    ESP8266DMX.setSlot(RRR[2], round((cred / 255) * Mast[3]));
    ESP8266DMX.setSlot(GGG[2], round((cgreen / 255) * Mast[3]));
    ESP8266DMX.setSlot(BBB[2], round((cblue / 255) * Mast[3]));
    //grp comptoire droit
    ESP8266DMX.setSlot(RRR[3], round((cdred / 255) * Mast[3]));
    ESP8266DMX.setSlot(GGG[3], round((cdgreen / 255) * Mast[3]));
    ESP8266DMX.setSlot(BBB[3], round((cdblue / 255) * Mast[3]));

} //send_rvb2

void send_rvb6()
{
    //grp led
    for (int i = 1; i < (sizeof(R) / 4); i++)
    {
        int temp = R[i];
        D[temp] = ((clred / 255) * Mast[5]);
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for R

    for (int i = 1; i < (sizeof(G) / 4); i++)
    {
        int temp = G[i];
        D[temp] = ((clgreen / 255) * Mast[5]);
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for G

    for (int i = 1; i < (sizeof(B) / 4); i++)
    {
        int temp = B[i];
        D[temp] = ((clblue / 255) * Mast[5]);
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for B

    //grp transbo
    for (int i = 1; i < (sizeof(RR) / 4); i++)
    {
        int temp = RR[i];
        D[temp] = ctred;
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for RR

    for (int i = 1; i < (sizeof(GG) / 4); i++)
    {
        int temp = GG[i];
        D[temp] = ctgreen;
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for GG

    for (int i = 1; i < (sizeof(BB) / 4); i++)
    {
        int temp = BB[i];
        D[temp] = ctblue;
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for BB

    //grp comptoire gauche
    ESP8266DMX.setSlot(RRR[1], round((cgred / 255) * Mast[3]));
    ESP8266DMX.setSlot(GGG[1], round((cggreen / 255) * Mast[3]));
    ESP8266DMX.setSlot(BBB[1], round((cgblue / 255) * Mast[3]));
    //grp comptoire centrale
    ESP8266DMX.setSlot(RRR[2], round((cred / 255) * Mast[3]));
    ESP8266DMX.setSlot(GGG[2], round((cgreen / 255) * Mast[3]));
    ESP8266DMX.setSlot(BBB[2], round((cblue / 255) * Mast[3]));
    //grp comptoire droit
    ESP8266DMX.setSlot(RRR[3], round((cdred / 255) * Mast[3]));
    ESP8266DMX.setSlot(GGG[3], round((cdgreen / 255) * Mast[3]));
    ESP8266DMX.setSlot(BBB[3], round((cdblue / 255) * Mast[3]));
} //send_rvb6

void send_Mast()
{
    for (int i = 1; i < (sizeof(M1) / 4); i++)
    {
        int temp = M1[i];
        D[temp] = Mast[1];
        ESP8266DMX.setSlot(temp, D[temp]);

    } //for M1

    for (int i = 1; i < (sizeof(M2) / 4); i++)
    {
        int temp = M2[i];
        D[temp] = Mast[2];
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for M2

    for (int i = 1; i < (sizeof(M5) / 4); i++)
    {
        int temp = M5[i];
        D[temp] = Mast[5];
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for M5

    for (int i = 1; i < (sizeof(M6) / 4); i++)
    {
        int temp = M6[i];
        D[temp] = Mast[6];
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for M6

    for (int i = 1; i < (sizeof(M7) / 4); i++)
    {
        int temp = M7[i];
        D[temp] = Mast[7];
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for M7

    for (int i = 1; i < (sizeof(M8) / 4); i++)
    {
        int temp = M8[i];
        D[temp] = Mast[8];
        ESP8266DMX.setSlot(temp, D[temp]);
    } //for M8

} //send_Mast