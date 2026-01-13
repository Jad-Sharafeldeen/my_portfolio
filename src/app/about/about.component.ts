/*import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  private glow = document.getElementById('cursor-glow');

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.glow) {
      this.glow = document.getElementById('cursor-glow');
    }
    if (!this.glow) return;

    this.glow.style.left = event.clientX + 'px';
    this.glow.style.top = event.clientY + 'px';
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    if (!this.glow) return;

    const tag = event.target as HTMLElement;

    // if (
    //   tag.tagName === 'SPAN' ||
    //   tag.tagName === 'P' ||
    //   tag.tagName === 'H1' ||
    //   tag.tagName === 'H2' ||
    //   tag.tagName === 'H3'
    // ) {
    this.glow.style.opacity = '1';
    // } else {
    //   this.glow.style.opacity = '1';
    // }
  }

  @HostListener('mouseout')
  onMouseOut() {
    if (this.glow) this.glow.style.opacity = '0';
  }
}*/

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  private glow: HTMLElement | null = null;
  private isMouseDevice = false;

  ngOnInit() {
    // Detect real mouse devices only
    this.isMouseDevice =
      window.matchMedia('(hover: hover)').matches &&
      window.matchMedia('(pointer: fine)').matches;

    if (this.isMouseDevice) {
      this.glow = document.getElementById('cursor-glow');
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isMouseDevice || !this.glow) return;

    this.glow.style.left = event.clientX + 'px';
    this.glow.style.top = event.clientY + 'px';
  }

  @HostListener('mouseover')
  onMouseOver() {
    if (!this.isMouseDevice || !this.glow) return;

    this.glow.style.opacity = '1';
  }

  @HostListener('mouseout')
  onMouseOut() {
    if (!this.isMouseDevice || !this.glow) return;

    this.glow.style.opacity = '0';
  }
}
