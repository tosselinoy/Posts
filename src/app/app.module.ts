import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SearchFilterPipe } from 'src/app/pipe-filter/search-filter.pipe';
// import { HighlightDirective } from 'src/highlight.directive';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
];

@NgModule({
  declarations: [AppComponent, PostsComponent, PostComponent, SearchFilterPipe],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MeterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
