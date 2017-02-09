/**
 * Created by miketran on 2/8/17.
 */
const request = require('superagent')
const getInfoPokemon = (entity) {
    if (!entity) { return Promise.reject('You didn\'t gave me any pokemon')}
    return new Promise((resolve, reject)) {
        request.get('https://pokeapi.co/api/v2/pokemon/' + entity.raw)
            .end((err, res) => {
            if err { return reject('ERROR') }
        resolve('OK')
        console.log(res.body)
    })
    })
}
modules.exports = getInfoPokemon;
