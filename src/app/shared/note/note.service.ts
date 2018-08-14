import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public API = '//localhost:8080/api';
  public NOTE_API = this.API + '/notes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/notes');
  }

  get(id: string) {
    return this.http.get(this.NOTE_API + '/' + id);
  }

  save(note: any): Observable<any> {
    let result: Observable<Object>;
    console.log(note['href']);
    if (note['href']) {
      console.log("put");
      result = this.http.put(note.href, note);
    } else {
      console.log("post");
      result = this.http.post(this.NOTE_API, note);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
