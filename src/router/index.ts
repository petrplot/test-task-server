import Router  from "express";
import dataRout from "./dataRout";

const router = Router()

router.use('/data', dataRout )

export default router