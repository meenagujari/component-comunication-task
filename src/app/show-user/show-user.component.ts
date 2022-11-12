import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
text = '';
  constructor(private data:ShareService) { }

  ngOnInit(): void {
    this.data.notificationSubject.subscribe(x => {
      this.text = x
    });

  }

}
