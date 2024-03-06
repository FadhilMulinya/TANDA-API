const axios = require('axios');

//const user  = async () => {}
async function requestAirtime(phoneNumber, Amount){
    //make sure the input is correct
    try {
        if (!phoneNumber || !amount) {
        throw new Error('Invalid request data');
        }
        //prepare data foor the airtime providers API
        const requestData = {
            phoneNumber, 
            amount,
        };
        const apiKey = '#';
        const apiUrl = ' https://io-proxy-443.tanda.co.ke/';
        //send requests to the airtime providers API
         const apiResponse =  await sendAirtimeRequest(requestData, apiKey, apiUrl);

         //handle API response
         const success = apiResponse.success;
         if (success) {
            return {succes: true, message: 'Airtime sent successfully'};
         }else {
            throw new Error('Failed to send airtime');
         }
         catch (error) {
            console.error('Error processing airtime request:', error);
            throw new Error('Internal server error');
          }
        }
        
        // Helper function to send requests to the airtime provider's API
        async function sendAirtimeRequest(requestData, apiKey) {
          const apiUrl = ' https://io-proxy-443.tanda.co.ke/';
        
          try {
            const response = await axios.post(apiUrl, requestData, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
              },
            });
        
            return response.data;
          } catch (error) {
            console.error('Error sending airtime request to the provider:', error);
            throw new Error('Failed to send airtime request');
          }
        }
        
    }


