// TODO - create client object for Google API connection which can be exported
const apiKey = require('./config')

const apiCall = function(place){

    const googleMapsClient = require('@google/maps').createClient({
        key: apiKey.config.key,
        Promise: Promise
    });

    googleMapsClient.findPlace({input: place, inputtype: "textquery" }).asPromise().then((response) => {
       
    googleMapsClient.place({placeid: response.json.candidates[0].place_id}).asPromise().then((newPlace) => {

    console.log(`${place} is located at ${newPlace.json.result.geometry.location.lat} lat and ${newPlace.json.result.geometry.location.lng} at address ${newPlace.json.result.formatted_address}`) ;
   // should probably instead of consle logging here return this data and console log in placeinfo



    }).catch((err) => { console.log(err);});
        //console.log(response.json.candidates[0].place_id);

     }).catch((err) => {
         console.log(err);
     });
   
return;

}


module.exports = {apiCall};
