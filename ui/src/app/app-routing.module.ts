import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
import { PartnersComponent } from './pages/partners/partners.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectsModule } from './pages/projects/projects.module';
import { PartnersModule } from './pages/partners/partners.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/project' },
  {
    path: 'project',
    component: ProjectsComponent,
    data: {
      breadcrumb: 'Projects'
    }
  },
  {
    path: 'project/:projectId',
    component: ProjectsComponent,
    data: {
      breadcrumb: 'XXXXXXXXXX'
    }
  },
  {
    path: 'partner',
    component: PartnersComponent,
    data: {
      breadcrumb: 'Partners'
    }
  }
];

export class CustomReuseStrategy implements RouteReuseStrategy {

  private handlers: { [key: string]: DetachedRouteHandle } = {};
  constructor() {
  }
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false; //true;
  }
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    //this.handlers[route.routeConfig.path] = handle;
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false; //!!route.routeConfig && !!this.handlers[route.routeConfig.path];
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return null;
    //if (!route.routeConfig) return null;
    //return this.handlers[route.routeConfig.path];
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    try {
      const a = future.pathFromRoot[0].firstChild.routeConfig.component.name;
      const b = curr.pathFromRoot[0].firstChild.routeConfig.component.name;
      return a === b;
    } catch (e) {
      return false;
    }
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProjectsModule,
    PartnersModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

