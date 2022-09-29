window.addEventListener('load', setup);

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

        if (e.data.charAt(0) == 'g') {
            var vval = e.data.split(':')[1];
            var velems = document.querySelectorAll('#live liv g');
            [].forEach.call(velems, function(vel) {
                vel.classList.remove('active');
            });
            document.getElementById(vval).classList.add('active');
        } //if (e.data.charAt(0) == 'g')

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


function handle_M_B_S(e) {
    e.preventDefault();
    var name = e.target.className;
    var val = e.target.id;
    console.log('name: ' + name);
    console.log('val: ' + val);

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




function setup() {
    console.log('setup()');
    var xhttp = new XMLHttpRequest();

    velems = document.querySelectorAll('vul liv g'); // adds listener
    [].forEach.call(velems, function(vel) {
        // el.addEventListener('touchstart', handle_M_B_S, false);
        vel.addEventListener('click', handle_M_B_S, false);
    });




    // can.addEventListener('touchstart', Touch, false);
    can.addEventListener('click', Click, false);
    can2.addEventListener('click', Click2, false);
}