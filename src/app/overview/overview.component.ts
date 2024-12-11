import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  images = [
    'images/overview/1-overview.jpg',
    'images/overview/2-overview.jpg',
    'images/overview/3-overview.jpg',
    'images/overview/4-overview.jpg', 
  ];
  isPreviewOpen = false;
  selectedImageIndex = 0;
  openPreview(index: number): void {
    this.selectedImageIndex = index;
    this.isPreviewOpen = true;
  }
  closePreview(): void {
    this.isPreviewOpen = false;
  }
}
