import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit, OnDestroy {
  websiteProjects = [
    {
      image: 'assets/advertising.png',
      title: 'Portfolio Website',
      link: 'https://example1.com',
      buttonText: 'View Website',
    },
    {
      image: 'assets/teaching.png',
      title: 'E-commerce Platform',
      link: 'https://example2.com',
      buttonText: 'View Website',
    },
  ];

  adProjects = [
    {
      image: 'assets/advertising.png',
      title: 'Social Media Campaign',
      link: 'https://examplead1.com',
      buttonText: 'View Video',
    },
    {
      image: 'assets/teaching.png',
      title: 'Product Launch Ad',
      link: 'https://examplead2.com',
      buttonText: 'View Video',
    },
    {
      image: 'assets/web_image.png',
      title: 'Brand Awareness Video',
      link: 'https://examplead3.com',
      buttonText: 'View Video',
    },
  ];

  // carousel tracking
  currentWebsiteIndex = 1;
  currentAdIndex = 1;

  private websiteTimer?: any;
  private adTimer?: any;
  autoSlideMs = 4000;

  ngOnInit(): void {
    // Clone first and last slides for infinite loop illusion
    this.websiteProjects = [
      this.websiteProjects[this.websiteProjects.length - 1],
      ...this.websiteProjects,
      this.websiteProjects[0],
    ];

    this.adProjects = [
      this.adProjects[this.adProjects.length - 1],
      ...this.adProjects,
      this.adProjects[0],
    ];

    this.startWebsiteAuto();
    this.startAdAuto();
  }

  ngOnDestroy(): void {
    this.clearWebsiteTimer();
    this.clearAdTimer();
  }

  // ===== Websites Carousel =====
  startWebsiteAuto() {
    this.clearWebsiteTimer();
    this.websiteTimer = setInterval(() => this.nextWebsite(), this.autoSlideMs);
  }

  pauseWebsiteAuto() {
    this.clearWebsiteTimer();
  }

  clearWebsiteTimer() {
    if (this.websiteTimer) clearInterval(this.websiteTimer);
  }

  nextWebsite() {
    this.currentWebsiteIndex++;
    if (this.currentWebsiteIndex >= this.websiteProjects.length - 1) {
      setTimeout(() => {
        this.currentWebsiteIndex = 1;
      }, 600); // matches transition duration
    }
  }

  prevWebsite() {
    this.currentWebsiteIndex--;
    if (this.currentWebsiteIndex <= 0) {
      setTimeout(() => {
        this.currentWebsiteIndex = this.websiteProjects.length - 2;
      }, 600);
    }
  }

  // ===== Ads Carousel =====
  startAdAuto() {
    this.clearAdTimer();
    this.adTimer = setInterval(() => this.nextAd(), this.autoSlideMs);
  }

  pauseAdAuto() {
    this.clearAdTimer();
  }

  clearAdTimer() {
    if (this.adTimer) clearInterval(this.adTimer);
  }

  nextAd() {
    this.currentAdIndex++;
    if (this.currentAdIndex >= this.adProjects.length - 1) {
      setTimeout(() => {
        this.currentAdIndex = 1;
      }, 600);
    }
  }

  prevAd() {
    this.currentAdIndex--;
    if (this.currentAdIndex <= 0) {
      setTimeout(() => {
        this.currentAdIndex = this.adProjects.length - 2;
      }, 600);
    }
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
