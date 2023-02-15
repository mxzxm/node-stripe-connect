import { Router } from 'express';
import paymentController from '../controller/payment.controller.js';
var router = Router();

/* GET home page. */
router.get('/', paymentController.index);
router.get('/redirect', paymentController.redirect);

export default router;
