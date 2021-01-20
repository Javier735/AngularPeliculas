import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {
  @Input()
  contenidoMarkdown='';

  @Output()
  changeMarkdown:EventEmitter<string>=new EventEmitter<string>();
  @Input()
  placeHolderTextarea: string ='texto';

  constructor() { }

  ngOnInit(): void {
  }

  // inputTextArea(texto:string){
  //   this.contenidoMarkdown=texto;
  //   this.changeMarkdown.emit(texto);
  // }

}
