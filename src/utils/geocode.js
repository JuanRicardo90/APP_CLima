const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoianJpY2FyZG90IiwiYSI6ImNrdmszMHI3ejV6eHAzMXExbTRqM2QwaHMifQ.zhJzRDDk3ukOLWeiPY8Peg&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('No es posible conectar con el servidor!', undefined)
        } else if (response.body.features.length === 0) {
            callback('No es posible encontrar la ubicacion. Intenta con otra ciudad.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode