export class Product{
    
    constructor(
        public name: string,
        public description: string,
        public category: string,
        public price: number,
        public stock: number,
        public image: string, 
    ) {}
}