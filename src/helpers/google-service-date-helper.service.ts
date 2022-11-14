import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GoogleServiceDateHelperService {
  formatDateForCalendar(festivalDate: string, festivalTime: string): string[] {
    let year = festivalDate.split(" ")[2];
    const month = this.getMonthFromString(festivalDate.split(" ")[1]);
    const day = festivalDate.split(" ")[0];
    let date = year + "-" + month + "-" + day;
    const startTime = festivalTime.split(" - ")[0];
    const endTime = festivalTime.split(" - ")[1];

    if (year == undefined) {
      date = this.getNextYear(date) + "-" + month + "-" + day;
    }

    const startDate = date + "T" + startTime + ":00+01:00";
    let endDate = date + "T" + endTime + ":00+01:00";

    if (endTime.charAt(0) == "0") {
      let newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      endDate = newDate.toISOString().split("T")[0] + "T" + endTime + ":00+01:00";
    }

    return [startDate, endDate];
  }

  checkIfInPast(date: Date): boolean {
    return (date < new Date());
  }

  getNextYear(date: string): string {
    const today = new Date();
    let year = "";
    today.setHours(0, 0, 0, 0);

    if (new Date(date) < today) {
      year = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getFullYear().toString()
    }

    return year;
  }

  getMonthFromString(mon: string): string{
    if (mon == "Okt" || mon == "okt") {
      mon = "Oct"
    }

    if (mon == "Mei" || mon == "mei") {
      mon = "May"
    }

    let date = new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
    return date.toString()
  }
}
