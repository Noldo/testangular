import {Component, OnInit} from '@angular/core';
import {TextService} from '../shared/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})

export class TextComponent implements OnInit {

  constructor(public textService: TextService) {
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
