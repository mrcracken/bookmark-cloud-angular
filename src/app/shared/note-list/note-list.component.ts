import { Component, OnInit } from '@angular/core';

import { NoteService } from '../note/note.service';
import { GiphyService } from '../giphy/giphy.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Array<any>;

  constructor(private noteService: NoteService , private giphyService: GiphyService) { }

  ngOnInit() {
    this.noteService.getAll().subscribe(data => {
      this.notes = data;
      for (const note of this.notes) {
        this.giphyService.get(note.title).subscribe(url => note.giphyUrl = url);
      }
    });
  }
}
