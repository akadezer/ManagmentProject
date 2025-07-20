import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControllComponent } from "../../../shared/controll/controll.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControllComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {}
