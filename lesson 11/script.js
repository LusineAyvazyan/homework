//Գտնել կայք որը օգտագործում է  localStorage կամ sessionStorage

//www.youtube.com/ => both
//www.google.com/ => both
//childrensalon.com => localStorage
//edition.cnn.com => both
//rutracker.org => localStorage


//ժամը
const myTime = document.querySelector('#time')
myTime.addEventListener("click", function () {
    var date = new Date();
    var time = date.toTimeString();
    document.write(time);
  });


//օգտագործվող ծրագիրը
const myDevice = document.querySelector('#device')
myDevice.addEventListener("click", function () {
    document.write(navigator.userAgent);
  });   //Սա օգտագործեցի, բայց էլի խորհուրդ չի տրվում:
        //Այլ տարբերակներ գտա, պարզապես մեջը շատ բաներ դեռ չէինք անցել, դրա համար չգրեցի



// գտնված վայրը (Ձեր ասած տարբերակով)

const myLocation = document.querySelector('#location')
myLocation.addEventListener('click', function() {
  const status = document.querySelector('#status');
  const map= document.querySelector('#link');
  link.href = '';
  link.text = '';
      function success(position) {
          const latitude  = position.coords.latitude;
          const longitude = position.coords.longitude;
    status.text = '';
    map.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    map.text = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }
      function error() {
          status.text = 'Unable to retrieve your location';
  }
  if(!navigator.geolocation) {
    status.text = 'Geolocation is not supported by your browser';
  } else {
    status.text = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
});


// Իմ տարբերակով 

//const myLocation = document.querySelector('#location');
//myLocation.addEventListener('click', function getLocation() {
//  if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(showPosition);
//  } else {
//    document.write("Geolocation is not supported by this browser.");
//  }
//});
//
//function showPosition(position) {
//  document.write("Latitude: " + position.coords.latitude +
//  "<br>Longitude: " + position.coords.longitude);
//}; 
// և լինքը HTML-ի մեջ կցած

