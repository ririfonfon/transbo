
float DIA ;

int clientn = 0;
bool list[MAX_CLIENT] = {false, false, false, false, false, false}; // client
bool OFF = false;

const uint8_t Master = 10;
float Mast[Master];
uint8_t Mem = 1;
uint8_t etat_live = 22;
int M = 255;                             // grand master live
int MM = 255;                            // grand master bar
int M1[] = {0, 41, 42};                  // access
int M2[] = {0, 43, 44};                  // vest
int M3[] = {0, 51, 61, 71, 81, 91};      // compt
int M4[] = {0, 31};                      // Led
int M5[] = {0, 121, 131, 141, 151, 161}; // trans 1
int M6[] = {0, 171, 179};                // trans 2
int M7[] = {0, 187};                     // logo
int M8[] = {0, 195};                     // club
int M9[] = {0, 101, 111};                // regie

int Soundfull[] = {0, 57, 67, 77, 87, 97, 128, 138, 148, 158, 168}; // 25 = auto 1
int Speedfull[] = {0, 58, 68, 78, 88, 98, 129, 139, 149, 159, 169}; // 127

int Soundnicols[] = {0, 177, 185, 193, 201}; // 253
int Speednicols[] = {0, 178, 186, 194, 202}; // 127

int Soundcob[] = {0, 36}; // 110 cut 160 fade 210 in&out
int Speedcob[] = {0, 37}; // 127

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
int RRR[] = {0, 52, 62, 72, 82, 92};
int GGG[] = {0, 53, 63, 73, 83, 93};
int BBB[] = {0, 54, 64, 74, 84, 94};

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
int RRRRRR[] = {0, 196};
int GGGGGG[] = {0, 197};
int BBBBBB[] = {0, 198};
int WWWWWW[] = {0, 199};

//grp regie
int RRRRRRR[] = {0, 102, 112};
int GGGGGGG[] = {0, 103, 113};
int BBBBBBB[] = {0, 104, 114};

//grp sandwich
int RRRRRRRR[] = {0, 32};
int GGGGGGGG[] = {0, 33};
int BBBBBBBB[] = {0, 34};

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

//grp sandwich
float sred;
float sgreen;
float sblue;

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

//grp sandwich
float csred;
float csgreen;
float csblue;

//defo white
float defowhite = 127;