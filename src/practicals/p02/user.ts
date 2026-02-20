export class User {

firstName: string = "";
lastName: string = "";
private age: number = 0;

static BIRTH_YEAR: number = 2000;

setFirstname(name: string): void {
    this.firstName = name;
  }

setLastname(name: string): void {
    this.lastName = name;
  }

setAge(age: number): void {
this.age = age;
}

getAge():number {
return this.age;
}

getFullName(): string {
return `${this.firstName} ${this.lastName}`;
}

}
