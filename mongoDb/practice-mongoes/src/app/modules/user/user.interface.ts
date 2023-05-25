// creating Interface
export interface IUser {
    id: number;
    role: 'student';
    name: {
      firstName: string;
      middleName?: string;
      lastName: string
    };
    email: string;
    gender: "Male" | "Female";
    address: string;
    phone?: string
  }