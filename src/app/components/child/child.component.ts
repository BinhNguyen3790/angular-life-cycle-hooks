import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges, AfterContentInit, OnDestroy {
  @Input() userName = "";
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng onchange', changes);
    if (!changes['userName'].isFirstChange()){
      if (changes['userName'].currentValue === "Chris") {
        this.userName = 'Hello ' + this.userName
      }
      else {
        this.userName = changes['userName'].previousValue
      }
    }
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - contentWrapper', this.content);
  }
  
  ngOnDestroy(): void {
    console.log('Child component is destroyed! :(');
  }
}
