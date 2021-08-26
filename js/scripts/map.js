'use strict';
(function () {
  if (document.querySelector('.map-box')) {
    const mapBox = document.querySelector('.map-box');
    let map;

    //const lt = 59.939242; 
    // const lg = 30.329359;
    const mapOptions = {
      // center: {lat: lt, lng: lg},//{ lat: 59.93927000245234, lng: 30.329457879892697},
      center: { lat: 59.93927000245234, lng: 30.329457879892697 },
      zoom: 16,
      currentZoom: 16,
      disableDefaultUI: true,
      zoomControl: true,
    };

    const markerCoords = { lat: 59.938570, lng: 30.322966 };
    //{ lat: 59.938703, lng: 30.323153 };//{ lat: 59.938586, lng: 30.322986 };// {lat: 59.938592, lng: 30.323029};
    
    const markerSvg = {
      path: 'M138.31,193.56l-12.86,13.02l-3.5-3.58c-1.71,0.66-3.47,1.24-5.28,1.75l5.26,5.38l-10.09,10.21l-9.83-9.75l3.67-3.76c-2.22,0.23-4.48,0.35-6.78,0.35c-2.69,0-5.33-0.17-7.91-0.47l3.97,3.94l-9.1,9.33l-10.21-10.26l5.09-5.09c-1.81-0.52-3.57-1.12-5.28-1.79l-3.33,3.33l-12.04-12.1c-6.31,2.91-13.32,4.55-20.72,4.55c-0.54,0-1.08-0.02-1.62-0.04c10.08,27.96,50.01,138.66,51.88,143.33c2.14,5.35,4.63,8.55,8.55,8.55c3.92,0,6.77-1.43,9.62-8.91c2.57-6.75,43.65-121.79,51.73-144.42c-0.78,0.04-1.57,0.06-2.36,0.06C150.52,197.2,144.15,195.9,138.31,193.56z M111.88,227.41l9.46,9.38l-9.31,9.48l-9.43-9.48L111.88,227.41z M98.46,260.09l-9.47-9.52l10.1-10.21l9.44,9.49L98.46,260.09z M98.49,267.2l10.3,10.35l-9.28,9.5l-10.29-10.42L98.49,267.2z M98.53,214.17l9.8,9.72l-9.25,9.36l-9.68-9.73L98.53,214.17z M85.91,227.11l9.65,9.7l-10.1,10.21l-9.58-9.63L85.91,227.11z M57.1,198.15l11.51,11.57l-5.54,5.54L57.1,198.15z M64.89,220.5l7.24-7.24l10.25,10.3l-10.03,10.28l-4.33-4.35L64.89,220.5z M72.12,241.24l0.27-0.27l9.56,9.61l-4.86,4.92L72.12,241.24z M81.87,269.19l-2.94-8.44l6.55-6.63l9.48,9.53l-9.25,9.42L81.87,269.19z M85.71,280.21L85.71,280.21l10.3,10.42l-4.91,5.03L85.71,280.21zM100.43,315.58c-0.38,1.14-1.99,1.15-2.38,0.02l-5.11-14.66l6.59-6.75l5.97,6.05L100.43,315.58z M107.26,294.91l-4.24-4.3l8.56-8.77L107.26,294.91z M115.16,271.03l-2.88,2.95l-10.29-10.34l10.06-10.25l6.7,6.74L115.16,271.03z M120.52,254.8l-4.96-4.99l9.33-9.5l0.32,0.31L120.52,254.8z M129.08,228.92l-4.23,4.31l-9.45-9.37l10.03-10.15l6.48,6.63L129.08,228.92z M133.68,214.99l-4.73-4.85l9.52-9.63L133.68,214.99zM182.68,114.57c2.8-8.52,4.32-17.62,4.32-27.07C187,39.18,147.38,0,98.5,0S10,39.18,10,87.5c0,9.15,1.42,17.97,4.06,26.26C5.46,121.38,0,132.77,0,145.5C0,168.42,17.68,187,39.5,187c8.21,0,15.83-2.63,22.14-7.13C70.71,190.38,83.86,197,98.5,197c14.46,0,27.47-6.46,36.53-16.75c6.31,4.26,13.86,6.75,21.97,6.75c22.09,0,40-18.36,40-41C197,133.38,191.43,122.09,182.68,114.57z M156.5,170c-12.47,0-22.67-9.72-23.45-21.99C129.38,166.34,115.31,180,98.5,180c-15.99,0-29.51-12.36-33.95-29.36C62.39,161.67,52.67,170,41,170c-13.25,0-24-10.75-24-24c0-11.97,8.76-21.88,20.21-23.7C30.73,111.84,27,99.6,27,86.5C27,48.12,59.01,17,98.5,17S170,48.12,170,86.5c0,13.46-3.95,26.02-10.76,36.66c11.69,1.36,20.76,11.28,20.76,23.34C180,159.48,169.48,170,156.5,170z',
      fillColor: '#f34523',
      fillOpacity: 1,
      strokeColor: '#f34523',
      rotation: 0,
      origin: new google.maps.Point(0, 0),
      scale: 0.35,//4,
      anchor: new google.maps.Point(100, 350),//new google.maps.Point(12,-290),//new google.maps.Point(15, 25),
    };
    
    const markerImg = '../img/marker.png';
    const markerShadowImg = '../img/marker-w-shadow360.png';


    const defineMapCentre = () => {
      const mapBoxWidthsToLngs = {
        '1200': { lng: 30.329359 },
        '900': { lng: 30.327830 },
      };

      const basicLat = 59.939242;
      const basicWidth = 1200;
      const basicLng = mapBoxWidthsToLngs[basicWidth].lng;

      const actualMapBoxWidth = mapBox.offsetWidth > 1200 ? 1200 : mapBox.offsetWidth;
      
      if (actualMapBoxWidth < 900 && mapOptions.currentZoom <= mapOptions.zoom) {
        return { lat: basicLat, lng: markerCoords.lng };
      }

      if (actualMapBoxWidth < 900) {
        return { lat: markerCoords.lat, lng: markerCoords.lng };
      }

      if (mapOptions.currentZoom > mapOptions.zoom) {
        return { lat: markerCoords.lat, lng: markerCoords.lng };
      }

      const lngPerPxl = (basicLng - mapBoxWidthsToLngs['900'].lng) / (basicWidth - 900);
      const actualLng = basicLng - (basicWidth - actualMapBoxWidth) * lngPerPxl;
      return { lat: basicLat, lng: actualLng };
    };

    const updateMapCentre = () => {
      mapOptions.center = defineMapCentre();
      map.setCenter(mapOptions.center);
    };


    const zoomChangeHandler = function () {
      const currentZoom = map.getZoom();
      // const currentCenter = mapOptions.center;
      if (currentZoom > mapOptions.zoom) {
        mapOptions.center = markerCoords;
        map.setCenter(mapOptions.center);
      }

      if (currentZoom <= mapOptions.zoom) {
        defineMapCentre();
        map.setCenter(mapOptions.center);
      }
    };


    const initMarker = (coords, map, img, zIdx, title) => {
      const marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: title,
        icon: img,//markerSvg,//markerImg,//markerSvg,
        zIndex: zIdx,
      });

      return marker;
    }
    
    window.initThisMap = function () {
      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      // const marker = 
      initMarker(markerCoords, map, markerSvg, 2, 'Glaccy Shop');
      // const markerShadow = initMarker(markerCoords, map, markerShadowImg, 1);
      initMarker(markerCoords, map, markerShadowImg, 1);

      map.addListener('zoom_changed', function () {
        mapOptions.currentZoom = map.getZoom();
        zoomChangeHandler();
      });
    }
    
    /* DOES NOT WORK:
    window.addEventListener('load', function () {
      window.initThisMap();
      updateMapCentre();
    });
    */

    /*
    window.addEventListener('load', function () {
      if (typeof google === 'object' && typeof google.maps === 'object' && typeof google.maps.Map === 'function'
      && typeof google.maps.Marker === 'function' && typeof google.maps.InfoWindow === 'function') {
        window.initThisMap();
        updateMapCentre();
      }
    });
    */

    if (typeof google === 'object' && typeof google.maps === 'object' && typeof google.maps.Map === 'function'
      && typeof google.maps.Marker === 'function' && typeof google.maps.InfoWindow === 'function') {
      window.initThisMap();
      updateMapCentre();
    }


    window.addEventListener('resize', function (evt) {
      // if (mapOptions.currentZoom <= mapOptions.zoom) {
        updateMapCentre();
      // }
    });
  }
})();
