import ModalService from './services/modalService';
import Modal from './classes/modal'
import '../css/style.css';

document.getElementById('remLast').addEventListener('click',(e)=>{
    e.preventDefault();
    Modal.removeById('');
});

document.querySelectorAll('a[data-text]').forEach((el)=>el.addEventListener('click', (e)=>{
    const el = <HTMLElement>(e.target);
    e.preventDefault();
    ModalService.openModal(el.getAttribute('data-modal-id'), el.getAttribute('data-text'));
}));
document.querySelectorAll('a[data-modal-close-id]').forEach((el)=>el.addEventListener('click', (e)=>{
    const el = <HTMLElement>(e.target);
    e.preventDefault();
    ModalService.closeModal(el.getAttribute('data-modal-close-id'));
}));
console.log("Hello World!");
