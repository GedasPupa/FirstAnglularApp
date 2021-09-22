import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

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

//// DĖSTYTOJO:
// import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
// app.component.ts
// @Component({
//   selector: 'app-root',
//   // templateUrl: './app.component.html',
//   // styleUrls: ['./app.component.css']
//   template: `
//     <app-header></app-header>
//     <div class="container">
//       <p style="background-color: red; width: {{ counter * 2 + counter2 }}px">Hello world</p>
//       <button>Hi ---</button>
//       <pre>[ vardas: "Jonas" ]</pre>

//       <!-- (String) Interpolation -->
//       <p>{{ title }}</p>
//       <p>{{ subtitle }}</p>
//       <p>{{ subtitle + ' ' + title }}</p>
//       <p>2 + 2 = {{ 2 + 2 }}</p>
//       <p>firstNumber + secondNumber = {{ firstNumber + getSecondNumber() }}</p>

//       <hr />
//       <p>Example with incrementation button</p>
//       <p>{{ counter }}</p>
//       <p>{{ counter2 }}</p>
//       <p>{{ counter + counter2 }}</p>
//       <!-- <button (click)="counter = counter + 1">Click me!</button> -->
//       <button class="btn btn-warning" (click)="clickHandler($event)">Click me!</button>
//       <button class="btn btn-warning" (click)="clickHandler2($event)">Click me2!</button>

//       <br>
//       <a href="https://blog.mindaugas.cf">This will not be red!</a>

//       <br>
//       <div>Mouse x: {{ mouseX }} mouse y: {{ mouseY }}</div>
//       <div #rect (mousemove)="mouseMoveHandler($event)" style="height: 200px; width: 200px; background-color: red"></div>
//       <br>

//     <div>
//   `,
//   styles: [
//     'p {color: salmon;} ',
//     'button { background-color: white; }'],
// })
// export class AppComponent implements AfterViewInit {
//   title = 'FirstBitAngularApp';
//   subtitle = 'This is an amazing application';
//   firstNumber = 5;
//   secondNumber = 10;

//   // Ref: https://stackoverflow.com/questions/48226868/document-getelementbyid-replacement-in-angular4-typescript/48226955
//   @ViewChild('rect') rect: ElementRef | undefined;
//   ngAfterViewInit() {
//     // console.log(this.rect?.nativeElement.getBoundingClientRect());
//   }

//   getSecondNumber() {
//     return this.secondNumber;
//   }

//   counter = 0;
//   clickHandler($event: MouseEvent) {
//     console.log(" >>> " + this.counter);
//     this.counter++;
//   }

//   counter2 = 0;
//   clickHandler2($event: MouseEvent) {
//     console.log(" >>> " + this.counter2);
//     --this.counter2;
//   }

//   mouseX = 0;
//   mouseY = 0;
//   mouseMoveHandler($event: MouseEvent) {
//     // console.log($event.target);
//     // console.log($event.type);
//     // console.log($event.target);
//     // console.log($event.x);
//     // console.log($event.y);
//     // console.log($event.target);

//     // https://stackoverflow.com/questions/3234256/find-mouse-position-relative-to-element
//     this.mouseX = $event.clientX - this.rect?.nativeElement.getBoundingClientRect().left;
//     this.mouseY = $event.clientY - this.rect?.nativeElement.getBoundingClientRect().top;
//   }
// }
