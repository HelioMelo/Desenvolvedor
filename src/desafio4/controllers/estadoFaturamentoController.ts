import { Request, Response, Router } from 'express';
import { EstadoFaturamentoService } from '../services/estadoFaturamentoService';

const router = Router();
const estadoFaturamentoService = new EstadoFaturamentoService();

router.get('/percentual', (req: Request, res: Response) => {
    const percentuais = estadoFaturamentoService.getPercentuais();
    res.json(percentuais);
});

export { router as EstadoFaturamentoController };
