// set endpoint and your access key 
endpoint = 'convert' ; 
access_key = '6b543e9294a71d26a6606f5449cf71a6&format=1' ;  

// establish currency and summ of money
from = 'USD' ; 
to = 'ILS' ; //shekel
amount = '100' ;
    

// execute the conversion using the "convert" endpoint: 
fetch ('https://api.currencylayer.com/' + endpoint + '? access_key =' + access_key + '& from =' + from + '& to =' + to + '& amount =' + amount)   
    .then((res) => res.json()) 
    .then((res) => console.log (res)) 
     