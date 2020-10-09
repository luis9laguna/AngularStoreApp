export class User{

    constructor(
        public name: string,
        public email: string,
        public uid?: string,
        public role?: any,
        public google?: boolean,
        public password?: string,
    ) {}

    getuser(){
        console.log(this.name);
        
    }
}