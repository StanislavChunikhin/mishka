var button = document.querySelector('.page-header__button');
var menu_closed = document.querySelector('.page-header');

button.addEventListener('click', function(event) {
  event.preventDefault();
  menu_closed.classList.toggle('closed');

});

var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.938738, lng: 30.323044},
        zoom: 16.5,
        disableDefaultUI: true
      }),
      image = '../img/marker.svg',
      marker = new google.maps.Marker({
            position: {lat: 59.938738, lng: 30.323044},
            map: map,
            animation: google.maps.Animation.DROP,
            icon: image
      });
    }
