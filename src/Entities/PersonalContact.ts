import { IPersonalContact } from "../Interfaces/IPersonalContact";
import { Contact } from "./Contact";

export class PersonalContact extends Contact implements IPersonalContact  {

    private birthday: Date

    constructor(){
        super();
        this.birthday = new Date(2024, 10, 13)
    }

    getBirthday(): Date {
        return this.birthday
    }
    setBirthday(birthday: Date): void {
        this.birthday = birthday
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Cumpleaños: ${this.birthday}`);
        console.log('-----------------------------------------------------');
        
    }


}