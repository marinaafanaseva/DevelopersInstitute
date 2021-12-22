const knex = require('knex');
const env = require('dotenv');

env.config({ path: './.env'});

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME        
  }
})


const insertCitizen = (citizen_data) => {
  return db('citizens')
  .insert({
    first_name:citizen_data.firstName,
    last_name:citizen_data.lastName,
    id:citizen_data.id,
    address:citizen_data.address,
    email:citizen_data.email})
  .returning(['*']);
}

const insertService = (service_data) => {      
  return db('services')
  .insert({
    //id:services_data.id,
    service_name: service_data.serviceName,           //first= columl_name in db-table; second= variableName of this function
    service_keywords: service_data.serviceKeywords})
    //contact:services_data.contact
  .returning(['*']);
}

const insertAppeal = (appeal_data) => {      
  return db('citizens_services')
  .insert({
    appeal_date: appeal_data.appealDate,
    openness: appeal_data.openness,
    appeal_content: appeal_data.appealContent,
    citizen_satisfaction: appeal_data.citizenSatisfaction})
  .returning(['*']);
}

const getAllCitizens = () => {
  return db('citizens')
  .select('*')    
  .orderBy('citizen_id', 'asc')        
}

const getAllServeces = () => {
  return db('services')
  .select('*')    
  .orderBy('service_id', 'asc')        
}

const getAllAppeals = () => {
  return db('citizens_services')
  .select('*')    
  .orderBy('appeal_date', 'asc')        
}

const updateCitizen = (email, citizenId) => {
  return db('citizens')
  .where({citizen_id: citizenId})
  .update({email: email})
  .returning('*')
}

const updateService = (serviceId, serviceKeyWords) => {
  return db('services')
  .where({service_keywords: serviceKeyWords})
  .update({service_id: serviceId})
  .returning('*')
}

const updateAppeal = (satisfaction, appealDate) => {     //these are variables of function updateAppeal !!! named as in FormComponent
  return db('citizens_services')
  .where({appeal_date: appealDate})                 //appeal_date= column_name in 'citizens_services'-table in db; 
  .update({citizen_satisfaction: satisfaction})     //appealDate= variable of this function
  .returning('*')
}

module.exports = {
  getAllCitizens,
  getAllServeces,
  getAllAppeals,
  insertCitizen,
  insertService,
  insertAppeal,
  updateCitizen,
  updateService,      //deleteCountry,  
  updateAppeal
}
