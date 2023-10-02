import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LibrairieComponent } from "./librairie/librairie.component";
import { MusicComponent } from "./music/music.component";
import { SearchComponent } from "./search/search.component";


const routes: Routes = [
    {path: 'librairie', component: LibrairieComponent},
    {path: 'music/:musicId', component: MusicComponent},
    {path: 'search', component: SearchComponent},
    {path: '', redirectTo: 'saerch', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}