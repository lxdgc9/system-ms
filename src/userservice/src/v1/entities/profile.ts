interface IProfile {
  fullName: string;
  dob: Date;
  gender: "male" | "female";
  phone: string;
  email: string;
  idCard: {
    no: string;
    place: string;
    date: Date;
  };
  address: string;
  description: string;
  salary: number;
  allowance: number;
}

export default IProfile;
