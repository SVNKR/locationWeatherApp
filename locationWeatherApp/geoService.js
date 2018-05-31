/**
 * Created by submukherjee on 5/31/2018.
 */

const request =  require('request');

var geoService = {
  getCorordinates : (location) => {
            return new Promise(function(resolve, reject) {
                request({
                  url : `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDVdWF-Mi4pQ6e7QfyrgsZBa_CwMF_7MuQ`,
                  json : true
                },  (error, response, body) => {
                        if(error) {
                          reject(error);
                        }
                        else {
                          resolve(body);
                        }
                });
            });
    }
};

module.exports = geoService;
