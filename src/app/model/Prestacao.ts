export class Prestacao {
    constructor (
        public id : number,
        public categoria : string,
        public quantidadeMaterialComercializado : number,
        public valor : number,
        public zona : string,
        public valorMinimo : number,
        public valorMaximo : number,
        public valorMedio : number
    ) {}
}