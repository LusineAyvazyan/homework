let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');
let button5 = document.querySelector('.button5');
let button6 = document.querySelector('.button6');
let button7 = document.querySelector('.button7');
let button8 = document.querySelector('.button8');
let button9 = document.querySelector('.button9');
let button0 = document.querySelector('.button0');
let bd = document.querySelector('#bd');
let sd = document.querySelector('#sd');
let rim = document.querySelector('#rim');
let hho = document.querySelector('#hho');
let hhc = document.querySelector('#hhc');
let tomh = document.querySelector('#tomh');
let tomm = document.querySelector('#tomm');
let toml = document.querySelector('#toml');
let ride = document.querySelector('#ride');
let crash  = document.querySelector('#crash');

button1.addEventListener('click', function(){
    bd.play();
});    
button2.addEventListener('click', function(){
    sd.play();
}); 
button3.addEventListener('click', function(){
    rim.play();
}); 
button4.addEventListener('click', function(){
    hho.play();
}); 
button5.addEventListener('click', function(){
    hhc.play();
}); 
button6.addEventListener('click', function(){
    tomh.play();
});
button7.addEventListener('click', function(){
    tomm.play();
}); 
button8.addEventListener('click', function(){
    toml.play();
}); 
button9.addEventListener('click', function(){
    ride.play();
}); 
button0.addEventListener('click', function(){
    crash.play();
});

addEventListener ('keydown', function(event)  { 
    if (event.key == 1) {
        bd.play();
    } else if (event.key == 2) {
        sd.play();
    } else if (event.key == 3) {
        rim.play();
    }else if (event.key == 4) {
        hho.play();
    }else if (event.key == 5) {
        hhc.play();
    } else if (event.key == 6) {
        tomh.play();
    } else if (event.key == 7) {
        tomm.play();
    } else if (event.key == 8) {
        toml.play();
    } else if (event.key == 9) {
        ride.play();
    } else if (event.key == 0) {
        crash.play();
    };
})