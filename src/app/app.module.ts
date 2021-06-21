import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxPictureModule, CLOUDINARY_CONFIG } from 'ngx-picture';

import { HeaderComponent } from './commom/components/header/header.component';
import { FooterComponent } from './commom/components/footer/footer.component';
import { HomeSearchComponent } from './commom/features/home-search/home-search.component';
import { HomeNewsComponent } from './commom/features/home-news/home-news.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { PostComponent } from './pages/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeSearchComponent,
    HomeNewsComponent,
    HomeComponent,
    ContentComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgxPictureModule.forRoot(CLOUDINARY_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
