import { Request, Response, Router } from 'express';
import { StringService } from '../services/stringService';

const router = Router();
const stringService = new StringService();

router.get('/inverter/:str', (req: Request, res: Response) => {
    const str = req.params.str;
    const invertedStr = stringService.inverterString(str);
    res.json({ original: str, inverted: invertedStr });
});

export { router as StringController };
