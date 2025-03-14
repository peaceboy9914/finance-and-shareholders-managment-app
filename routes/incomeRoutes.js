import { Router } from "express"
import { createIncome, deleteIncome, getAllIncomes, getIncome, updateIncome } from "../controllers/incomeController.js"

const incomeRoutes = Router()

incomeRoutes.get('/', getAllIncomes);
incomeRoutes.get('/:id', getIncome);
incomeRoutes.post('/', createIncome);
incomeRoutes.put('/:id', updateIncome);
incomeRoutes.delete('/:id', deleteIncome);


export default incomeRoutes;