
type UUID = number;

type ImageUrl = string;
type PhoneNumber = string;
type EmailAddress = string;

export interface Address {
  street: string;
  city: string;
  location: {
    lat: number;
    lng: number;
  }
}

export interface User {
  id: UUID;
  partnerId: UUID;
  name: string;
  title: string;
  avatar: ImageUrl;
  phone: PhoneNumber;
  email: EmailAddress;
}

export interface Project {
  id: UUID;
  name: string;
  description: string;
  thumbnail: ImageUrl;
  address: Address;
}
export interface Partner {
  id: UUID;
  name: string;
  line: string;
  thumbnail: ImageUrl;
  address: Address;
}


export interface Participant {
  id: UUID;
  projectId: UUID;
  partnerId: UUID;
  line: string;
}
