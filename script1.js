class Person {
	constructor(name) {
		this.name = name
	}

	printname = (string) => {
		console.log('name from arrow ' + string + this.name)
	}

	printname1(string) {
		console.log('name from function ' + string + this.name)
	}
}

const person = new Person('BMG')

person.printname('is ')
person.printname1('is ')