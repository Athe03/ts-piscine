interface Lengthwise {
    length: number;
}
declare function premierElement<T extends Lengthwise>(tableau: T[]): T;
declare let tabStr: string[];
declare let tabNum: string[];
