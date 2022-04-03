window.addEventListener('load', setup);

var connection;

function connect() {
    console.log('connect()');
    connection = new WebSocket('ws://' + location.hostname + ':81/', ['arduino']);

    connection.onopen = function() {
        connection.send('Connect ' + new Date());
    };

    connection.onmessage = function(e) {
        console.log('Server: ', e.data);

        if (e.data.charAt(0) == 'cc') {
            var data = e.data.split(':');
            document.getElementById(data[0]).value = data[1];
        } //if

        if (e.data.charAt(0) == 'mem') {
            var val = e.data.split(':')[1];
            var elems = document.querySelectorAll('#mode li a');
            [].forEach.call(elems, function(el) {
                el.classList.remove('active');
            });
            document.getElementById(val).classList.add('active');
        } //if

        if (e.data.charAt(0) == 'b') {

            if (e.data.charAt(1) == 'a') {
                var data = e.data.split(':');
                document.getElementById('cc1').value = data[1];
                setComptoirePicker()
            } //if a

            if (e.data.charAt(1) == 'b') {
                var data = e.data.split(':');
                document.getElementById('cc2').value = data[1];
                setComptoirePicker()
            } //if b

            if (e.data.charAt(1) == 'c') {
                var data = e.data.split(':');
                document.getElementById('cc3').value = data[1];
                setComptoirePicker()
            } //if c

            if (e.data.charAt(1) == 'd') {
                var data = e.data.split(':');
                document.getElementById('cc4').value = data[1];
                setLedPicker()
            } //if d

            if (e.data.charAt(1) == 'e') {
                var data = e.data.split(':');
                document.getElementById('cc5').value = data[1];
                setLedPicker()
            } //if e

            if (e.data.charAt(1) == 'f') {
                var data = e.data.split(':');
                document.getElementById('cc6').value = data[1];
                setLedPicker()
            } //if f

            if (e.data.charAt(1) == 'g') {
                var data = e.data.split(':');
                document.getElementById('cc7').value = data[1];
                setTrans1Picker()
            } //if g

            if (e.data.charAt(1) == 'h') {
                var data = e.data.split(':');
                document.getElementById('cc8').value = data[1];
                setTrans1Picker()
            } //if h

            if (e.data.charAt(1) == 'i') {
                var data = e.data.split(':');
                document.getElementById('cc9').value = data[1];
                setTrans1Picker()
            } //if i

            if (e.data.charAt(1) == 'j') {
                var data = e.data.split(':');
                document.getElementById('cc10').value = data[1];
                setTrans2Picker()
            } //if j

            if (e.data.charAt(1) == 'k') {
                var data = e.data.split(':');
                document.getElementById('cc11').value = data[1];
                setTrans2Picker()
            } //if k

            if (e.data.charAt(1) == 'l') {
                var data = e.data.split(':');
                document.getElementById('cc12').value = data[1];
                setTrans2Picker()
            } //if l

            if (e.data.charAt(1) == 'm') {
                var data = e.data.split(':');
                document.getElementById('cc13').value = data[1];
            } //if m

            if (e.data.charAt(1) == 'n') {
                var data = e.data.split(':');
                document.getElementById('cc14').value = data[1];
                setLogoPicker()
            } //if n

            if (e.data.charAt(1) == 'o') {
                var data = e.data.split(':');
                document.getElementById('cc15').value = data[1];
                setLogoPicker()
            } //if p

            if (e.data.charAt(1) == 'p') {
                var data = e.data.split(':');
                document.getElementById('cc16').value = data[1];
                setLogoPicker()
            } //if p

            if (e.data.charAt(1) == 'q') {
                var data = e.data.split(':');
                document.getElementById('cc17').value = data[1];
            } //if q

            if (e.data.charAt(1) == 'r') {
                var data = e.data.split(':');
                document.getElementById('cc18').value = data[1];
                setClubPicker()
            } //if r

            if (e.data.charAt(1) == 's') {
                var data = e.data.split(':');
                document.getElementById('cc19').value = data[1];
                setClubPicker()
            } //if s


            if (e.data.charAt(1) == 't') {
                var data = e.data.split(':');
                document.getElementById('cc20').value = data[1];
                setClubPicker()
            } //if t


            if (e.data.charAt(1) == 'u') {
                var data = e.data.split(':');
                document.getElementById('cc21').value = data[1];
            } //if u


            if (e.data.charAt(1) == 'v') {
                var data = e.data.split(':');
                document.getElementById('cc22').value = data[1];
                setRegiePicker()
            } //if v


            if (e.data.charAt(1) == 'w') {
                var data = e.data.split(':');
                document.getElementById('cc23').value = data[1];
                setRegiePicker()
            } //if w


            if (e.data.charAt(1) == 'x') {
                var data = e.data.split(':');
                document.getElementById('cc24').value = data[1];
                setRegiePicker()
            } //if x

        } //if a
        else if (e.data.charAt(0) == 'e') {

            if (e.data.charAt(1) == 'a') {
                var data = e.data.split(':');
                document.getElementById('cc25').value = data[1];
                setSandwichPicker()
            } //if a

            if (e.data.charAt(1) == 'b') {
                var data = e.data.split(':');
                document.getElementById('cc26').value = data[1];
                setSandwichPicker()
            } //if b

            if (e.data.charAt(1) == 'c') {
                var data = e.data.split(':');
                document.getElementById('cc27').value = data[1];
                setSandwichPicker()
            } //if c

            if (e.data.charAt(1) == 'd') {
                var data = e.data.split(':');
                document.getElementById('cc29').value = data[1];
                setBouteillePicker()
            } //if d

            if (e.data.charAt(1) == 'e') {
                var data = e.data.split(':');
                document.getElementById('cc30').value = data[1];
                setBouteillePicker()
            } //if e

            if (e.data.charAt(1) == 'f') {
                var data = e.data.split(':');
                document.getElementById('cc31').value = data[1];
                setBouteillePicker()
            } //if f

            if (e.data.charAt(1) == 'g') {
                var data = e.data.split(':');
                document.getElementById('cc32').value = data[1];
                setBouteillePicker()
            } //if g

            if (e.data.charAt(1) == 'h') {
                var data = e.data.split(':');
                document.getElementById('cc33').value = data[1];
                setBouteillePicker()
            } //if h

            if (e.data.charAt(1) == 'i') {
                var data = e.data.split(':');
                document.getElementById('cc34').value = data[1];
                setBouteillePicker()
            } //if i

            if (e.data.charAt(1) == 'j') {
                var data = e.data.split(':');
                document.getElementById('cc35').value = data[1];
                setBouteillePicker()
            } //if j

            if (e.data.charAt(1) == 'k') {
                var data = e.data.split(':');
                document.getElementById('cc36').value = data[1];
                setBouteillePicker()
            } //if k

            if (e.data.charAt(1) == 'l') {
                var data = e.data.split(':');
                document.getElementById('cc37').value = data[1];
                setBouteillePicker()
            } //if l

            if (e.data.charAt(1) == 'm') {
                var data = e.data.split(':');
                document.getElementById('cc28').value = data[1];
            } //if m


        } // if e

    }; //function (e)

    connection.onclose = function(e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        connection.close();
        setTimeout(function() {
            connect();
        }, 1000);
    };

    connection.onerror = function(err) {
        console.error('Socket encountered error: ', err.message, 'Closing socket');
        connection.close();
        setTimeout(function() {
            connect();
        }, 1000);
    };
}

