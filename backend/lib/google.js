

module.exports = class Google {
    static geocode(ad) {
        return new Promise((res, rej) => {
            let googleMapsClient = require('@google/maps').createClient({
                key: 'AIzaSyC7rhkCx5UTwQSjGGDfPCdJPH0WMoyv3EY'
            });
            googleMapsClient.geocode({
                address: ad
            }, (err, response) => {
                res(response.json.results[0]);
            });
        });
    }
}