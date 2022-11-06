import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments);
  }

  getCommentById(id: number): Observable<IComment> {
    return this.httpClient.get<IComment>(`${urls.comments}/${id}`)
  }
}