connect();

id_array = new Array('cc1');
values = new Array(id_array.length);

function comptoirePicker() {
    var picker = document.getElementById('Comptoire')
    var color = hexToRGB(picker.value)

    document.getElementById('cc1').value = color.r
    document.getElementById('cc2').value = color.g
    document.getElementById('cc3').value = color.b

    prepareVar1()
    prepareVar2()
    prepareVar3()
}

function setComptoirePicker() {
    var red = document.getElementById('cc1').value
    var green = document.getElementById('cc2').value
    var blue = document.getElementById('cc3').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Comptoire').value = colorHex
}

function LedPicker() {
    var picker = document.getElementById('Led')
    var color = hexToRGB(picker.value)

    document.getElementById('cc4').value = color.r
    document.getElementById('cc5').value = color.g
    document.getElementById('cc6').value = color.b

    prepareVar4()
    prepareVar5()
    prepareVar6()
}

function setLedPicker() {
    var red = document.getElementById('cc4').value
    var green = document.getElementById('cc5').value
    var blue = document.getElementById('cc6').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Led').value = colorHex
}

function Trans1Picker() {
    var picker = document.getElementById('Trans1')
    var color = hexToRGB(picker.value)

    document.getElementById('cc7').value = color.r
    document.getElementById('cc8').value = color.g
    document.getElementById('cc9').value = color.b

    prepareVar7()
    prepareVar8()
    prepareVar9()
}

function setTrans1Picker() {
    var red = document.getElementById('cc7').value
    var green = document.getElementById('cc8').value
    var blue = document.getElementById('cc9').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Trans1').value = colorHex
}

function Trans2Picker() {
    var picker = document.getElementById('Trans2')
    var color = hexToRGB(picker.value)

    document.getElementById('cc10').value = color.r
    document.getElementById('cc11').value = color.g
    document.getElementById('cc12').value = color.b

    prepareVar10()
    prepareVar11()
    prepareVar12()
}

