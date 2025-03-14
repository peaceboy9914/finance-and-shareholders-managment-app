import { Router } from "express"
import { createExpense, deleteExpense, getAllExpenses, getExpense, updateExpense } from "../controllers/expenseController.js"

const expenseRoutes = Router()

expenseRoutes.get('/', getAllExpenses);
expenseRoutes.get('/:id', getExpense);
expenseRoutes.post('/', createExpense);
expenseRoutes.put('/:id', updateExpense);
expenseRoutes.delete('/:id', deleteExpense);


export default expenseRoutes;