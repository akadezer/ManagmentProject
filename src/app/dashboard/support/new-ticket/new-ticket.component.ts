import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControllComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControllComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<{ title: string; text: string }>();
  request = '';
  title = '';

  onSubmit() {
    this.add.emit({ title: this.title, text: this.request });
    // console.log('New ticket submitted: ' + this.title);
    // this.form?.nativeElement.reset();
    this.request = '';
    this.title = '';
  }
}
