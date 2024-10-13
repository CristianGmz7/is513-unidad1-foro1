import { Contact } from "../Entities/Contact";
import { getSavedContactsFromLSForServices } from "./localStorage";
import { promptServiceNumber } from "./promptServices";

export const searchContact = ():void => {

    let idContactToSearch: number;
    const contactsFromLS: Contact[] = getSavedContactsFromLSForServices();

    idContactToSearch = promptServiceNumber("Ingrese el id del contacto que quiere borrar");

    const contactSearched: Contact | undefined =  contactsFromLS.find(contact => (contact.getId() === idContactToSearch));

    if(contactSearched){
        contactSearched.displayInfo();
        alert('Contacto encontrado satisfactoriamente');
    }
    else{
        alert('No existe el contacto')
    }

}