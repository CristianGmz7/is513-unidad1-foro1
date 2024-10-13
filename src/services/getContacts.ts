import { Contact } from "../Entities/Contact";
import { getSavedContactsFromLSForServices } from "./localStorage";
import { promptServiceNumber } from "./promptServices";

export const getContacts = (): void => {

    let opc: number = 0;

    do {
        opc = promptServiceNumber(`Que contactos quiere ver: 
            0. Retroceder 
            1. Todos 
            2. Contactos Personales
            3. Contactos Profesionales`)

        const contactsFromLS: Contact[] = getSavedContactsFromLSForServices(); 

        switch (opc) {
            case 0:
                break;

            case 1:
                contactsFromLS.forEach(contact => contact.displayInfo());
                alert('Contactos listados satisfactoriamente');
                return;

            case 2:
                const personalContacts = contactsFromLS.filter(contact => contact.getContactType() === 'Contacto Personal');
                personalContacts.forEach(contact => contact.displayInfo());
                alert('Contactos listados satisfactoriamente');
                return;

            case 3:
                const professionalContact = contactsFromLS.filter(contact => contact.getContactType() === 'Contacto Profesional');
                professionalContact.forEach(contact => contact.displayInfo());
                alert('Contactos listados satisfactoriamente');
                return;

            default:
                alert('Opcion no valida');
                break;
        }

    } while (opc !== 0);
}
