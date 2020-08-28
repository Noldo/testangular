import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TextService} from '../shared/text.service';
import MediumEditor from 'medium-editor';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})

export class TextComponent implements OnInit, AfterViewInit {

  @ViewChild('media') media: ElementRef;

  constructor(public textService: TextService) {
  }

  ngAfterViewInit() {
    const edit = this.media.nativeElement;
    const editor = new MediumEditor(edit);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const data = this.textService.form.value;
    console.log(data);

    this.textService.createTextEntry(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }

}
