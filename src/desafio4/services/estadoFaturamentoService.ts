import { EstadoFaturamento, EstadoPercentual } from '../dtos/estadoFaturamentoDto';
import { faturamentoMensal } from '../models/estadoFaturamentoModel';
import { calcularPercentual } from '../utils/estadoFaturamentoUtils';

export class EstadoFaturamentoService {
    public getPercentuais(): EstadoPercentual[] {
        return calcularPercentual(faturamentoMensal);
    }
}
