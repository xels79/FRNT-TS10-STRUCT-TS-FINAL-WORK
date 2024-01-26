import {Modal} from "@classess/modal";
import {toursDataArray} from "../../index"; // ссылка на массив с данными

// Определить типы для метода (возвращающие и для переменных в теле функции)
export function openModal(type: string, i: number) {

    const data = toursDataArray[i];
    const tourId = data?.id;

    let modalInfo = {};
    switch (type) {
        case "order":
            const modalTemplate = `
<div class="dilog__body">
    <div class="dialog__heading">
        <a href="#" data-moda-id="tour-modal" class="close-modal">x</a>
    </div>
    <div class="dialog__content">
        <p class="content__heading">${data.name}</p>
        <p class="content__description">${data.description}</p>
        
        <div data-tour-id=${tourId} class="ticket-submit">
            <a href="ticket.html">Купить билет</a>
        </div>
    </div>
</div>
`
            const modal = new Modal('tour-modal');
            modal.open(modalTemplate);
            document.getElementById("tour-modal").addEventListener('click', dialogClick);
            document.querySelector("#tour-modal>.dilog__body").addEventListener('click', dialogPreventClick);
            document.querySelector('#tour-modal>.dilog__body>.dialog__heading>.close-modal').addEventListener('click', closeButtonClick);
        break;
    }
}
let isBlinking = false;
function closeButtonClick(e:PointerEvent){
    const a:HTMLElement = <HTMLElement>e.target;
    a.removeEventListener('click', closeButtonClick);
    a.parentNode.parentNode.removeEventListener('click',dialogPreventClick);
    a.parentNode.parentNode.parentNode.removeEventListener('click', dialogClick);
    Modal.removeById(a.getAttribute("data-moda-id"));
}
function dialogPreventClick(e:PointerEvent){
    const target = <HTMLElement>e.target;
    if (target.tagName!=="A"){
        e.preventDefault();
        e.stopPropagation();
    }
}
function dialogClick(e:PointerEvent){
    if (!isBlinking){
        blink(<HTMLElement>((<HTMLElement>e.target).firstElementChild));
    }
}
function blink(target: HTMLElement, count:number = 10){
    const visibility = target.style.visibility;
    setTimeout(()=>{
        isBlinking = true;
        if (--count){
            if (!visibility || visibility==='visible'){
                target.style.visibility = "hidden";
            }else{
                target.style.visibility = "visible";
            }
            blink(target, count);
        }else{
            target.style.visibility = "visible";
            isBlinking = false;
        }
    },20);
}
