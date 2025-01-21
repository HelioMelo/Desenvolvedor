export class SomaService {
    public calcularSoma(): number {
        let INDICE = 13;
        let SOMA = 0;
        let K = 0;

        while (K < INDICE) {
            K++;
            SOMA += K;
        }

        return SOMA;
    }
}
