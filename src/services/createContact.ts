import { PersonalContact } from "../Entities/PersonalContact";
import { ProfessionalContact } from "../Entities/ProfessionalContact";
import { getLastIdNumber, setContactToLS, setLastIdNumber } from "./localStorage";
import { promptServiceNumber, promptServiceString, promptServiceDate } from "./promptServices";

export const createContact = (): void => {

    let opc: number = 0;

    do {
        opc = promptServiceNumber(`Tipo de contacto: 
        0. Retroceder 
        1. Contacto Personal 
        2. Contacto Profesional`)

        switch (opc) {
            case 0:
                break;

            case 1:
                const contactPe = new PersonalContact();
                contactPe.setId(getLastIdNumber());
                contactPe.setContactType('Contacto Personal')
                contactPe.setName(promptServiceString("Ingrese su nombre")); console.log(contactPe.getName())
                contactPe.setPhone(promptServiceString("Ingrese su numero de telefono")); console.log(contactPe.getPhone())
                contactPe.setEmail(promptServiceString("Ingrese su correo electronico")); console.log(contactPe.getEmail())
                contactPe.setBirthday(promptServiceDate()); console.log(contactPe.getBirthday());

                setContactToLS(contactPe);
                setLastIdNumber(contactPe.getId());

                alert('Contacto Personal creado satisfactoriamente');

                return;

            case 2:
                const contactPr = new ProfessionalContact();
                contactPr.setContactType('Contacto Profesional');
                contactPr.setId(getLastIdNumber());
                contactPr.setName(promptServiceString("Ingrese su nombre")); console.log(contactPr.getName());
                contactPr.setPhone(promptServiceString("Ingrese su numero de telefono")); console.log(contactPr.getPhone());
                contactPr.setEmail(promptServiceString("Ingrese su correo electronico")); console.log(contactPr.getEmail());
                contactPr.setJobTitle(promptServiceString("Ingrese su profesion")); console.log(contactPr.getJobTitle());

                setContactToLS(contactPr);
                setLastIdNumber(contactPr.getId());

                alert('Contacto Profesional creado satisfactoriamente');

                return;

            default:
                alert('Opcion no valida');
                break;
        }

    } while (opc !== 0);
}