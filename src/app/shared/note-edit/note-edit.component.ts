import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note/note.service';
import { GiphyService } from '../giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit, OnDestroy {

public NOTE_API_URL = '//localhost:8080/api/notes/';

  note: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private noteService: NoteService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      if (id) {
        this.noteService.get(id).subscribe((note: any) => {
          if (note) {
            this.note = note;
            this.note.href = this.NOTE_API_URL + id;
            this.giphyService.get(note.title).subscribe(url => note.giphyUrl = url);
          } else {
            console.log(`Note with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/note-list']);
  }

  save(form: NgForm) {
    console.log("save works!");
    this.noteService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.noteService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