function setTrans2Picker() {
    var red = document.getElementById('cc10').value
    var green = document.getElementById('cc11').value
    var blue = document.getElementById('cc12').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Trans2').value = colorHex
}

function LogoPicker() {
    var picker = document.getElementById('Logo')
    var color = hexToRGB(picker.value)

    document.getElementById('cc14').value = color.r
    document.getElementById('cc15').value = color.g
    document.getElementById('cc16').value = color.b

    prepareVar14()
    prepareVar15()
    prepareVar16()
}

function setLogoPicker() {
    var red = document.getElementById('cc14').value
    var green = document.getElementById('cc15').value
    var blue = document.getElementById('cc16').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Logo').value = colorHex
}

function ClubPicker() {
    var picker = document.getElementById('Club')
    var color = hexToRGB(picker.value)

    document.getElementById('cc18').value = color.r
    document.getElementById('cc19').value = color.g
    document.getElementById('cc20').value = color.b

    prepareVar18()
    prepareVar19()
    prepareVar20()
}

function setClubPicker() {
    var red = document.getElementById('cc18').value
    var green = document.getElementById('cc19').value
    var blue = document.getElementById('cc20').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Club').value = colorHex
}

function RegiePicker() {
    var picker = document.getElementById('Regie')
    var color = hexToRGB(picker.value)

    document.getElementById('cc22').value = color.r
    document.getElementById('cc23').value = color.g
    document.getElementById('cc24').value = color.b

    prepareVar22()
    prepareVar23()
    prepareVar24()
}

function setRegiePicker() {
    var red = document.getElementById('cc22').value
    var green = document.getElementById('cc23').value
    var blue = document.getElementById('cc24').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Regie').value = colorHex
}



function SandwichPicker() {
    var picker = document.getElementById('Sandwich')
    var color = hexToRGB(picker.value)

    document.getElementById('cc25').value = color.r
    document.getElementById('cc26').value = color.g
    document.getElementById('cc27').value = color.b

    prepareVar25()
    prepareVar26()
    prepareVar27()
}

function setSandwichPicker() {
    var red = document.getElementById('cc25').value
    var green = document.getElementById('cc26').value
    var blue = document.getElementById('cc27').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Sandwich').value = colorHex
}

function BouteillePicker() {
    var picker = document.getElementById('Bouteille')
    var color = hexToRGB(picker.value)

    document.getElementById('cc29').value = color.r
    document.getElementById('cc30').value = color.g
    document.getElementById('cc31').value = color.b

    prepareVar29()
    prepareVar30()
    prepareVar31()
}

function setBouteillePicker() {
    var red = document.getElementById('cc29').value
    var green = document.getElementById('cc30').value
    var blue = document.getElementById('cc31').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Bouteille').value = colorHex
}

function EscalierPicker() {
    var picker = document.getElementById('Escalier')
    var color = hexToRGB(picker.value)

    document.getElementById('cc32').value = color.r
    document.getElementById('cc33').value = color.g
    document.getElementById('cc34').value = color.b

    prepareVar32()
    prepareVar33()
    prepareVar34()
}

function setEscalierPicker() {
    var red = document.getElementById('cc32').value
    var green = document.getElementById('cc33').value
    var blue = document.getElementById('cc34').value

    var colorHex = RGBToHex(red, green, blue)
    document.getElementById('Escalier').value = colorHex
}

////////////////////////////////////////////////////////////////prepare

