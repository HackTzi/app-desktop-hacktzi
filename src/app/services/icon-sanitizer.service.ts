import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Svg } from '../shared/interfaces/svg.interface';
@Injectable({
  providedIn: 'root'
})
/**
  * Service to register and display icons used by `<mat-icon>` component or another components.
  * - Registers icon set URLs by namespace.
  * - Registers aliases for CSS classes, for use with icon fonts.
  * - Loads icons from URLs and extracts individual icons from icon sets.
*/
export class IconSanitizerService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) { }

  setSvgIcons(svg: Svg[]) {
    svg.forEach(s => {
      this.iconRegistry.addSvgIcon(s.iconName, this.sanitizer.bypassSecurityTrustResourceUrl(s.url));
    });
  }
}
