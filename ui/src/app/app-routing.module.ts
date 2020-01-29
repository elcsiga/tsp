import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersComponent } from './pages/partners/partners.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectsModule } from './pages/projects/projects.module';
import { PartnersModule } from './pages/partners/partners.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/projects' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'partners', component: PartnersComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProjectsModule,
    PartnersModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
