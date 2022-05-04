window.addEventListener('load', setup);
window.addEventListener('resize', drawColorbar);

// var connection = new WebSocket('ws://' + location.hostname + ':81/', ['arduino']);
var connection;

function connect() {
    console.log('connect()');
    connection = new WebSocket('ws://' + location.hostname + ':81/', ['arduino']);

    connection.onopen = function() {
        connection.send('Connect ' + new Date());
        console.log('connection.send.');
    };

    connection.onmessage = function(e) {
        console.log('Server: ', e.data);
        var data = e.data.split(':');
        console.log('data[1]: ', data[1]);

        if (e.data.charAt(0) == 'c') {
            var data = e.data.split(':');
            document.getElementById(data[0]).value = data[1];
        } //if (e.data.charAt(0) == 'c')

        if (e.data.charAt(0) == 'm') {
            var val = e.data.split(':')[1];
            var elems = document.querySelectorAll('#mode li a');
            [].forEach.call(elems, function(el) {
                el.classList.remove('active');
            });
            document.getElementById(val).classList.add('active');
        } //if (e.data.charAt(0) == 'm')

        if (e.data.charAt(0) == 's') {
            var sval = e.data.split(':')[1];
            var selems = document.querySelectorAll('#escalier lis s');
            [].forEach.call(selems, function(sel) {
                sel.classList.remove('active');
            });
            document.getElementById(sval).classList.add('active');
        } //if (e.data.charAt(0) == 's')

        if (e.data.charAt(0) == 'g') {
            var vval = e.data.split(':')[1];
            var velems = document.querySelectorAll('#live liv g');
            [].forEach.call(velems, function(vel) {
                vel.classList.remove('active');
            });
            document.getElementById(vval).classList.add('active');
        } //if (e.data.charAt(0) == 'g')

        if (e.data.charAt(0) == 'a') {

            if (e.data.charAt(1) == 'a') {
                var data = e.data.split(':');
                document.getElementById('c1').value = data[1];
                document.getElementById('c1_in').value = data[1];
            } //if a

            if (e.data.charAt(1) == 'b') {
                var data = e.data.split(':');
                document.getElementById('c2').value = data[1];
                document.getElementById('c2_in').value = data[1];
            } //if b

            if (e.data.charAt(1) == 'c') {
                var data = e.data.split(':');
                document.getElementById('c3').value = data[1];
                document.getElementById('c3_in').value = data[1];
            } //if c

            if (e.data.charAt(1) == 'd') {
                var data = e.data.split(':');
                document.getElementById('c4').value = data[1];
                document.getElementById('c4_in').value = data[1];
            } //if d

            if (e.data.charAt(1) == 'e') {
                var data = e.data.split(':');
                document.getElementById('c5').value = data[1];
                document.getElementById('c5_in').value = data[1];
            } //if e

            if (e.data.charAt(1) == 'f') {
                var data = e.data.split(':');
                document.getElementById('c6').value = data[1];
                document.getElementById('c6_in').value = data[1];
            } //if f

            if (e.data.charAt(1) == 'g') {
                var data = e.data.split(':');
                document.getElementById('c7').value = data[1];
                document.getElementById('c7_in').value = data[1];
            } //if g

            if (e.data.charAt(1) == 'h') {
                var data = e.data.split(':');
                document.getElementById('c8').value = data[1];
                document.getElementById('c8_in').value = data[1];
            } //if h

            if (e.data.charAt(1) == 'i') {
                var data = e.data.split(':');
                document.getElementById('c9').value = data[1];
                document.getElementById('c9_in').value = data[1];
            } //if i

            if (e.data.charAt(1) == 'j') {
                var data = e.data.split(':');
                document.getElementById('c10').value = data[1];
                document.getElementById('c10_in').value = data[1];
            } //if j

            if (e.data.charAt(1) == 'k') {
                var data = e.data.split(':');
                document.getElementById('c11').value = data[1];
                document.getElementById('c11_in').value = data[1];
            } //if k

            if (e.data.charAt(1) == 'z') {
                var data = e.data.split(':');
                document.getElementById('c0').value = data[1];
            } //if z

        } //if (e.data.charAt(0) == 'a')

    }; //function (e)

    connection.onclose = function(e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason, e.code);
        connection.close();
        setTimeout(function() {
            connect();
        }, 1000);
    };

    connection.onerror = function(err) {
        console.error('Socket encountered error: ', err.message, 'Closing socket');
        connection.close();
    };
}

