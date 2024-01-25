// import Modal from "@classes/modal";
// export class ModalService{
//     public static openModal(id:string,content:string):void{
//         if (!Modal.findById(id)){
//             new Modal(id).open(`<p>${content}</p>`);
//         }else{
//             console.warn(`Диалог с id="${id}" - уже создан.`);
//         }
//     }
//     public static closeModal(id: string):void{
//         Modal.removeById(id);
//     };
// }