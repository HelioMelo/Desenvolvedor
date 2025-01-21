import { EstadoFaturamento, EstadoPercentual } from '../dtos/estadoFaturamentoDto';

export function calcularPercentual(faturamentoMensal: EstadoFaturamento[]): EstadoPercentual[] {
    const totalFaturamento = faturamentoMensal.reduce((sum, entry) => sum + entry.valor, 0);

    return faturamentoMensal.map(entry => ({
        estado: entry.estado,
        percentual: parseFloat(((entry.valor / totalFaturamento) * 100).toFixed(2)),
    }));
}
