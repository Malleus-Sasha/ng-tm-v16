import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref',
  template: `
    <p>
      <input [value]="message" (input)="newMessage = messageInput.value" #messageInput>
      <span>{{ messageInput.value }}</span>
      :
      <span (click)="handleClick($event)">{{ newMessage }}</span>
    </p>
    <p>
      <input (input)="handleInput($event)" #messageInput1  type="text" placeholder="Text...">
      <span #messSpan>{{ message1 }}</span>
      <span>[ {{ messSpan.innerText }} ]</span>
      ::
      <span>{{ messageInput1.value }}</span>
    </p>    
  `,
  styles: [`
    .container { display: flex }
  `]
})
export class TempRefComponent implements OnInit {
  message!: string;
  newMessage!: string;
  message1!: string;

  ngOnInit(): void {
    this.message = 'Message';
  }

  handleClick(event: MouseEvent) {
    console.log(event);
  }

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.message1 = value;
  }
}
