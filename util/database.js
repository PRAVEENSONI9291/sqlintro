const sql= require('mysql2');

const pool = sql.createPool({
    user: 'root',
    password: 'Helloworld1*',
    host: 'localhost',
    database: 'productdata'

});


module.exports= pool.promise();
