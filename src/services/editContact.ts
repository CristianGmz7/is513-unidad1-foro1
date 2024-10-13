import { Contact } from "../Entities/Contact";
import { PersonalContact } from "../Entities/PersonalContact";
import { ProfessionalContact } from "../Entities/ProfessionalContact";
import { getSavedContactsFromLSForServices, setContactsToLS } from "./localStorage";
import { promptServiceString, promptServiceNumber, promptServiceDate } from "./promptServices";

export const editContact = (): void => {

    let idContactToEdit: number;
    let contactsFromLS: Contact[] = getSavedContactsFromLSForServices();  //objetos Contact

    idContactToEdit = promptServiceNumber("Ingrese el id del contacto que quiere editar");

    const contactToEdit: Contact | undefined = contactsFromLS.find(contact => (contact.getId() === idContactToEdit));

    if(contactToEdit){

        contactToEdit.setName(promptServiceString("Ingrese su nombre")); console.log(contactToEdit.getName());
        contactToEdit.setPhone(promptServiceString("Ingrese su numero de telefono")); console.log(contactToEdit.getPhone());
        contactToEdit.setEmail(promptServiceString("Ingrese su correo electronico")); console.log(contactToEdit.getEmail());

        if(contactToEdit instanceof PersonalContact) {
            contactToEdit.setBirthday(promptServiceDate()); console.log(contactToEdit.getBirthday());
        }
        else if (contactToEdit instanceof ProfessionalContact){
            contactToEdit.setJobTitle(promptServiceString("Ingrese su profesion")); console.log(contactToEdit.getJobTitle());
        }

        for (let i = 0; i < contactsFromLS.length; i++) {
            
            if(contactsFromLS[i].getId() === contactToEdit.getId()){
                contactsFromLS[i] = contactToEdit;
            }
            
        }

        setContactsToLS(contactsFromLS);
        alert('Contacto editado satisfactoriamente')

    }
    else{
        alert('No existe el contacto')
    }


}