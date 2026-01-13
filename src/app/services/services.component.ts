import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Make sure this import is present

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  // ✅ Correctly define the router here
  constructor(private router: Router) {}

  /* services = [
    {
      title: 'Website Development',
      image: 'assets/web_image.png',
      description:
        'Professional, responsive websites built using modern frameworks.',
      route: '/website-development',
    },
    {
      title: 'Mobile Development',
      image: 'assets/phone_img.png',
      description:
        'Cross-platform mobile apps that perform and scale beautifully.',
      route: '/mobile-development',
    },
    {
      title: 'Advertising',
      image: 'assets/advertising.png',
      description:
        'Effective digital marketing strategies to boost your brand reach.',
      route: '/advertising',
    },
    {
      title: 'Teaching Programming',
      image: 'assets/teaching.png',
      description:
        'Personalized coding lessons designed to turn beginners into experts.',
      route: '/teaching-programming',
    },
  ];

  // ✅ Use 'this.router' to navigate
  goToService(route: string) {
    this.router.navigate([route]);
  }*/
}
