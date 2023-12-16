/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
class Client  {
    #login;
    #email;
    constructor(login, email){
        this.#login = login; 
        this.#email = email; 
        
    }
    get clientDate (){
        return {login: this.#login, email:this.#email};
    }
    set clientDate({login, email}) {
        this.#login = login;
        this.#email = email;
    }
   
}

const client = new Client("mango", "mango@gmail.com");
console.log(client.clientDate);
console.log(client.clientDate = {login: 'test', email: 'test@com'});
console.log(client.clientDate);