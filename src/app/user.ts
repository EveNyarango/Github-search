export class User {
    constructor(
        public html_url: string,
        public name:string,
        public login:string,
        public avatar_url:string,
        public public_repos:number,
        public created_at:Date,
        public followers: number,
        public following: number,
        
    ){}
}
