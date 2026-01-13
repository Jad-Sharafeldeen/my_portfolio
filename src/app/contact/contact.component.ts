import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  sendMessage() {
    const serviceID = 'service_x85awnj';
    const templateID = 'template_s84xn0k';
    const publicKey = 'BLxpVLtrIoxTmh_9i';

    emailjs
      .send(serviceID, templateID, this.formData, publicKey)
      .then(() => {
        alert('Message sent successfully!');
        this.formData = { name: '', email: '', phone: '', message: '' };
      })
      .catch((error) => {
        alert('Message failed to send.');
        console.error(error);
      });
  }
}
