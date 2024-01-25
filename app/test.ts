
interface Int1{
    prop1: number
}

interface Int2 extends Int1{
    prop2: number
}

//type IntUn1 = Int1 & Int2;

const tmp:Int2 = {
    prop1:1,
    prop2:2
}
let keys: keyof Int2 = 'prop1';

const test:string = 'prop2';

//keys = test;