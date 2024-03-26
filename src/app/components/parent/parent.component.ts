import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
   isChildDestroyed = false;
  userName = "Maria";
  updateUser() {
    this.userName = 'Chris';
  };
  destroy() {
     this.isChildDestroyed = true;
  }
}
