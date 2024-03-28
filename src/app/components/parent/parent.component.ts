import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  isChildDestroyed = false;
  userName = "Maria";
  ngOnInit(): void {
    console.log('ngOnInit from the parent component');
  }
  updateUser() {
    this.userName = 'Chris';
  };
  destroy() {
     this.isChildDestroyed = true;
  }
}
