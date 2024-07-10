import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  onSubmit() {
    alert('Reservation submitted successfully!');
    
  }
  images: string[] = [
    '/assets/images/menu11 (2).jpg',
    '/assets/images/menu12 (1).jpg',
    '/assets/images/bl1 Copy.jpg',
    '/assets/images/menu11 (2).jpg',
    '/assets/images/menu12 (1).jpg',
    '/assets/images/menu11 (2).jpg',
    '/assets/images/menu11 (2).jpg',
    '/assets/images/menu12 (1).jpg',
    // Add more image paths as needed
  ];

  selectedImage: string | null = null;

  constructor(private renderer: Renderer2) {}

  openModal(image: string) {
    this.selectedImage = image;
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      this.renderer.setStyle(modalElement, 'display', 'block');
      this.renderer.addClass(modalElement, 'show');
      this.renderer.setAttribute(modalElement, 'aria-modal', 'true');
      this.renderer.setAttribute(modalElement, 'role', 'dialog');
      document.body.classList.add('modal-open');
    }
  }

  closeModal() {
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      this.renderer.setStyle(modalElement, 'display', 'none');
      this.renderer.removeClass(modalElement, 'show');
      this.renderer.removeAttribute(modalElement, 'aria-modal');
      this.renderer.removeAttribute(modalElement, 'role');
      document.body.classList.remove('modal-open');
      this.selectedImage = null;
    }
  }

}
