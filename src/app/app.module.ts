import { Routes, RouterModule } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsModule } from './posts/posts.module';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: '', loadChildren: './posts/posts.module#PostsModule' }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AppRoutingModule,
    AngularFireAuthModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    PostsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
