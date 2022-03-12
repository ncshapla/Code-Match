document.getElementById("show-pin").readOnly = true;
document.getElementById("pin-pad").readOnly = true;

//  pin generating 
document.getElementById('new-btn').addEventListener('click', function () {
    let pin = Math.random() * 10000;
    let pinNumber = Math.round(pin);
    let showPin = document.getElementById('show-pin');
    if (pinNumber > 1000) {
        showPin.value = pinNumber;
    }
})


// dial-pad
document.getElementById('dialPad-1').addEventListener('click', function () {
    DialPad(1)
})
document.getElementById('dialPad-2').addEventListener('click', function () {
    DialPad(2)
})
document.getElementById('dialPad-3').addEventListener('click', function () {
    DialPad(3)
})
document.getElementById('dialPad-4').addEventListener('click', function () {
    DialPad(4)
})
document.getElementById('dialPad-5').addEventListener('click', function () {
    DialPad(5)
})
document.getElementById('dialPad-6').addEventListener('click', function () {
    DialPad(6)
})
document.getElementById('dialPad-7').addEventListener('click', function () {
    DialPad(7)
})
document.getElementById('dialPad-8').addEventListener('click', function () {
    DialPad(8)
})
document.getElementById('dialPad-9').addEventListener('click', function () {
    DialPad(9)
})
document.getElementById('dialPad-0').addEventListener('click', function () {
    DialPad(0)
})
document.getElementById('dialPad-decrease').addEventListener('click', function () {
    DialPad('decrease')
})
document.getElementById('dialPad-remove').addEventListener('click', function () {
    DialPad('remove')
})

function DialPad(number) {
    let pinNumber = document.getElementById('dialPad-' + number).innerText;

    if (number == 'decrease') {
        let display = document.getElementById('pin-pad');
        let cut = display.value.slice(0, -1);
        display.value = cut;
    }
     else if (number == 'remove') {
        let display = document.getElementById('pin-pad');
        display.value = "";
    }
    else {
        let num = parseInt(pinNumber);
        let pinPad = document.getElementById('pin-pad')
        pinPad.value += num; 
    }
}

// pin match
document.getElementById('submit').addEventListener('click', function(){

    let showPin = document.getElementById('show-pin');
    let pinPad  = document.getElementById('pin-pad');

    if ( pinPad.value !== "" && showPin.value === pinPad.value){
        document.getElementById('match').style.display = 'block';
        document.getElementById('mismatch').style.display = 'none';

        showPin.value = '';
        pinPad.value = '';

    }

     if(showPin.value !== pinPad.value){
        pinPad.value = '';
        document.getElementById('match').style.display = 'none';
        document.getElementById('mismatch').style.display = 'block';

        tryLeft();
    }
    
})

function tryLeft(){
    let tryea = parseInt(document.getElementById('try').innerText);
    let triii = tryea-1;
    document.getElementById('try').innerText = triii;
    if(triii < 1){
        alert('times up')
        document.getElementById('submit').disabled = 'true';
        document.getElementById('submit').style.backgroundColor = 'tomato';
    }
}