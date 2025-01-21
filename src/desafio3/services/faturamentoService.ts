import { FaturamentoDia, FaturamentoStats } from '../dtos/faturamentoDto';
import { dados } from '../models/faturamentoModel';
import { calculateStats } from '../utils/faturamentoUtils';

export class FaturamentoService {
    public getFaturamentoStats(): FaturamentoStats {
        return calculateStats(dados);
    }
}
