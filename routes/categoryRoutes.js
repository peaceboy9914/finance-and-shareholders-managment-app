import { Router } from "express"
import { createExpenseCategory, createIncomeCategory, deleteExpenseCategory, deleteIncomeCategory, getAllExpenseCategories, getAllIncomeCategories, getExpenseCategory, getIncomeCategory, updateExpenseCategory, updateIncomeCategory } from "../controllers/categoryController";
const categoryRoutes = Router()

categoryRoutes.get('/income/', getAllIncomeCategories);
categoryRoutes.get('/income/:id', getIncomeCategory);
categoryRoutes.post('/income/', createIncomeCategory);
categoryRoutes.put('/income/:id', updateIncomeCategory);
categoryRoutes.delete('/income/:id', deleteIncomeCategory);

categoryRoutes.get('/expense/', getAllExpenseCategories);
categoryRoutes.get('/expense/:id', getExpenseCategory);
categoryRoutes.post('/expense/', createExpenseCategory);
categoryRoutes.put('/expense/:id', updateExpenseCategory);
categoryRoutes.delete('/expense/:id', deleteExpenseCategory);


export default categoryRoutes;