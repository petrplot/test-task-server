
import fs from "fs";
import path from 'path';
import { logger } from "../index";
import { Validator } from "../util/validator";
import { objectData } from "../types";

class Data {

    async get():Promise<objectData[]>{
        try {
            const pathFile = path.join(__dirname,'..','..','data', 'data.json')
            
            return new Promise((resolve, reject)=>fs.readFile(pathFile, {encoding:'utf8'}, (err,data)=>{
                if (err) {
                    return reject(err)
                }
                setTimeout(() => {
                    resolve(JSON.parse(data))   
                }, 11000);
                
            })) 
        } catch (e) {
            logger.error(e)
        }
    }

    async findOne(req){
        try {
            const {email, number} = req.body
            const isEmail = Validator.isEmail(email)
            const isNumber = Validator.isNumber(number)

            if (!isEmail) {
                return 'введите валидный Email'
            }
            if (!isNumber) {
                return 'введите целое положительное число больше 0'
            }

            const dataArray = await this.get()
            
            if(dataArray.length > 0){
                
                const desiredObject =  dataArray.find((object:objectData)=> {
                    return object.email === email
                        &&
                        object.number === number
                })
                if(desiredObject){
                    return desiredObject
                }else{
                    return 'оъект в базе не найден'
                }

            }else{
                return 'данные отсутствуют'
            }
        } catch (e) {
            logger.error(e)
        }
    }
        
}


export default new Data;