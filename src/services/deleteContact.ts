import { Contact } from "../Entities/Contact";
import { getSavedContactsFromLSForServices, setContactsToLS } from "./localStorage";
import { promptServiceNumber } from "./promptServices";

export const deleteContact = ():void => {

    let idContactToDelete: number;
    let contactsFromLS: Contact[] = getSavedContactsFromLSForServices();

    idContactToDelete = promptServiceNumber("Ingrese el id del contacto que quiere borrar");

    const contactToDelete: Contact | undefined =  contactsFromLS.find(contact => (contact.getId() === idContactToDelete));

    if(contactToDelete){
        const newContactsToLS = contactsFromLS.filter(contact => (contact.getId() !== contactToDelete.getId()));
        setContactsToLS(newContactsToLS);

        alert('Contacto eliminado satisfactoriamente');
    }
    else{
        alert('No existe el contacto');
    }
}