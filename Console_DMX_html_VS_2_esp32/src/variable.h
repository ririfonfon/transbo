const char *host = "console";

uint8_t clientn = 0;
int list[8];  // client 

const uint8_t Master = 9;
int Mast[Master];
uint8_t Mem = 1;
int M1[] = {0, 41, 42};// access
int M2[] = {0, 43, 44};// vest
int M3[] = {0, 51, 61, 71, 81 ,91};// compt
//int M4[] ={};// Led
int M5[] = {0, 121, 131, 141, 151, 161};// trans 1
int M6[] = {0, 171, 179};// trans 2
int M7[] = {0, 187};// logo
int M8[] = {0, 195};// club
int M9[] = {0, 101, 111};// regie

uint8_t start_dmx = 1;
const int end_dmx = 300;
int D[end_dmx];

//grp Led
int R[] = {0, 4, 7, 10, 13};
int G[] = {0, 5, 8, 11, 14};
int B[] = {0, 6, 9, 12, 15};

//grp Trans 1
int RR[] = {0, 122, 132, 142, 152, 162};
int GG[] = {0, 123, 133, 143, 153, 163};
int BB[] = {0, 124, 134, 144, 154, 164};

//grp Comptoire
int RRR[] = {0, 21, 24, 27};
int GGG[] = {0, 22, 25, 28};
int BBB[] = {0, 23, 26, 29};

//grp trans 2
int RRRR[] = {0, 172, 180};
int GGGG[] = {0, 173, 181};
int BBBB[] = {0, 174, 182};
int WWWW[] = {0, 175, 183};

//grp logo
int RRRRR[] = {0, 188};
int GGGGG[] = {0, 189};
int BBBBB[] = {0, 190};
int WWWWW[] = {0, 191};

//grp club
int RRRRRR[] = {0, 195};
int GGGGGG[] = {0, 196};
int BBBBBB[] = {0, 197};
int WWWWWW[] = {0, 198};

//grp regie
int RRRRRRR[] = {0, 102, 112};
int GGGGGGG[] = {0, 103, 113};
int BBBBBBB[] = {0, 104, 114};

//grp rgb Led
float lred;
float lgreen;
float lblue;

//grp rgb Transbo 1
float tred;
float tgreen;
float tblue;

//grp rgbw Transbo 2
float ttred;
float ttgreen;
float ttblue;
float ttwhite;

//grp rgb comptoire
float cred;
float cgreen;
float cblue;

//grp rgbw logo
float lored;
float logreen;
float loblue;
float lowhite;

//grp rgbw club
float clured;
float clugreen;
float clublue;
float cluwhite;

//grp rgb regie
float rered;
float regreen;
float reblue;

///////////////////memoire 6 /////////////////////

//grp rgb comptoire
float ccred;
float ccgreen;
float ccblue;

//grp rgb Led
float clred;
float clgreen;
float clblue;

//grp rgb Transbo 1
float ctred;
float ctgreen;
float ctblue;

//grp rgbw Transbo 2
float cttred;
float cttgreen;
float cttblue;
float cttwhite;

//grp rgbw logo
float clored;
float clogreen;
float cloblue;
float clowhite;

//grp rgbw club
float cclured;
float cclugreen;
float cclublue;
float ccluwhite;

//grp rgb regie
float crered;
float cregreen;
float creblue;


// WiFi network settings

const char *ssid = "esptransbo";
const char *password = "esptransbo";