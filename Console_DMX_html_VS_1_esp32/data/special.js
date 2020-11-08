window.addEventListener('load', setup);

var connection = new WebSocket('ws://' + location.hostname + ':81/', ['arduino']);

function connect() {
    console.log('connect()');
    // connection = new WebSocket('ws://' + location.hostname + ':81/', ['arduino']);

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
            } //if a

            if (e.data.charAt(1) == 'b') {
                var data = e.data.split(':');
                document.getElementById('cc2').value = data[1];
            } //if b

            if (e.data.charAt(1) == 'c') {
                var data = e.data.split(':');
                document.getElementById('cc3').value = data[1];
            } //if c

            if (e.data.charAt(1) == 'd') {
                var data = e.data.split(':');
                document.getElementById('cc4').value = data[1];
            } //if d

            if (e.data.charAt(1) == 'e') {
                var data = e.data.split(':');
                document.getElementById('cc5').value = data[1];
            } //if e

            if (e.data.charAt(1) == 'f') {
                var data = e.data.split(':');
                document.getElementById('cc6').value = data[1];
            } //if f

            if (e.data.charAt(1) == 'g') {
                var data = e.data.split(':');
                document.getElementById('cc7').value = data[1];
            } //if g

            if (e.data.charAt(1) == 'h') {
                var data = e.data.split(':');
                document.getElementById('cc8').value = data[1];
            } //if h

            if (e.data.charAt(1) == 'i') {
                var data = e.data.split(':');
                document.getElementById('cc9').value = data[1];
            } //if i

            if (e.data.charAt(1) == 'j') {
                var data = e.data.split(':');
                document.getElementById('cc10').value = data[1];
            } //if j

            if (e.data.charAt(1) == 'k') {
                var data = e.data.split(':');
                document.getElementById('cc11').value = data[1];
            } //if k

            if (e.data.charAt(1) == 'l') {
                var data = e.data.split(':');
                document.getElementById('cc12').value = data[1];
            } //if l

            if (e.data.charAt(1) == 'm') {
                var data = e.data.split(':');
                document.getElementById('cc13').value = data[1];
            } //if m

            if (e.data.charAt(1) == 'n') {
                var data = e.data.split(':');
                document.getElementById('cc14').value = data[1];
            } //if n

            if (e.data.charAt(1) == 'o') {
                var data = e.data.split(':');
                document.getElementById('cc15').value = data[1];
            } //if p

            if (e.data.charAt(1) == 'p') {
                var data = e.data.split(':');
                document.getElementById('cc16').value = data[1];
            } //if p

            if (e.data.charAt(1) == 'q') {
                var data = e.data.split(':');
                document.getElementById('cc17').value = data[1];
            } //if q

            if (e.data.charAt(1) == 'r') {
                var data = e.data.split(':');
                document.getElementById('cc18').value = data[1];
            } //if r

            if (e.data.charAt(1) == 's') {
                var data = e.data.split(':');
                document.getElementById('cc19').value = data[1];
            } //if s


            if (e.data.charAt(1) == 't') {
                var data = e.data.split(':');
                document.getElementById('cc20').value = data[1];
            } //if t


            if (e.data.charAt(1) == 'u') {
                var data = e.data.split(':');
                document.getElementById('cc21').value = data[1];
            } //if u


            if (e.data.charAt(1) == 'v') {
                var data = e.data.split(':');
                document.getElementById('cc22').value = data[1];
            } //if v


            if (e.data.charAt(1) == 'w') {
                var data = e.data.split(':');
                document.getElementById('cc23').value = data[1];
            } //if w


            if (e.data.charAt(1) == 'x') {
                var data = e.data.split(':');
                document.getElementById('cc24').value = data[1];
            } //if x

        } //if a

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

// connect();

id_array = new Array('cc1');
values = new Array(id_array.length);

function prepareVar1() {
    var a = parseInt(document.getElementById('cc1').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ba" + values;
    console.log('eData: ' + data);
    connection.send(data);
} //prepare 1

function prepareVar2() {
    var a = parseInt(document.getElementById('cc2').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bb" + values;
    console.log('fData: ' + data);
    connection.send(data);
} //prepare 2

function prepareVar3() {
    var a = parseInt(document.getElementById('cc3').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bc" + values;
    console.log('gData: ' + data);
    connection.send(data);
} //prepare 3

function prepareVar4() {
    var a = parseInt(document.getElementById('cc4').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bd" + values;
    console.log('hData: ' + data);
    connection.send(data);
} //prepare 4

function prepareVar5() {
    var a = parseInt(document.getElementById('cc5').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "be" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 5

function prepareVar6() {
    var a = parseInt(document.getElementById('cc6').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bf" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 6

function prepareVar7() {
    var a = parseInt(document.getElementById('cc7').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bg" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 7

function prepareVar8() {
    var a = parseInt(document.getElementById('cc8').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bh" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 8

function prepareVar9() {
    var a = parseInt(document.getElementById('cc9').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bi" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 9

function prepareVar10() {
    var a = parseInt(document.getElementById('cc10').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bj" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 10

function prepareVar11() {
    var a = parseInt(document.getElementById('cc11').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bk" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 11

function prepareVar12() {
    var a = parseInt(document.getElementById('cc12').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bl" + values;
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
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 14

function prepareVar15() {
    var a = parseInt(document.getElementById('cc15').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bo" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 15

function prepareVar16() {
    var a = parseInt(document.getElementById('cc16').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bp" + values;
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
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 18

function prepareVar19() {
    var a = parseInt(document.getElementById('cc19').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bs" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 19

function prepareVar20() {
    var a = parseInt(document.getElementById('cc20').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bt" + values;
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
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 22

function prepareVar23() {
    var a = parseInt(document.getElementById('cc23').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bw" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 23

function prepareVar24() {
    var a = parseInt(document.getElementById('cc24').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "bx" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 24



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
    connect();

}