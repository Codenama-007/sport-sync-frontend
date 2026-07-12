export interface FormData {
  username: string;
  fullname: string;
  bio: string;
  age: string;
  address: string;
  sport: string;
  level: string;
  email: string;
  password: string;
}

export interface StepProps {
  step: number;
  update_step: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}