import mysql from "mysql2/promise";


//connect to  mysql database
export async function query({query, values =[]}) {

const dbconnection = await mysql.createConnection({
    host: "bdawlntsya3qatzbcph8-mysql.services.clever-cloud.com",
    database: "bdawlntsya3qatzbcph8",
    user: "u4qbzsrlzl8lom1i",
    password: "RAOQB9kT0DnVRiV3uc0a",

});

try {
    
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();

    return results;
}
catch (error) {
    throw Error(error.message);
    return {error};
}

}