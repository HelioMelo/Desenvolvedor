import { Request, Response, Router } from 'express';
import { SomaService } from '../services/somaService';

const router = Router();
const somaService = new SomaService();

router.get('/soma', (req: Request, res: Response) => {
    const soma = somaService.calcularSoma();
    res.json({ soma });
});

export { router as SomaController };
