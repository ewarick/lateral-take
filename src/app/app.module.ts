import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { BranchComponent } from './branch/branch.component';
import { LeafComponent } from './leaf/leaf.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    BranchComponent,
    LeafComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
