// import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent implements OnInit, AfterViewInit {

//   constructor(private elRef: ElementRef, private renderer: Renderer2) { }

//   ngOnInit(): void {
//     // Lógica de inicialização do componente, se necessário
//   }

//   ngAfterViewInit(): void {
//     // Código para garantir que o JavaScript externo seja inicializado após a visualização
//     this.loadScript('assets/vendors/js/vendor.bundle.base.js');
//     this.initializeDropdownBehavior();
//   }

//   private loadScript(url: string): void {
//     const script = document.createElement('script');
//     script.src = url;
//     script.onload = () => {
//       console.log(`Script loaded: ${url}`);
//     };
//     script.onerror = () => {
//       console.error(`Script failed to load: ${url}`);
//     };
//     document.body.appendChild(script);
//   }

//   private initializeDropdownBehavior(): void {
//     const dropdowns = this.elRef.nativeElement.querySelectorAll('.nav-item[data-toggle="collapse"]');

//     dropdowns.forEach((dropdown: HTMLElement) => {
//       const collapseTarget = this.elRef.nativeElement.querySelector(`#${dropdown.getAttribute('href').substring(1)}`) as HTMLElement;

//       this.renderer.listen(dropdown, 'click', (event: Event) => {
//         event.preventDefault();
//         this.toggleDropdown(collapseTarget);
//       });

//       this.renderer.listen(collapseTarget, 'mouseleave', () => {
//         this.closeDropdown(collapseTarget);
//       });

//       this.renderer.listen('document', 'click', (event: Event) => {
//         if (!dropdown.contains(event.target as Node) && !collapseTarget.contains(event.target as Node)) {
//           this.closeDropdown(collapseTarget);
//         }
//       });
//     });
//   }

//   private toggleDropdown(element: HTMLElement): void {
//     const isVisible = element.classList.contains('show');
//     if (isVisible) {
//       this.closeDropdown(element);
//     } else {
//       this.openDropdown(element);
//     }
//   }

//   private openDropdown(element: HTMLElement): void {
//     this.renderer.addClass(element, 'show');
//   }

//   private closeDropdown(element: HTMLElement): void {
//     this.renderer.removeClass(element, 'show');
//   }
// }
import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  private activeDropdown: HTMLElement | null = null;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Lógica de inicialização do componente, se necessário
  }

  ngAfterViewInit(): void {
    // Inicializa o comportamento dos dropdowns após a visualização
    this.initializeDropdownBehavior();
  }

  private initializeDropdownBehavior(): void {
    const dropdowns = this.elRef.nativeElement.querySelectorAll('.nav-item[data-toggle="collapse"]');

    dropdowns.forEach((dropdown: HTMLElement) => {
      const targetId = dropdown.getAttribute('href')?.substring(1);
      const collapseTarget = this.elRef.nativeElement.querySelector(`#${targetId}`) as HTMLElement;

      this.renderer.listen(dropdown, 'click', (event: Event) => {
        event.preventDefault();
        this.toggleDropdown(collapseTarget);
      });
    });

    this.renderer.listen('document', 'click', (event: Event) => {
      if (this.activeDropdown && !this.activeDropdown.contains(event.target as Node)) {
        this.closeDropdown(this.activeDropdown);
      }
    });
  }

  private toggleDropdown(element: HTMLElement): void {
    const isVisible = element.classList.contains('show');
    if (isVisible) {
      this.closeDropdown(element);
    } else {
      this.openDropdown(element);
    }
  }

  private openDropdown(element: HTMLElement): void {
    if (this.activeDropdown && this.activeDropdown !== element) {
      this.closeDropdown(this.activeDropdown);
    }
    this.renderer.addClass(element, 'show');
    this.activeDropdown = element;
  }

  private closeDropdown(element: HTMLElement): void {
    this.renderer.removeClass(element, 'show');
    if (this.activeDropdown === element) {
      this.activeDropdown = null;
    }
  }
}
