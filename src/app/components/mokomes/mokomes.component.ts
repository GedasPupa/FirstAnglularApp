import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-mokomes',
  templateUrl: './mokomes.component.html',
  styleUrls: ['./mokomes.component.css'],
})
export class MokomesComponent implements AfterViewInit {
  counter = 0;
  text = 'Placeholder text...';
  text2 = 'Second pl...';
  // zmogeliai: zmogelis[];

  inputChange($event: any) {
    this.text2 = $event.target.value;
  }

  incrementCounter() {
    this.counter++;
  }

  @ViewChild('rect') rect: ElementRef | undefined;

  ngAfterViewInit() {
    console.log(this.rect?.nativeElement.getBoundingClientRect());
    // for (const i of this.zmogeliai) {
    //   console.log(
    //     i.getPersonInfo
    //       ? i.getPersonInfo()
    //       : `Method getPersonInfo() doe's not exist in this (${i.vardas}) object!`
    //   );
    // }
  }
  mouseX = 0;
  mouseY = 0;
  mouseMoveHandler($event: MouseEvent) {
    console.log($event.type);
    console.log($event);
    // this.mouseX = $event.clientX;
    // this.mouseY = $event.clientY;
    this.mouseX =
      $event.clientX - this.rect?.nativeElement.getBoundingClientRect().left;
    this.mouseY =
      $event.clientY - this.rect?.nativeElement.getBoundingClientRect().top;
  }

  isMessageShown = false;
  messageTogler($event: MouseEvent) {
    this.isMessageShown = !this.isMessageShown;
  }
}
