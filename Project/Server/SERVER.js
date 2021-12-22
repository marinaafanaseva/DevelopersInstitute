const exp = require('express');
const DB = require('./modules/db');
const env = require('dotenv');
const cors = require('cors');

env.config();

const app = exp();
// app.use(exp.urlencoded());
app.use(exp.json());
app.use(cors());

app.get('/api/appeals', (req,res) => {
  DB.getAllAppeals()
  .then(appeals => {
    res.json(appeals)
  })
  .catch(e => {
    console.log(e);
  })
})

app.put('/api/appeals/:appealId',(req,res)=>{
  DB.insertAppeal(req.params.appealContent)
  .then(row => {
    res.json(row)
  })
  .catch(e => {
    console.log(e);
  })
})

app.post('/api/citizen',(req,res)=>{
  DB.insertCitizen(req.body)
  .then(row => {
    res.json(row)
  })
  .catch(e => {
    console.log(e);
  })
})

/*app.delete('/api/countries/:countryId',(req,res)=>{
  DB.deleteCountry(req.params.countryId)
  .then(row => {
    res.json(row)
  })
  .catch(e => {
    console.log(e);
  })
}) */

app.post('/api/appeals', (req,res)=> {
  DB.updateAppeal(req.body.appeal_content)    //req.body.country_name, - was cut
  .then(row => {
    res.json(row)
  })
  .catch(e => {
    console.log(e);
  })
})
//
// app.get('/api/countries',(req,res)=>{
//   DB.getAllCountries()
//   .then(countries =>{
//     res.json(countries)
//   })
//   .catch(e => {
//     console.log(e);
//   })
// })

// app.put('/api/countries/:countryName',(req,res)=>{
//   DB.insertCountry(req.params.countryName)
//   .then(row =>{
//     res.json(row)
//   })
//   .catch(e => {
//     console.log(e);
//   })
// })

// app.delete('/api/countries/:countryId',(req,res)=>{
//   DB.deleteCountry(req.params.countryId)
//   .then(row =>{
//     res.json(row)
//   })
//   .catch(e => {
//     console.log(e);
//   })
// })

// app.post('/api/countries',(req,res)=>{
//   DB.updateCountry(req.body.country_name,req.body.country_id)
//   .then(row =>{
//     res.json(row)
//   })
//   .catch(e => {
//     console.log(e);
//   })
// })

app.listen(process.env.PORT,()=>{
  console.log('listening to port '+process.env.PORT);
})
