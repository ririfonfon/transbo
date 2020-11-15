#include <variable.h>

void mem_value(int a)
{
    if (a == 1)
    {
        //grp rgb Led
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

        //grp rgb comptoire
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
    }
    else if (a == 2)
    {
        lred = 255;
        lgreen = 0;
        lblue = 0;

        //grp rgb Transbo 1
        tred = lred;
        tgreen = lgreen;
        tblue = lblue;

        //grp rgbw Transbo 2
        ttred = lred;
        ttgreen = lgreen;
        ttblue = lblue;
        ttwhite = defowhite;

        //grp rgb comptoire
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
    }
    else if (a == 3)
    {
        lred = 0;
        lgreen = 255;
        lblue = 0;

        //grp rgb Transbo 1
        tred = lred;
        tgreen = lgreen;
        tblue = lblue;

        //grp rgbw Transbo 2
        ttred = lred;
        ttgreen = lgreen;
        ttblue = lblue;
        ttwhite = defowhite;

        //grp rgb comptoire
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
    }
    else if (a == 4)
    {
        lred = 0;
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

        //grp rgb comptoire
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
    }
    else if (a == 5)
    {
        lred = 255;
        lgreen = 127;
        lblue = 0;

        //grp rgb Transbo 1
        tred = lred;
        tgreen = lgreen;
        tblue = lblue;

        //grp rgbw Transbo 2
        ttred = lred;
        ttgreen = lgreen;
        ttblue = lblue;
        ttwhite = defowhite;

        //grp rgb comptoire
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
    }
    else if (a == 6)
    {
        //grp rgb comptoire
        cred = ccred;
        cgreen = ccgreen;
        cblue = ccblue;

        lred = clured;
        lgreen = clgreen;
        lblue = clblue;

        tred = ctred;
        tgreen = ctgreen;
        tblue = ctblue;

        ttred = cttred;
        ttgreen = cttgreen;
        ttblue = cttblue;
        ttwhite = cttwhite;

        lored = clored;
        logreen = clogreen;
        loblue = cloblue;
        lowhite = clowhite;

        clured = cclured;
        clugreen = cclugreen;
        clublue = cclublue;
        cluwhite = ccluwhite;

        rered = crered;
        regreen = cregreen;
        reblue = creblue;
    }
    else if (a == 8)
    {
        lred = 255;
        lgreen = 255;
        lblue = 0;

        //grp rgb Transbo 1
        tred = lred;
        tgreen = lgreen;
        tblue = lblue;

        //grp rgbw Transbo 2
        ttred = lred;
        ttgreen = lgreen;
        ttblue = lblue;
        ttwhite = defowhite;

        //grp rgb comptoire
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
    }
    else if (a == 9)
    {
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

        //grp rgb comptoire
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
    }
    else if (a == 10)
    {
        lred = 0;
        lgreen = 255;
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

        //grp rgb comptoire
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
    }
    else if (a == 11)
    {
        lred = 0;
        lgreen = 0;
        lblue = 0;

        //grp rgb Transbo 1
        tred = lred;
        tgreen = lgreen;
        tblue = lblue;

        //grp rgbw Transbo 2
        ttred = lred;
        ttgreen = lgreen;
        ttblue = lblue;
        ttwhite = 0;

        //grp rgb comptoire
        cred = lred;
        cgreen = lgreen;
        cblue = lblue;

        //grp rgbw logo
        lored = lred;
        logreen = lgreen;
        loblue = lblue;
        lowhite = 0;

        //grp rgbw club
        clured = lred;
        clugreen = lgreen;
        clublue = lblue;
        cluwhite = 0;

        //grp rgb regie
        rered = lred;
        regreen = lgreen;
        reblue = lblue;
    }
    else if (a == 12)
    {
        lred = 255;
        lgreen = 255;
        lblue = 255;

        //grp rgb Transbo 1
        tred = lred;
        tgreen = lgreen;
        tblue = lblue;

        //grp rgbw Transbo 2
        ttred = lred;
        ttgreen = lgreen;
        ttblue = lblue;
        ttwhite = 255;

        //grp rgb comptoire
        cred = lred;
        cgreen = lgreen;
        cblue = lblue;

        //grp rgbw logo
        lored = lred;
        logreen = lgreen;
        loblue = lblue;
        lowhite = 255;

        //grp rgbw club
        clured = lred;
        clugreen = lgreen;
        clublue = lblue;
        cluwhite = 255;

        //grp rgb regie
        rered = lred;
        regreen = lgreen;
        reblue = lblue;
    }
}