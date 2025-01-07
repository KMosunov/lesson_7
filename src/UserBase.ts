export class UserBase {
  name: string
  surname: string
  age: number
  signed: boolean | undefined

  constructor(name: string, surname: string, age: number) {
    this.name = name
    this.surname = surname
    this.age = age
  }
}
