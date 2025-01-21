import { fibonacciSequence, isFibonacci } from '../utils/fibonacciUtils';

export class FibonacciService {
    public verificarFibonacci(num: number) {
        const sequence = fibonacciSequence(num);
        const isFibo = isFibonacci(num);

        return {
            number: num,
            isFibonacci: isFibo,
            sequence,
        };
    }
}
