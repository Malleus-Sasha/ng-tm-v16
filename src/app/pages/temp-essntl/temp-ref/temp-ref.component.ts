import { Component, OnInit } from '@angular/core';
import { Donut } from 'src/app/admin/models/donut.model';

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

    <ng-container *ngIf="donuts.length; then card; else nothing"></ng-container>

      <ng-template #card>
        <p>[donut]="donuts[0].name"</p>
        <p>[donut]="donuts[1].name"</p>
      </ng-template>
      <ng-template #nothing>
        <p>No Donuts here...</p>
      </ng-template>
  `,
  styles: [`
    .container { display: flex }
  `]
})
export class TempRefComponent implements OnInit {
  message!: string;
  newMessage!: string;
  message1!: string;
  donuts!: any[];

  ngOnInit(): void {
    this.message = 'Message';
    this.donuts = [
      {
        id: 'y8z0As',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocoholic.',
      },
      {
        id: '3u98Kl',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: true,
        description: 'Sticky perfection.',
      },
      {
        id: 'ae098s',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel.',
      },
    ];
  }

  handleClick(event: MouseEvent) {
    console.log(event);
  }

  handleInput(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.message1 = value;
  }
}
