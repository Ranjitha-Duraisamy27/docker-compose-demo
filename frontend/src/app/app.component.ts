import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  todosService = inject(TodosService);
  todos: Array<any> = [];

  ngOnInit() {
    this.todosService.loadTodos().subscribe({
      next: (res) => {
        this.todos = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
