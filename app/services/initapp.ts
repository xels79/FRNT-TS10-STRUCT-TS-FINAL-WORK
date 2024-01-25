import {ITours} from "../models/tours/itours";
import {getTourTemplate} from "../templates/tours";
import {openModal} from "@services/modal/modalService";
export function initToursDivElements(data: ITours[]) {

    if (Array.isArray(data)) {
        const rootElement: Element = document.querySelector('.main-app');
        const tourWrap = document.createElement('div');

        tourWrap.classList.add('tour-wrap');

        // init click for modal
        initTourElemListener(tourWrap);

        let rootElementData = '';
        data.forEach((el, i) => {
        rootElementData += getTourTemplate(el, i);
        });

        tourWrap.innerHTML = rootElementData;
        rootElement.appendChild(tourWrap) ;
    }
}

function initTourElemListener(tourWrap: HTMLElement) {
    tourWrap.addEventListener('click', (ev:PointerEvent) => {
    const targetItem = <HTMLElement>ev.target;
    const parentItem = <HTMLElement>targetItem?.parentNode;
    let realTarget;

    if (targetItem.hasAttribute('data-tour-item-index')) {
    realTarget = targetItem;
    } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
    realTarget = parentItem;
    }

    if (realTarget) {
    const dataIndex = realTarget.getAttribute('data-tour-item-index');
    openModal('order', Number(dataIndex));
    }
    });
}