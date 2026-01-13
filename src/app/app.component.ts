import { Component } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PortfolioWebsite';
  async ngOnInit() {
    await loadSlim(tsParticles);

    await tsParticles.load({
      id: 'tsparticles',
      options: {
        background: {
          color: { value: '#000' },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
            resize: { enable: true },
          },
          modes: {
            push: { quantity: 3 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: '#00bcd4' },
          links: {
            color: '#00bcd4',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
          number: {
            value: 100,
            density: {
              enable: true,
              width: 800,
              height: 800,
            },
          },
          opacity: { value: 0.5 },
          shape: { type: 'triangle' },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      },
    });
  }
}
