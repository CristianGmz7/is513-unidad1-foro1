import { Contact } from "../Entities/Contact";
import { PersonalContact } from "../Entities/PersonalContact";
import { ProfessionalContact } from "../Entities/ProfessionalContact";

export const setContactToLS = (contact: Contact):void => {

    const contacts = getSavedContactsFromLS();
    contacts.push(contact)

    localStorage.setItem("contacts", JSON.stringify(contacts));
}

//se utiliza en el metodo anterior
export const getSavedContactsFromLS = (): Contact[] => {

    const savedContactsJSON: string | null = localStorage.getItem("contacts");

    const recoveredContacts: Contact[] = savedContactsJSON ? JSON.parse(savedContactsJSON) : []

    return recoveredContacts;
    
}

export const setContactsToLS = (contacts: Contact[]): void => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

//se utiliza en los servicios del CRUD
export const getSavedContactsFromLSForServices = (): Contact[] => {

    const contactsJson: string | null = localStorage.getItem("contacts");

    if(contactsJson){
        const simpleContacts = JSON.parse(contactsJson);

        return simpleContacts.map((simpleContact: any) => {

            if(simpleContact.contactType === 'Contacto Personal'){
                const contact = new PersonalContact();
                contact.setId(simpleContact.id);
                contact.setName(simpleContact.name);
                contact.setPhone(simpleContact.phone);
                contact.setEmail(simpleContact.email);
                contact.setContactType(simpleContact.contactType);
                contact.setBirthday(simpleContact.birthday);
                return contact
            }

            const contact = new ProfessionalContact();
            contact.setId(simpleContact.id);
            contact.setName(simpleContact.name);
            contact.setPhone(simpleContact.phone);
            contact.setEmail(simpleContact.email);
            contact.setContactType(simpleContact.contactType);
            contact.setJobTitle(simpleContact.jobTitle);

            return contact
        })
    }

    return [];

}


export const setLastIdNumber = (lastId: number): void => {

    const newId: number = lastId + 1;
    localStorage.setItem("lastId", JSON.stringify(newId));

}

export const getLastIdNumber = (): number => {

    const idJSON: string | null = localStorage.getItem("lastId");

    const id: number = idJSON ? JSON.parse(idJSON) : 0;

    return id;

}