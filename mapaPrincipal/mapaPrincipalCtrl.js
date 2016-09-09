mapAsegApp.controller('mapaPrincipalCtrl', function ($scope, $mdDialog, $mdMedia, $stateParams, $state) {

    //var ll = new google.maps.LatLng(-27.7833, -64.2667);
    //$scope.mapOptions = {
    //    center: ll,
    //    zoom: 12,
    //    mapTypeId: google.maps.MapTypeId.ROADMAP
    //};

    $scope.map = {
        center: {
            latitude: -27.7833,
            longitude:  -64.2667
        },
        zoom: 12,
        window: {
            model: {},
            show: false,
            options:{
                pixelOffset: {width:-1,height:-20}
            }
        },
        //markers: [
        //    {
        //        "id": "1",
        //        "latitude": "-27.787875",
        //        "longitude": "-64.258518",
        //        "name": "carlos v"
        //    },
        //    {
        //        "id": "2",
        //        "latitude": "-27.761572",
        //        "longitude": "-64.284021",
        //        "name": "otro cliente"
        //    }
            
            

        //],
        options: {
            scrollwheel: true
        },
        control: {}
    };

    $scope.onClick = function (marker, eventName, model) {
        console.log("Marker clicked!");
        model.show = !model.show;
    };

    $scope.mapTermas = {
        center: {
            latitude: -27.4833,
            longitude: -64.8667
        },
        zoom: 12,
        options: {
            scrollwheel: true
        },
        control:{}

    }

    $scope.mapBanda = {
        center: {
            latitude: -27.7333,
            longitude: -64.25
        },
        zoom: 12,
        options: {
            scrollwheel: true
        },
        control: {}

    }

    $scope.marker = {
        id: 0,
        coords: {
            latitude: -27.787875,
            longitude: -64.258518
        },
        options: {
            draggable: true
        }
    };

    $scope.markers = [
        {
            id: "1",
            latitude: "-27.787875",
            longitude: "-64.258518",
            name: "Carlos V",
            icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            direccion: "esquina del centro",
            supervisor: "kike"
        },

        {
            id: "2",
            latitude: "-27.761572",
            longitude: "-64.284021",
            name: "no me acuerdo",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
    ];

    

})