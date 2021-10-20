import {Big} from 'big.js'

export class Prestacao {
    constructor (
        public id : number,
        public categoria : string,
        public qteMatComercializado : any,
        public valor : any,
        public zona : string
    ) {
    }

    
}