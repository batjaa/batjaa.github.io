window.postLoad = function() {

  var primaryColor = $.Color($('.nav-toggle').css('background-color'));

  
    const googleMapsSettings = {
      styled: true,
      latitude: 49.38638,
      longitude: 7.45852,
      zoom: 8,
      hue: primaryColor.toRgbaString(),
      gamma: 1.75,
      saturation: -80,
      lightness: -10,
      invertLightness: false,
      infoWindowContentString: '<h4>Info Window</h4>' + '<p>You can add content here</p>',
    };

    // Activate Google Maps
    var mapCanvas = $('#map-canvas');
    if (mapCanvas.length > 0){
      mapCanvas.googleMaps(googleMapsSettings);
    }  
  

};