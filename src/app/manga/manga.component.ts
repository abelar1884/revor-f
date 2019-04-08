import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.sass']
})
export class MangaComponent implements OnInit {

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased: any) {
    this.onChanged.emit(increased);
  }

  constructor() { }

  ngOnInit() {
  }

}
