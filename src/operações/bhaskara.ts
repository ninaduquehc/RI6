export default class Bhaskara {
    public calcular(a: number, b: number, c: number): number[] {
        if (a === 0) {
            throw new Error('"a" não pode ser zero em uma equação do 2º grau.');
        }
        const delta = b ** 2 - 4 * a * c;
        if (delta < 0) return [];

        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return delta === 0 ? [x1] : [x1, x2];
    }
}