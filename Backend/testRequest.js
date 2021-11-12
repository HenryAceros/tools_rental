const axios = require('axios');
//const { response } = require('express');

axios.get('https://restcountries.com/v3.1/name/colombia')
    .then((response) => {
        //console.log(response);
        //console.log(response.status);
        console.log(response.data);
    })