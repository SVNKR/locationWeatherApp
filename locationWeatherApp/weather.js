/**
 * Created by submukherjee on 5/31/2018.
 */

const request =  require('request');

var weather = {
        getWeather : (lat, lang) => {
        return new Promise(function(resolve, reject) {
            request({
                url : `https://api.darksky.net/forecast/0d915b856861f574aacd6cf1a223fdf1/${lat},${lang}`,
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

module.exports = weather;