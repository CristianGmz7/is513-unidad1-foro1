// import { Contact } from "./Entities/Contact";
// import { PersonalContact } from "./Entities/PersonalContact";
// import { ProfessionalContact } from "./Entities/ProfessionalContact";
// import { promptServiceString, promptServiceDate } from "./services/promptServices";
import { createContact } from "./services/createContact";
import { deleteContact } from "./services/deleteContact";
import { editContact } from "./services/editContact";
import { getContacts } from "./services/getContacts";
import { promptServiceNumber } from "./services/promptServices";
import { searchContact } from "./services/searchContact";

// ========== Quemando datos ===================================

// const contact = new Contact();
// contact.setName("Cristian")
// contact.setPhone("89776674")
// contact.setEmail("cristiangomez@gmail.com")
// console.log(contact.displayInfo());

// const personalContact= new PersonalContact();
// personalContact.setName("Enrique");
// personalContact.setPhone("3424421");
// personalContact.setEmail("kakroto@a.com")
// personalContact.setBirthday(new Date(1996, 6, 17))
// personalContact.setContactType('Contacto Personal')
// console.log(personalContact.displayInfo());

// const professionalContact = new ProfessionalContact;
// professionalContact.setName("Arnaldo");
// professionalContact.setPhone("87654921");
// professionalContact.setEmail("arni@g.com");
// professionalContact.setJobTitle("Ingeniero Civil");
// professionalContact.setContactType("Contacto Profesional")
// console.log(professionalContact.displayInfo());

// console.log(professionalContact);    // Prototype: Contact
// console.log(personalContact);        // prototype: Contact

// const contacts: Contact[] = []
// contacts.push(personalContact);
// contacts.push(professionalContact);

// contacts.forEach(contact => {
//     console.log(contact.displayInfo());
// })

// ============ Introduciendo datos Prompt =====================================

// const personalContact= new PersonalContact();
// const professionalContact = new ProfessionalContact;

// personalContact.setContactType('Contacto Personal')
// personalContact.setName(promptServiceString("Ingrese su nombre"));
// personalContact.setPhone(promptServiceString("Ingrese su numero de telefono"));
// personalContact.setEmail(promptServiceString("Ingrese su correo electronico"));
// personalContact.setBirthday(promptServiceDate());

// personalContact.displayInfo();

// professionalContact.setContactType('Contacto Profesional')
// professionalContact.setName(promptServiceString("Ingrese su nombre"));
// professionalContact.setPhone(promptServiceString("Ingrese su numero de telefono"));
// professionalContact.setEmail(promptServiceString("Ingrese su correo electronico"));
// professionalContact.setJobTitle(promptServiceString("Ingrese su profesion"))

// professionalContact.displayInfo();

// =============== Menu selección de agenda de contactos ====================

let opc: number = 0;

do {
    opc = promptServiceNumber(`Ingrese una opcion: 
        0. Salir 
        1. Ver contactos
        2. Buscar contacto 
        3. Crear contacto 
        4. Editar Contacto 
        5. Borrar Contacto`);

    switch (opc) {
        case 0:
            break;

        case 1:
            getContacts();
            break;

        case 2:
            searchContact();
            break;

        case 3:
            createContact();
            break;

        case 4:
            editContact();
            break;

        case 5:
            deleteContact();
            break;

        default:
            alert('Opcion no valida');
            break; 0
    }

} while (opc !== 0);