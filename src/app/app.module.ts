import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppComponent } from './app.component';
import { TimelineComponent } from './Components/Timeline/Timeline.component';
import { TimelineBoxComponent } from './Components/TimelineBox/TimelineBox.component';
import { MainComponent } from './Components/main/main.component';
import { EditorComponent } from './Components/Editor/Editor.component';
import { DetailsComponent } from './Components/Details/Details.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimelineBoxComponent,
    MainComponent,
    EditorComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    BootstrapGridModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
