import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { ChartModule } from 'angular-highcharts';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LeafletMarkerClusterModule } from "@asymmetrik/ngx-leaflet-markercluster";
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatCardModule,
    ChartModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    LeafletModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIza7yW156uJOkQ2m9xQr04uHk'
      }),
      AgmJsMarkerClustererModule,
      LeafletMarkerClusterModule,
      HttpClientModule,
      FormsModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
