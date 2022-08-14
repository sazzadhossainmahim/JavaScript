const Person = function(nam) {
    this.nam = nam;
    this.canTalk = true;
}

Person.prototype.greet = function() {
    if (this.canTalk) {
        console.log('Hi, I am ' + this.nam);
    } else
        console.log('i am available' + this.canTalk);

}

const Employee = function(Ename, Etitle) {
    Person.call(this, Ename);
    this.Etitle = Etitle;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


const bob = new Employee('bob', 'builder');

bob.greet();