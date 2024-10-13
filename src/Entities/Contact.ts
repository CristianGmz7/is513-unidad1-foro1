import { IContact } from "../Interfaces/IContact";

export class Contact implements IContact {

    private id: number;
    private contactType: string
    private name: string;
    private phone: string;
    private email: string;

    constructor(){
        this.id = 0;
        this.contactType = ''
        this.name = '';
        this.phone = '';
        this.email = '';
    }

    setName(name: string): void{
        this.name = name
    }
    getName(): string {
        return this.name
    }
    setPhone(phone: string): void {
        this.phone = phone;
    }
    getPhone(): string {
        return this.phone;
    }
    setEmail(email: string): void {
        this.email = email;
    }
    getEmail(): string {
        return this.email;
    }
    setContactType(contactType: string): void {
        this.contactType = contactType
    }
    getContactType(): string {
        return this.contactType
    }
    setId(id: number): void {
        this.id = id;
    }
    getId(): number {
        return this.id;
    }
    displayInfo(): void {
        console.log(`Tipo de contacto: ${this.contactType}`);
        console.log(`Nombre: ${this.name}, Telefono: ${this.phone}, Email: ${this.email}`);
        
    }

}