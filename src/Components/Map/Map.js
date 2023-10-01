import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF, PolylineF, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 37.7749,
    lng: -122.4194,
};

const markers = [
    { id: 1, position: { lat: 37.7749, lng: -122.4194 } },
    // ... add more markers
];

const polylines = [
    {
        path: [{ lat: 37.7749, lng: -122.4194 }, { lat: 38.5816, lng: -121.4944 }],
        options: {
            strokeColor: '#FF0000',
        },
    },
    // ... add more polylines
];

const style = [

    {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }], // Black background
    },
    {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [{ color: '#000000' }], // Black landscape
    },
    {
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        stylers: [{ color: '#000000' }], // Black natural landscape
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#c979f7' }], // White roads and streets
    },
    {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#c979f7' }], // White country boundaries
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#c979f7' }], // White park lines
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#ca4cdb' }], // Red water areas
    },
    {
        featureType: 'all',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }], // Hide all labels
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ weight: 2 }], // Set the same line width for roads and streets
    },
    {
        featureType: 'poi.business',
        stylers: [{ visibility: 'off' }], // Hide business POIs (houses)
    },
    {
        featureType: 'transit',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }], // Hide transit icons
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ weight: 1 }], // Reduce the width of roads
    },
];

const Map = (props) => {


    const handleRouteClick = index => {
        alert(index)
        // setSelectedRouteIndex(index);
    };
    const [selectedRouteIndex, setSelectedRouteIndex] = useState(null);

    const markerIconConfig = {
        path:
            'M10 27c-.2 0-.2 0-.5-1-.3-.8-.7-2-1.6-3.5-1-1.5-2-2.7-3-3.8-2.2-2.8-3.9-5-3.9-8.8C1 4.9 5 1 10 1s9 4 9 8.9c0 3.9-1.8 6-4 8.8-1 1.2-1.9 2.4-2.8 3.8-1 1.5-1.4 2.7-1.6 3.5-.3 1-.4 1-.6 1Z',
        fillOpacity: 1,
        strokeWeight: 1,
        anchor: new window.google.maps.Point(15, 29),
        scale: 1.2,
        labelOrigin: new window.google.maps.Point(10, 11),
    };

    const MARKER_ICON_COLORS = {
        active: {
            fill: '#B5F44A',
            stroke: '#B5F44A',
            label: '#B5F44A',
        },
        inactive: {
            fill: '#FFFFFF',
            stroke: '#FFFFFF',
            label: '#FFFFFF',
        },
    };

    const STROKE_COLORS = {
        active: {
            innerStroke: '#70EE9C',
            outerStroke: '#70EE9C',
        },
        inactive: {
            innerStroke: '#FFFFFF',
            outerStroke: '#FFFFFF',
        },
    };

    const originMarkerIcon = {
        ...markerIconConfig,
        fillColor: MARKER_ICON_COLORS.active.fill,
        strokeColor: MARKER_ICON_COLORS.active.stroke,
    };


    const destinationMarkerIcon = {
        ...markerIconConfig,
        fillColor: MARKER_ICON_COLORS.inactive.fill,
        strokeColor: MARKER_ICON_COLORS.inactive.stroke,
    };


    // useEffect(()=>{
    //     console.log("MAP",props)
    // },[props])

    return (
        <GoogleMap mapContainerStyle={containerStyle} center={props.myLocation} zoom={10}
            options={{
                styles: style,
                zoomControl: false, // Hides the zoom control
                mapTypeControl: false, // Hides the map type control
                streetViewControl: false, // Hides the street view control
            }}
        >
            <MarkerF icon={originMarkerIcon} key={999} position={props.myLocation} />
            {props && props.addresses && props.addresses.length > 0 && props.addresses.map((marker, i) => (
                <div onClick={() => handleRouteClick(i)}>
                    <MarkerF icon={destinationMarkerIcon} key={i + 1} position={marker.destinationLatLng} />

                    <DirectionsRenderer
                        key={i}
                        directions={marker.direction}
                        options={{
                            suppressMarkers: true,
                            preserveViewport: true,
                            polylineOptions: {
                                strokeColor: props.selectedItem === i ? '#00FF00' : '#0000FF',
                                strokeWeight: selectedRouteIndex === i ? 10 : 5,
                            },
                        }}
                        onClick={() => handleRouteClick(i)}
                    />
                </div>
            ))}
        </GoogleMap>
    );
};

export default Map;
