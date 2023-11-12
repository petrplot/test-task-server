import modelData from '../models/Data'


class DataController{
    
   async getData (req, res){
        const data = await modelData.get()
        res.json(data)
        
    }
    async findData (req, res ){
        
        const data = await modelData.findOne(req)
        
        if(typeof(data) === 'string'){
            res.status(401)
        }
        
        res.json(data)
    }
}

export default new DataController;