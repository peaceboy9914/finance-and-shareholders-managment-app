import { Router } from "express"
import { createIncome, deleteIncome, getAllIncomes, getIncome, updateIncome } from "../controllers/incomeController"

const incomeRoutes = Router()

incomeRoutes.get('/', getAllIncomes);
incomeRoutes.get('/id', getIncome);
incomeRoutes.post('/', createIncome);
incomeRoutes.put('/', updateIncome);
incomeRoutes.delete('/', deleteIncome);


export default incomeRoutes;