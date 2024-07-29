type IAddress = {
  street: string | null;
  suite: string | null;
  city: string | null;
  zipcode: string | null;
  geo: null | { lat: string; lng: string };
};

type ICompany = {
  name: string | null;
  catchPhrase: string | null;
  bs: string | null;
};

export interface IUser {
  id: string;
  avatar: string;
  name: string;
  description: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string | null;
  website: string | null;
  social: { name: string; url: string }[];
  company: ICompany;
  followed: boolean;
}
