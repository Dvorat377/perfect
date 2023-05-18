
module.exports = {

    //בדיקת תקינות טלפון
    validphone: (phon) => {
        const axios = require('axios');
        axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=a4f10d2cc45e47a5a58004075e221cb3&phone=${phon}`)
            .then(response => {
                if (response.data.valid === true) {
                    return true
                }
                else
                    return false
            })
            .catch(error => {
                //console.log(error);
                return false;
            });
    },


    //בדיקת תקינות מייל
    validemail: (email) => {

        const data1 = email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(data1)) {

            return false
        }
        else
            return true;

    }


}