export class Users {
    id!:number;
    Name!:string;
    Password!:string;
    MothersName!:string;
    phone!:string;
    Address!:string;
    constructor(id:number,Name:string,Password:string,phone:string,Address:string,mothersName:string){
        this.id=id;
        this.Name=Name;
        this.Password=Password;
        this.phone=phone;
        this.Address=Address;
        this.MothersName=mothersName;
    }
}
