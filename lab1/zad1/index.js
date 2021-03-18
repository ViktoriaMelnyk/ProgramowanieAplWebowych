var personName = 'John';
document.body.innerHTML = "<h1>Hello " + personName + "</h1>";
var Person = /** @class */ (function () {
    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.Show = function () {
        document.body.innerHTML = "<p>Witaj " + this.name + " i " + this.lastName + " mam " + this.age + " lat</p>";
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.Show();
