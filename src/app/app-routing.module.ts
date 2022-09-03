import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "./face-snaps/face-snap-list/face-snap-list.component";
import {LandingPageComponent} from "./landing-page/components/landing-page/landing-page.component";
import { NewFaceSnapComponent } from "./face-snaps/new-face-snap/new-face-snap.component";
import {SingleFaceSnapComponent} from "./face-snaps/single-face-snap/single-face-snap.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'facesnaps', component: FaceSnapListComponent},
  {path: 'facesnaps/:id', component: SingleFaceSnapComponent},
  {path: 'create', component: NewFaceSnapComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
