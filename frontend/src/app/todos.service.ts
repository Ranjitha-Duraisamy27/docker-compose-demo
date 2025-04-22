import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private httpClient = inject(HttpClient);

  loadTodos() {
    return this.httpClient.get<Array<any>>('http://localhost:5000/todos');
  }
}
