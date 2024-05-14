export function sum(...values: number[]):number{
    return values.reduce((total, val) => total += val);
}