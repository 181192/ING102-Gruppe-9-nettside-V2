/* Google maps script */

var myCenter = new google.maps.LatLng(60.3691361, 5.3496311); // Kordinater for kartet
function initialize() {
    var mapProp = {
        center: myCenter, // center av kartet som er kordinater
        zoom: 12, // zoom på kartet
        scrollwheel: false, // Scrolling deaktivert
        draggable: false, // Dra kartet, deaktivert
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);