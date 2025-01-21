import { Request, Response, Router } from 'express';
import { FibonacciService } from '../services/fibonacciService';

const router = Router();
const fibonacciService = new FibonacciService();

router.get('/fibonacci/:num', (req: Request, res: Response) => {
    const num = parseInt(req.params.num);
    const result = fibonacciService.verificarFibonacci(num);
    res.json(result);
});

export { router as FibonacciController };
