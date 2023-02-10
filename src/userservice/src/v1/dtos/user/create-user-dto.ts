type CreateUserDto = {
  username: string;
  password: string;
  fullName: string;
  dob: Date;
  gender: string;
  phone: string;
  email: string;
  noIdCard: string;
  placeIdCard: string;
  dateIdCard: Date;
  address: string;
  description: string;
  salary: number;
  allowance: number;
};

export default CreateUserDto;
