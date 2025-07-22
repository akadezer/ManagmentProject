import { Component, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControllComponent {
  @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  label = input.required<string>();

  
}
