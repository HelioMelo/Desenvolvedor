import { FaturamentoDia, FaturamentoStats } from '../dtos/faturamentoDto';

export function calculateStats(data: FaturamentoDia[]): FaturamentoStats {
    const validData = data.filter(entry => entry.valor > 0);

    const total = validData.reduce((sum, entry) => sum + entry.valor, 0);
    const media = total / validData.length;

    const menorValor = Math.min(...validData.map(entry => entry.valor));
    const maiorValor = Math.max(...validData.map(entry => entry.valor));
    const diasAcimaMedia = validData.filter(entry => entry.valor > media).length;

    return { menorValor, maiorValor, diasAcimaMedia };
}
