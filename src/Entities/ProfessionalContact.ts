import { IProfessionalContact } from "../Interfaces/IProfessionalContact";
import { Contact } from "./Contact";

export class ProfessionalContact extends Contact implements IProfessionalContact{

    private jobTitle: string;

    constructor(){
        super();
        this.jobTitle = '';
    }

    getJobTitle(): string {
        return this.jobTitle;
    }
    setJobTitle(jobTitle: string): void {
        this.jobTitle = jobTitle;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Profesion: ${this.jobTitle}`);
        console.log('-----------------------------------------------------');
    }
}