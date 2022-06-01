import {Contact} from '../domains/contact.interface';
import contactQuery from '@/query/contact.query';
export default  {

   createContact(contact: Contact): void {
      try {
        const contacts: Array<Contact> = contactQuery.getContacts();
        contacts.push(contact);
        localStorage.setItem('contact', JSON.stringify(contacts))
      }
      catch(e) {
        throw new TypeError('An error happened during the save of the contact');
      }
    
  }

}