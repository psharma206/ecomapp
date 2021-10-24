import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { RecordsignatureComponent } from './recordsignature/recordsignature.component';

const routes: Routes = [{ path: '', redirectTo: 'attendance', pathMatch: 'full' },
{ path: 'attendance', component: AttendanceComponent },
{ path: 'attendance/esignature/:id', component: RecordsignatureComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
