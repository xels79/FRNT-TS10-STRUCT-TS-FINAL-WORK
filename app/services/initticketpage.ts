import {IUser} from '@models/user/iuser';
import {initTicketElementTemplate} from "../templates/ticketInfo";
import {IVipTicket, TicketType, ITicket} from "@models/tickets/iticket";
import {postTicketData} from "@rest/tickets";
let ticketPostInstance:any;

export function initTicketInfo(ticket: TicketType | IVipTicket) {
    const targetElement = document.querySelector('.ticket-info');

    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    let vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }


    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate: string;

    ticketElemsArr.forEach((el: string, i: number) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}
type IUserIndex = 'name' | 'cardNumber' | 'birthDate';
function initUserData():IUser {
    const userInfo = document.querySelectorAll('.user-info > p');
    let userInfoObj:IUser = <IUser>{};
    
    userInfo.forEach((el) => {
        const inputDataName:keyof IUser = <keyof IUser>el.getAttribute('data-name');
        if (inputDataName) {
            const inputElems = el.querySelector('input');
            if (inputDataName === 'birthDate'){
                userInfoObj.birthDate = new Date(inputElems.value);
            }else{
                userInfoObj[inputDataName] = inputElems.value;
            }
        }
    });

    console.log('userInfoObj',userInfoObj)
    return <IUser>userInfoObj;
}

function initPostData(data:any) {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {

        }
    })
}

export function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}
