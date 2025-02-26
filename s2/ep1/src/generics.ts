function premierElement<T>(tableau: T[]) :T {
    return tableau[0];
}

let tabStr: string[] = ["a", "b", "c"];
let tabNum: number[] = [1, 2, 3];
let tabObj: object[] = [{}, {}, {}];

console.log(premierElement(tabStr));
console.log(premierElement(tabNum));
console.log(premierElement(tabObj));