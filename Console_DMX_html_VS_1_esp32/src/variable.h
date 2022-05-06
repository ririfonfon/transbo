
float DIA;

int clientn = 0;
bool list[MAX_CLIENT] = {false, false, false, false, false, false}; // client
bool OFF = false;
bool GAUCHE = true;
bool DROIT = false;
int etat_escalier = 32;

const uint8_t Master = 12;
float Mast[Master] = {0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255};

uint8_t Mem = 1;
uint8_t etat_live = 21;                  // 21 = live 22 = bar
int M = 0;                               // master live -- bar
int MM = 255;                            // grand master * bar
int M1[] = {0, 41, 42, 233};                  // access
int M2[] = {0, 43, 44, 223};                  // vest
int M3[] = {0, 51, 61, 71, 81, 91};      // colonnes
int M4[] = {0, 17, 24, 31};              // Led bar
int M5[] = {0, 121, 131, 141, 151, 161}; // trans 1 face
int M6[] = {0, 171, 179};                // trans 2 lat
int M7[] = {0, 187};                     // logo
int M8[] = {0, 195};                     // club
int M9[] = {0, 101, 111};                // regie
int M10[] = {0, 203, 213};               // escalier
int M11[] = {0, 243};                    // route

int Soundfull[] = {0, 57, 67, 77, 87, 97, 107, 117, 127, 137, 147, 157, 167}; // 25 = auto 1
int Speedfull[] = {0, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168}; // 127

int Soundnicols[] = {0, 177, 185, 193, 201, 205, 215, 225, 235, 245}; // 253
int Speednicols[] = {0, 178, 186, 194, 202, 206, 216, 226, 236, 246}; // 127

int Soundcob[] = {0, 22, 29, 36}; // 110 cut 160 fade 210 in&out
int Speedcob[] = {0, 23, 30, 37}; // 127

uint8_t start_dmx = 1;
const int end_dmx = 300;
int D[end_dmx];

//grp Led bar
int R[] = {0, 4, 7, 10, 13, 25};
int G[] = {0, 5, 8, 11, 14, 26};
int B[] = {0, 6, 9, 12, 15, 27};

//grp Trans 1 face , route
int RR[] = {0, 122, 132, 142, 152, 162};        // colorpicker 1
int GG[] = {0, 123, 133, 143, 153, 163};        // colorpicker 1
int BB[] = {0, 124, 134, 144, 154, 164};        // colorpicker 1

//grp colonnes
int RRR[] = {0, 52, 62, 72, 82, 92};
int GGG[] = {0, 53, 63, 73, 83, 93};
int BBB[] = {0, 54, 64, 74, 84, 94};

//grp trans 2 lat
int RRRR[] = {0, 172, 180};                     // colorpicker 2
int GGGG[] = {0, 173, 181};                     // colorpicker 2
int BBBB[] = {0, 174, 182};                     // colorpicker 2
int WWWW[] = {0, 175, 183};                     // colorpicker 2

//grp logo
int RRRRR[] = {0, 188};
int GGGGG[] = {0, 189};
int BBBBB[] = {0, 190};
int WWWWW[] = {0, 191};

//grp club
int RRRRRR[] = {0, 196};                        // colorpicker 2
int GGGGGG[] = {0, 197};                        // colorpicker 2
int BBBBBB[] = {0, 198};                        // colorpicker 2
int WWWWWW[] = {0, 199};                        // colorpicker 2

//grp regie
int RRRRRRR[] = {0, 102, 112};                  // colorpicker 1
int GGGGGGG[] = {0, 103, 113};                  // colorpicker 1
int BBBBBBB[] = {0, 104, 114};                  // colorpicker 1

//grp sandwich
int RRRRRRRR[] = {0, 32};
int GGGGGGGG[] = {0, 33};
int BBBBBBBB[] = {0, 34};

//grp bouteille
int RRRRRRRRR[] = {0, 18};
int GGGGGGGGG[] = {0, 19};
int BBBBBBBBB[] = {0, 20};

//grp escalier , medza 
int RRRRRRRRRR[] = {0, 207, 217, 227, 237};     // colorpicker 2
int GGGGGGGGGG[] = {0, 208, 218, 228, 238};     // colorpicker 2
int BBBBBBBBBB[] = {0, 209, 219, 229, 239};     // colorpicker 2
int WWWWWWWWWW[] = {0, 210, 220, 230, 240};     // colorpicker 2
int AAAAAAAAAA[] = {0, 211, 221, 231, 241};     // colorpicker 2
int UUUUUUUUUU[] = {0, 212, 222, 232, 242};     // colorpicker 2

//grp route
int RRRRRRRRRRR[] = {0, 247};     // colorpicker 1
int GGGGGGGGGGG[] = {0, 248};     // colorpicker 1
int BBBBBBBBBBB[] = {0, 249};     // colorpicker 1
int WWWWWWWWWWW[] = {0, 250};     // colorpicker 1
int AAAAAAAAAAA[] = {0, 251};     // colorpicker 1
int UUUUUUUUUUU[] = {0, 252};     // colorpicker 1

//grp rgb Led bar
float lred;
float lgreen;
float lblue;
float lwhite; // for mem ref
float lambre; // for mem ref
float luv;    // for mem ref

//grp rgb Transbo 1 face
float tred;
float tgreen;
float tblue;

//grp rgbw Transbo 2 lat
float ttred;
float ttgreen;
float ttblue;
float ttwhite;

//grp rgb colonnes
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

//grp bouteille
float bred;
float bgreen;
float bblue;

//grp escalier
float ered;
float egreen;
float eblue;
float ewhite;
float eambre;
float euv;

//grp route
float rored;
float rogreen;
float roblue;
float rowhite;
float roambre;
float rouv;

//grp medza
float mered;
float megreen;
float meblue;
float mewhite;
float meambre;
float meuv;

///////////////////memoire 6 Special /////////////////////

//grp rgb colonnes
float ccred;
float ccgreen;
float ccblue;

//grp rgb Led bar
float clred;
float clgreen;
float clblue;

//grp rgb Transbo 1 face
float ctred;
float ctgreen;
float ctblue;

//grp rgbw Transbo 2 lat
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

//grp bouteille
float cbred;
float cbgreen;
float cbblue;

//grp escalier
float cered;
float cegreen;
float ceblue;
float cewhite;
float ceambre;
float ceuv;

//grp route
float crored;       //en
float crogreen;     //eo
float croblue;      //ep
float crowhite;     //eq
float croambre;     //er
float crouv;        //es

//grp medza
float cmered;       //et
float cmegreen;     //eu
float cmeblue;      //ev
float cmewhite;     //ew
float cmeambre;     //ex
float cmeuv;        //ey

//defo white
float defowhite = 127;