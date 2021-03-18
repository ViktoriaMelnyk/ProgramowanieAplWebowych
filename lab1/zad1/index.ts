const personName = 'John';
document.body.innerHTML = `<h1>Hello ${personName}</h1>`

class Person {
    name: string;
    lastName:string;
    age: number;
    constructor(name:string,lastName:string,age:number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    Show(){
       document.body.innerHTML = `<p>Witaj ${this.name} i ${this.lastName} mam ${this.age} lat</p>` 
    }
}
let p = new Person("John", "Blake", 11);
p.Show();