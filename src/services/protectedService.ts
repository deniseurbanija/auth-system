import contactDto from "../dtos/contactDto";
import Contact from "../models/Contact";
import User from "../models/User";

export const privateService = () => {
  return "Esto es privadoooo";
};

export const addContact = async (contactData: contactDto) => {
  const newContact = Contact.create({
    name: contactData.name,
    lastname: contactData.lastname,
    phoneNumber: contactData.phoneNumber,
  });
};
