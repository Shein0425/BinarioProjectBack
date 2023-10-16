import { getConnection } from "./../db/db";

const getUserList = async(req, res) => {
    try{
        const connect = await getConnection();
        const result = await connect.query("SELECT idusers, fname, lname, email FROM users");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};

export const methods = {
    getUserList,
};