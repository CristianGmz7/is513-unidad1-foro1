export interface IContact {
    getName(): string;
    getPhone(): string;
    getEmail(): string;
    getContactType(): string;
    getId(): number;
    setName(name: string): void;
    setPhone(phone: string): void;
    setEmail(email: string): void;
    setContactType(contactType: string): void;
    setId(id: number): void;
    displayInfo(): void;
}