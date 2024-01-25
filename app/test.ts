
interface Int1{
    prop1: number
}

interface Int2 extends Int1{
    prop2: number
}

//type IntUn1 = Int1 & Int2;

function test(data: Int1[] | Int2[]):void{
    data.forEach((el: Int1 | Int2)=>{
        if ('prop2' in el){
            const r2 = el;
            r2.prop2 = 2;
        }else{
            const r2 = el;
            r2.prop1 = 1;
        }
    });
}