export class Persona{

    public name:string;
    public direccion?:string

    public constructor(){
        this.name="Juan Jose"
    }

}

export class Persona2{

    public constructor(
        public name:string,
        public direccion?:string
    ){
        
    }

}



export class Profesor2{

    public constructor(
        public escalafon:number,
        public persona:Persona2
        ){

        
        
    }

}

