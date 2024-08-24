import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private renderer: Renderer2;
  private activeDropdown: HTMLElement | null = null;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public toggleDropdown(element: HTMLElement): void {
    const isVisible = element.classList.contains('show');
    if (isVisible) {
      this.closeDropdown(element);
    } else {
      this.openDropdown(element);
    }
  }

  public openDropdown(element: HTMLElement): void {
    if (this.activeDropdown && this.activeDropdown !== element) {
      this.closeDropdown(this.activeDropdown);
    }
    this.renderer.addClass(element, 'show');
    this.activeDropdown = element;
  }

  public closeDropdown(element: HTMLElement): void {
    this.renderer.removeClass(element, 'show');
    if (this.activeDropdown === element) {
      this.activeDropdown = null;
    }
  }
}
