const env = require('dotenv')

const mysql2 = require('mysql2')
const pool = mysql2.createPool({
    host:env.config().parsed.host,
    user:env.config().parsed.user,
    password:env.config().parsed.password,
    database:env.config().parsed.database
})


module.exports = pool;