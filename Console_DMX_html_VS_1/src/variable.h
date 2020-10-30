const char *host = "console";

uint8_t clientn = 0;
int list[8];
const uint8_t Master = 6;
int Mast[Master];
uint8_t Mem = 1;
int M1[] = {0, 41, 42};
int M2[] = {0, 43, 44};
//int M3[] ={};
int M4[] = {0, 131, 141, 151, 161};
//int M5[] ={};
int M6[] = {0, 171, 181};
int M7[] = {0, 191, 201};
int M8[] = {0, 211, 221};

uint8_t start_dmx = 1;
const uint8_t end_dmx = 171;
int D[end_dmx];

//grp Led
int R[] = {0, 4, 7, 10, 13};
int G[] = {0, 5, 8, 11, 14};
int B[] = {0, 6, 9, 12, 15};

//grp Transbo
int RR[] = {0, 132, 142, 152, 162};
int GG[] = {0, 133, 143, 153, 163};
int BB[] = {0, 134, 144, 154, 164};

//grp Comptoire
int RRR[] = {0, 21, 24, 27};
int GGG[] = {0, 22, 25, 28};
int BBB[] = {0, 23, 26, 29};

//grp rgb Led
float lred;
float lgreen;
float lblue;

//grp rgb Transbo
float tred;
float tgreen;
float tblue;

//grp rgb comptoire gauche
float cgred;
float cggreen;
float cgblue;
//grp rgb comptoire centrale
float cred;
float cgreen;
float cblue;
//grp rgb comptoire droit
float cdred;
float cdgreen;
float cdblue;

//memoire 6
//grp rgb comptoire gauche
float ccgred;
float ccggreen;
float ccgblue;
//grp rgb comptoire centrale
float ccred;
float ccgreen;
float ccblue;
//grp rgb comptoire droit
float ccdred;
float ccdgreen;
float ccdblue;
//grp rgb Transbo
float ctred;
float ctgreen;
float ctblue;
//grp rgb Led
float clred;
float clgreen;
float clblue;

// WiFi network settings

const char *ssid = "esptransbo";
const char *password = "esptransbo";