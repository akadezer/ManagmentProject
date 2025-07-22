import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent {
  onAddTicket(ticketData: { title: string; text: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };
    this.tickets.push(newTicket);
  }
  tickets: Ticket[] = [];

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
