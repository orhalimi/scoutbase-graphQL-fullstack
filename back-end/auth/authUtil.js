
import bcrypt from 'bcrypt';
import path from 'path';
const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKEY = fs.readFileSync(path.join(__dirname,'./private.key'), 'utf8');
const publicKEY = fs.readFileSync(path.join(__dirname,'./public.key'), 'utf8');

const globalTokenOptions = {
    issuer:  'Scoutbase Challenge',
    audience:  'http://localhost:8000',
    expiresIn:  '30d',
};

function jwtSign(user){
    const {name, id, password} = user;
    if(!name || !id || !password) return null;
    const signOptions = {
        ...globalTokenOptions,
        algorithm:  'RS256'
    };
    const token = jwt.sign({name, password, id}, privateKEY, signOptions);
    return token;
}

function jwtVerify(token){
    const verifyOptions = {
        ...globalTokenOptions,
        algorithm:  ["RS256"]
    };

    try{
        return jwt.verify(token, publicKEY, verifyOptions);
    }catch (err){
        return false;
    }
    
}

async function hashPass(password){
    const hash = await bcrypt.hash(password, 10);
    return hash;
} 

async function compereHashPass(password, hash){
    return await bcrypt.compare(password, hash)
}

export default { 
    hashPass,
    compereHashPass,
    jwtVerify,
    jwtSign,
}
    