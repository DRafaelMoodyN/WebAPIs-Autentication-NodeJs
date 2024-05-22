export class loginEntity {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public token: string,
        public roles: string[],
        public img?: string,
    ) {

    }
}