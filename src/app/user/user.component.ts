import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  text = "";
  constructor(private data:ShareService) { }

  ngOnInit(): void {
  }

  sendMessage(data:any){
  this.data.sendNotification(data.value);
  }

}
