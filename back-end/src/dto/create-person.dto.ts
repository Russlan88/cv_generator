export class CreatePersonDto {
  nome: string;
  cognome: string;
  contatti: Contatti[];
  competenze: string[];
  descrizione: string;
  esperienze_lavorative: WorkExperience[];
}

export class Contatti {
  telefono: string;
  email: string;
  indirizzo: string;
}

export class WorkExperience {
  id: number; // or number, depending on your design
  companyName: string;
  role: string; // You can change the name or type based on your needs
  startDate: Date;
  endDate: Date;
  descrizione: string; // This is taken from your original DTO
}
