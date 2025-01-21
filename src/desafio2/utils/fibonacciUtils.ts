export function fibonacciSequence(num: number): number[] {
    const sequence: number[] = [0, 1];
    let nextValue = sequence[0] + sequence[1];

    while (nextValue <= num) {
        sequence.push(nextValue);
        const length = sequence.length;
        nextValue = sequence[length - 1] + sequence[length - 2];
    }

    return sequence;
}

export function isFibonacci(num: number): boolean {
    const sequence = fibonacciSequence(num);
    return sequence.includes(num);
}
