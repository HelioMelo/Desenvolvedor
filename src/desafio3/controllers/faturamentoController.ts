import { Request, Response, Router } from 'express';
import { FaturamentoService } from '../services/faturamentoService';
import { FaturamentoStats } from '../dtos/faturamentoDto';

const router = Router();
const faturamentoService = new FaturamentoService();

router.get('/faturamento/stats', (req: Request, res: Response) => {
    const stats: FaturamentoStats = faturamentoService.getFaturamentoStats();
    res.json(stats);
});

export { router as FaturamentoController };
