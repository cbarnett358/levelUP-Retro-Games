import mysql from "mysql2/promise";


//connect to  mysql database
export default async function handler(req, res) {

const dbconnection = await mysql.createConnection({
    host: "bdawlntsya3qatzbcph8-mysql.services.clever-cloud.com",
    database: "bdawlntsya3qatzbcph8",
    user: "u4qbzsrlzl8lom1i",
    password: "RAOQB9kT0DnVRiV3uc0a",

});

try {
    

    const query = "SELECT product_id, product_name, product_description FROM products";
    const values = []
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({products: data });

} catch (error) {

}

}