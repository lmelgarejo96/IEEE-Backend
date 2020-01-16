
// SQL con mssql
import dbConfigSQL  from './db.config';
export const sql = require('mssql')

export let connection =  async function Conn() {
    try {
        const conn = await sql.connect(dbConfigSQL);
        if(conn) {
            console.log('DB is connected');
            return conn;
        }
        else{
            console.log('There was an error trying to connect to the database..');
            return 
        }        
    } catch (err) {
        console.log('Hubo un error conectando a la Base de datos')
    }
}







// MONGO DB
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then( db => console.log('Database is connected!'))
    .catch( error => console.log('There was an error trying to connect to the database..'))
    
