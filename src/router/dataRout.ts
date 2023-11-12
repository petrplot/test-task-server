import Router  from "express";
import controller from '../controllers/dataController'

const router = Router()

router.get('/', controller.getData)

router.post('/', controller.findData)

export default router