function prepareVar1() {
    var a = parseInt(document.getElementById('cc1').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ba" + values;
    setComptoirePicker()
    console.log('eData: ' + data);
    connection.send(data);
} //prepare 1

function prepareVar2() {
    var a = parseInt(document.getElementById('cc2').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bb" + values;
    setComptoirePicker()
    console.log('fData: ' + data);
    connection.send(data);
} //prepare 2

function prepareVar3() {
    var a = parseInt(document.getElementById('cc3').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bc" + values;
    setComptoirePicker()
    console.log('gData: ' + data);
    connection.send(data);
} //prepare 3

function prepareVar4() {
    var a = parseInt(document.getElementById('cc4').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bd" + values;
    setLedPicker()
    console.log('hData: ' + data);
    connection.send(data);
} //prepare 4

function prepareVar5() {
    var a = parseInt(document.getElementById('cc5').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "be" + values;
    setLedPicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 5

function prepareVar6() {
    var a = parseInt(document.getElementById('cc6').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bf" + values;
    setLedPicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 6

function prepareVar7() {
    var a = parseInt(document.getElementById('cc7').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bg" + values;
    setTrans1Picker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 7

function prepareVar8() {
    var a = parseInt(document.getElementById('cc8').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bh" + values;
    setTrans1Picker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 8

function prepareVar9() {
    var a = parseInt(document.getElementById('cc9').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bi" + values;
    setTrans1Picker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 9

function prepareVar10() {
    var a = parseInt(document.getElementById('cc10').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bj" + values;
    setTrans2Picker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 10

function prepareVar11() {
    var a = parseInt(document.getElementById('cc11').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bk" + values;
    setTrans2Picker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 11

function prepareVar12() {
    var a = parseInt(document.getElementById('cc12').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bl" + values;
    setTrans2Picker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 12

function prepareVar13() {
    var a = parseInt(document.getElementById('cc13').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bm" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 13

function prepareVar14() {
    var a = parseInt(document.getElementById('cc14').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bn" + values;
    setLogoPicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 14

function prepareVar15() {
    var a = parseInt(document.getElementById('cc15').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bo" + values;
    setLogoPicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 15

function prepareVar16() {
    var a = parseInt(document.getElementById('cc16').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bp" + values;
    setLogoPicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 16

function prepareVar17() {
    var a = parseInt(document.getElementById('cc17').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bq" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 17

function prepareVar18() {
    var a = parseInt(document.getElementById('cc18').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "br" + values;
    setClubPicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 18

function prepareVar19() {
    var a = parseInt(document.getElementById('cc19').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bs" + values;
    setClubPicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 19

function prepareVar20() {
    var a = parseInt(document.getElementById('cc20').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bt" + values;
    setClubPicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 20

function prepareVar21() {
    var a = parseInt(document.getElementById('cc21').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bu" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 21

function prepareVar22() {
    var a = parseInt(document.getElementById('cc22').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bv" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 22

function prepareVar23() {
    var a = parseInt(document.getElementById('cc23').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bw" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 23

function prepareVar24() {
    var a = parseInt(document.getElementById('cc24').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bx" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 24

function prepareVar25() {
    var a = parseInt(document.getElementById('cc25').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ea" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 25

function prepareVar26() {
    var a = parseInt(document.getElementById('cc26').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "eb" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 26

function prepareVar27() {
    var a = parseInt(document.getElementById('cc27').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ec" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 27

function prepareVar28() {
    var a = parseInt(document.getElementById('cc28').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "em" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 28

function prepareVar29() {
    var a = parseInt(document.getElementById('cc29').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ed" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 29

function prepareVar30() {
    var a = parseInt(document.getElementById('cc30').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ee" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 30

function prepareVar31() {
    var a = parseInt(document.getElementById('cc31').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ef" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 31

function prepareVar32() {
    var a = parseInt(document.getElementById('cc32').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "eg" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 32

function prepareVar33() {
    var a = parseInt(document.getElementById('cc33').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "eh" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 33

function prepareVar34() {
    var a = parseInt(document.getElementById('cc34').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ei" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 34

function prepareVar35() {
    var a = parseInt(document.getElementById('cc35').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ej" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 35

function prepareVar36() {
    var a = parseInt(document.getElementById('cc36').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ek" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 36

function prepareVar37() {
    var a = parseInt(document.getElementById('cc37').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "el" + values;
    setRegiePicker()
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 37


function submitVal(name, val) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'set?' + name + '=' + val, true);
    xhttp.send();
} //submitVal

function handle_M_B_S(e) {
    e.preventDefault();
    var name = e.target.className;
    var val = e.target.id;
    console.log('name: ' + name);
    console.log('val: ' + val);

    if (e.target.className.indexOf('mem') > -1) {
        elems = document.querySelectorAll('#mode li a');
        [].forEach.call(elems, function(el) {
            el.classList.remove('active');
            name = e.target.className;
        });
        e.target.classList.add('active');
    }
    submitVal(name, val);
} //handle_M_B_S

function rgbToHsl(r, g, b) {
    console.log('rgbToHsl(r, g, b)');
    r = r / 255;
    g = g / 255;
    b = b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h = h / 6;
    }
    return [h, s, l];
}

function setup() {
    console.log('setup()');
    var xhttp = new XMLHttpRequest();

    elems = document.querySelectorAll('ul li a'); // adds listener
    [].forEach.call(elems, function(el) {
        // el.addEventListener('touchstart', handle_M_B_S, false);
        el.addEventListener('click', handle_M_B_S, false);
    });
}

function RGBToHex(r, g, b) {
    if (r.length == 0) r = "00"
    if (g.length == 0) g = "00"
    if (b.length == 0) b = "00"

    r = parseInt(r).toString(16);
    g = parseInt(g).toString(16);
    b = parseInt(b).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
}

function hexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}