export class Product{
    
    constructor(
        public name: string,
        public category: string,
        public description: string,
        public price: number,
        public stock: number,
        public image: string,
        public uid: string 
    ) {}
}