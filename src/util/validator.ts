import { logger } from "../index";

export class Validator {
    static isEmail(email:string):boolean{
        const reg= /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        logger.info('проверка почты-',reg.test(email))
        if(reg.test(email) == false) {
            return false;
         }else{
            return true
         }
    }
    static isNumber(number:number):boolean{
        const numberPositive = Math.sign(number)
        logger.info('проверка номера-', numberPositive)
        if (numberPositive === 1) {
            return true
        }else{
            return false
        }
        
    }
}

