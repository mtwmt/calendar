import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'calendar';
  Arr = Array;
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  today = {
    year: 0,
    month: 0,
    date: 0,
    day: 0
  };
  calendar = {
    year: 0,
    month: 0,
    date: 0,
    day: 0
  };
  todos = {};
  isWriting = false;
  event = '';
  ngOnInit(): void {
    this.getToday();
  }
  private setDate(d = new Date()) {
    return {
      year: d.getFullYear(),
      month: d.getMonth(),
      date: d.getDate(),
      day: d.getDay()
    };
  }
  private getToday(): void {
    const date = new Date();
    this.calendar.year = this.today.year = date.getFullYear();
    this.calendar.month = this.today.month = date.getMonth();
    this.calendar.date = this.today.date = date.getDate();
    this.calendar.day = this.today.day = date.getDay();
  }
  private changeYear(fix: number): void {
    this.calendar.year += fix;
  }
  private changeMonth(fix: number): void {
    const month: number = this.calendar.month + fix;
    if (month < 0) {
      this.calendar.month = 11;
      this.changeYear(-1);
    } else if (month > 11) {
      this.calendar.month = 0;
      this.changeYear(1);
    } else {
      this.calendar.month = month;
    }
  }
  private calendarDay() {
    const data = [];
    let date: Date;
    const firstMonthDay = new Date(this.calendar.year, this.calendar.month, 1);
    const prevLastMonthDay = new Date(this.calendar.year, this.calendar.month, 1 - firstMonthDay.getDay());

    for (let i = 0; i < 42; i++) {
      date = new Date(prevLastMonthDay.getFullYear(), prevLastMonthDay.getMonth(), prevLastMonthDay.getDate() + i);
      data.push(this.setDate(date));
    }
    return data;
  }
  private isToday(d: number) {
    const today = this.today;
    const current = this.calendarDay()[d];
    if (today.year === current.year && today.month === current.month && today.date === current.date) {
      return true;
    }
  }
  private isMonth(d: number) {
    const calendar = this.calendar;
    const current = this.calendarDay()[d];
    if (current.month !== calendar.month) {
      return true;
    }
  }
  private addTodo(d) {
    const key: string = d.year + '/' + d.month + '/' + d.date ;

    if (!this.isWriting) {
      this.isWriting = true;
    } else {
      this.todos[key] = {};
      this.todos[key].event = '';
      this.todos[key].done = false;
      this.isWriting = false;
    }

  }
  private submit(d) {
    const key: string = d.year + '/' + d.month + '/' + d.date;
    this.todos[key] = {};
    this.todos[key].event = '';
    this.todos[key].done = false;
    this.isWriting = false;
    // const key: string = d.year + '/' + d.month + '/' + d.date ;


  }
}