connect();

id_array = new Array('c1');
values = new Array(id_array.length);

function prepareVar0() {
    var a = parseInt(document.getElementById('c0').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "az" + values;
    console.log('eData: ' + data);
    connection.send(data);
} //prepare 0

function prepareVar1() {
    var a = parseInt(document.getElementById('c1').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "aa" + values;
    console.log('eData: ' + data);
    connection.send(data);
} //prepare 1

function prepareVar2() {
    var a = parseInt(document.getElementById('c2').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ab" + values;
    console.log('fData: ' + data);
    connection.send(data);
} //prepare 2

function prepareVar3() {
    var a = parseInt(document.getElementById('c3').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ac" + values;
    console.log('gData: ' + data);
    connection.send(data);
} //prepare 3

function prepareVar4() {
    var a = parseInt(document.getElementById('c4').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ad" + values;
    console.log('hData: ' + data);
    connection.send(data);
} //prepare 4

function prepareVar5() {
    var a = parseInt(document.getElementById('c5').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ae" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 5

function prepareVar6() {
    var a = parseInt(document.getElementById('c6').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "af" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 6

function prepareVar7() {
    var a = parseInt(document.getElementById('c7').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ag" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 7

function prepareVar8() {
    var a = parseInt(document.getElementById('c8').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ah" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 8

function prepareVar9() {
    var a = parseInt(document.getElementById('c9').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ai" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 9

function prepareVar10() {
    var a = parseInt(document.getElementById('c10').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "aj" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 10

function prepareVar11() {
    var a = parseInt(document.getElementById('c11').value).toString(8);
    if (a.length < 2) { a = '0' + a; }
    values = a;
    var data = "ak" + values;
    console.log('iData: ' + data);
    connection.send(data);
} //prepare 11

function handle_M_B_S(e) {
    e.preventDefault();
    var name = e.target.className;
    var val = e.target.id;
    console.log('name: ' + name);
    console.log('val: ' + val);

    if (e.target.className.indexOf('s') > -1) {
        selems = document.querySelectorAll('#escalier lis s');
        [].forEach.call(selems, function(sel) {
            sel.classList.remove('active');
            name = e.target.className;
        });
        e.target.classList.add('active');
    }

    if (e.target.className.indexOf('m') > -1) {
        elems = document.querySelectorAll('#mode li a');
        [].forEach.call(elems, function(el) {
            el.classList.remove('active');
            name = e.target.className;
        });
        e.target.classList.add('active');
    }
    if (e.target.className.indexOf('g') > -1) {
        velems = document.querySelectorAll('#live liv g');
        [].forEach.call(velems, function(vel) {
            vel.classList.remove('active');
            name = e.target.className;
        });
        e.target.classList.add('active');
    }
    submitVal(name, val);
    var data = name + val;
    console.log('iiii Data: ' + data);
    connection.send(data);
} //handle_M_B_S


function submitVal(name, val) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'set?' + name + '=' + val, true);
    xhttp.send();
} //submitVal

function compToHex(c) {
    console.log('compToHex(c)');
    hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function getMousePos(can, evt) {
    console.log('getMousePos(can, evt)');
    r = can.getBoundingClientRect();
    return {
        x: event.clientX - r.left,
        y: event.clientY - r.top
    };
}

function Touch(e) {
    console.log('Touch(e)');
    e.preventDefault();
    pos = {
        x: Math.round(e.targetTouches[0].pageX),
        y: Math.round(e.targetTouches[0].pageY)
    };
    rgb = ctx.getImageData(pos.x, pos.y, 1, 1).data;
    drawColorbar(rgb);
    submitVal('c', compToHex(rgb[0]) + compToHex(rgb[1]) + compToHex(rgb[2]));
}

function Click(e) {
    console.log('Click(e)');
    pos = getMousePos(can, e);
    console.log('pos');
    console.log(pos);
    rgb = ctx.getImageData(pos.x, pos.y, 1, 1).data;
    console.log('rgb');
    console.log(rgb);
    drawColorbar(rgb);
    submitVal('c', compToHex(rgb[0]) + compToHex(rgb[1]) + compToHex(rgb[2]));
}

function Click2(e) {
    console.log('Click2(e)');
    pos = getMousePos(can2, e);
    console.log('pos2');
    console.log(pos);
    rgb = ctx2.getImageData(pos.x, pos.y, 1, 1).data;
    console.log('rgb2');
    console.log(rgb);
    drawColorbar2(rgb);
    submitVal('d', compToHex(rgb[0]) + compToHex(rgb[1]) + compToHex(rgb[2]));
}

// Thanks to the backup at http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
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

function drawColorbar(rgb = [0, 0, 0]) {
    console.log('drawColorbar');
    console.log(rgb[0]);
    console.log(rgb[1]);
    console.log(rgb[2]);
    can = document.getElementById('colorbar');
    ctx = can.getContext('2d');

    var h = can.width / 360;

    console.log('can.width');
    console.log(can.width);
    console.log('can.height');
    console.log(can.height);


    var hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);

    for (var i = 0; i <= 360; i++) {
        ctx.fillStyle = 'hsl(' + i + ', 100%, 50%)';
        ctx.fillRect(i * h, 0, h, can.height / 2);
        ctx.fillStyle = 'hsl(' + hsl[0] * 360 + ', 100%, ' + i * (100 / 360) + '%)';
        ctx.fillRect(i * h, can.height / 2, h, can.height / 2);
    }
}

function drawColorbar2(rgb = [0, 0, 0]) {
    console.log('drawColorbar2');
    console.log(rgb[0]);
    console.log(rgb[1]);
    console.log(rgb[2]);
    can2 = document.getElementById('colorbar2');
    ctx2 = can2.getContext('2d');

    var h = can.width / 360;

    var hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);

    for (var i = 0; i <= 360; i++) {
        ctx2.fillStyle = 'hsl(' + i + ', 100%, 50%)';
        ctx2.fillRect(i * h, 0, h, can2.height / 2);
        ctx2.fillStyle = 'hsl(' + hsl[0] * 360 + ', 100%, ' + i * (100 / 360) + '%)';
        ctx2.fillRect(i * h, can2.height / 2, h, can2.height / 2);
    }
}


function setup() {
    console.log('setup()');
    var xhttp = new XMLHttpRequest();

    elems = document.querySelectorAll('ul li a'); // adds listener
    [].forEach.call(elems, function(el) {
        // el.addEventListener('touchstart', handle_M_B_S, false);
        el.addEventListener('click', handle_M_B_S, false);
    });

    selems = document.querySelectorAll('sul lis s'); // adds listener
    [].forEach.call(selems, function(sel) {
        // el.addEventListener('touchstart', handle_M_B_S, false);
        sel.addEventListener('click', handle_M_B_S, false);
    });

    velems = document.querySelectorAll('vul liv g'); // adds listener
    [].forEach.call(velems, function(vel) {
        // el.addEventListener('touchstart', handle_M_B_S, false);
        vel.addEventListener('click', handle_M_B_S, false);
    });


    var can = document.getElementById('colorbar');
    var ctx = can.getContext('2d');

    drawColorbar();

    var can2 = document.getElementById('colorbar2');
    var ctx2 = can2.getContext('2d');

    drawColorbar2();

    // can.addEventListener('touchstart', Touch, false);
    can.addEventListener('click', Click, false);
    can2.addEventListener('click', Click2, false);
}