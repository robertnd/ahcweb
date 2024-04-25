import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchScheduleComponent } from './content/search-schedule/search-schedule.component';

const routes: Routes = [
  { path: '', component: SearchScheduleComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
