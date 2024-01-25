export default class Modal {
    public static modals: Modal[] = [];  // массив всех экземпляров класса Modal;
    public static idCounter = 0;
    private domEL: Element;
    private isOpened:boolean = false;
    constructor(id: string){
        this.domEL = document.createElement('div');
        this.domEL.classList.add( 'dialog' );
        if (id){
            this.domEL.id = id;
        }else{
            this.domEL.id = 'default-id-' + Modal.idCounter++;
        }
        Modal.modals.push(this);
    }
    public open(template: string): void{
        if ( !this.isOpened ){
            if ( template ){
                this.domEL.innerHTML = template;
            }
            document.body.appendChild( this.domEL );
            this.isOpened = true;
        }
    };
    public remove(){
        if ( this.isOpened ){
            this.domEL.remove();
            this.isOpened = false;
        }
    };
    public static removeById(id: string | undefined): void{
        if (id){
            const el = Modal.findById(id);
            if (el){
                el.remove();
                Modal.modals = Modal.modals.filter( (modal:Modal) => modal.domEL.id !== id);
            }
        }else{
            const el = Modal.modals.pop();
            if (el){
                el.remove();
            }
        }
    }
    public static findById(id:string):(Modal | undefined){
        return Modal.modals.find( ( modal:Modal ) => modal.domEL.id === id);
    }
}