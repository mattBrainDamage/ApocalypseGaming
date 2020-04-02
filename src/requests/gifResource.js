let axios = require('axios');
let defaults = require('./default');

const url = "gifs/"

let gifResource = {
    random : function ()  {
        return axios({
            ...defaults,
            method: "GET",
            url: url+"random",
            params: {
                api_key : '4YwC1EqJbUZpq1dCNfF7btIElc6ZoJot'
            }
        })
    }
}


module.exports = gifResource;
