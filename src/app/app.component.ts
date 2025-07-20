import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { StatusComponent } from "./dashboard/status/status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { SupportComponent } from "./dashboard/support/support.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, StatusComponent, TrafficComponent, SupportComponent, DashboardItemComponent],
})
export class AppComponent {
  
  
}
