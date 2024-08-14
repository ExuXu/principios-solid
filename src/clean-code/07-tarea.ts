(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvent {

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class InputElement {

        public html       : HtmlElement;
        public attributes : InputAttributes;
        public elements   : InputEvent;

        constructor(
            public value: string, public placeholder: string, public id: string
        ) {
            this.html       = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.elements   = new InputEvent()
        }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log( nameField );

})()