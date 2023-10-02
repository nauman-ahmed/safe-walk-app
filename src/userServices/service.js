export const getAddressFromLatLong = async (latitude, longitude) => {
    const latLng = { lat: latitude, lng: longitude };
    const geocoder = new window.google.maps.Geocoder();
    return new Promise((resolve, reject) => {
        geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                const address = results[0].formatted_address;
                resolve(address);
                }
            } else {
                reject(status);
                console.error("Geocoder failed due to:", status);
            }
        });

    });
};