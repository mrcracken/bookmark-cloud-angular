import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteService } from './shared/note/note.service';
import { NoteListComponent } from './shared/note-list/note-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiphyService } from './shared/giphy/giphy.service';
import { NoteEditComponent } from './shared/note-edit/note-edit.component';
import { IndexComponent } from './shared/index/index.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { LoginComponent } from './ui/login/login.component';
import { SignupComponent } from './ui/signup/signup.component';
import { HomeComponent } from './ui/home/home.component';

/**
 * For all issues with Angular Material visit
 * https://github.com/tiaguinho/material-community-components/issues/42
 */

const appRoutes: Routes = [

  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  {
    path: 'note-list',
    component: NoteListComponent
  },
  {
    path: 'note-add',
    component: NoteEditComponent
  },
  {
    path: 'note-edit/:id',
    component: NoteEditComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteEditComponent,
    IndexComponent,
    LayoutComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [NoteService , GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
