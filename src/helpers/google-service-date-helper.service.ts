import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GoogleServiceDateHelperService {
  formatDateForCalendar(festivalDate: string, festivalTime: string): string[] {
    let year = festivalDate.split(" ")[2];
    const month = this.getMonthFromString(festivalDate.split(" ")[1]);
    const day = festivalDate.split(" ")[0];
    let stringDate = year + "-" + month + "-" + day;
    const startTime = festivalTime.split(" - ")[0];
    const endTime = festivalTime.split(" - ")[1];
    let date = new Date(stringDate);
    // stringDate = date.toLocaleString('default', { year: "numeric", month: "2-digit", day: "2-digit" })
    stringDate = date.toISOString().split("T")[0]

    let startDate = stringDate + "T" + startTime + ":00+01:00";
    let endDate = stringDate + "T" + endTime + ":00+01:00";

    if (endTime.charAt(0) == "0") {
      let newDate = new Date(stringDate);
      newDate.setDate(newDate.getDate() + 1);
      endDate = newDate.toISOString().split("T")[0] + "T" + endTime + ":00+01:00";
    }

    return [startDate, endDate];
  }

  checkIfInPast(date: Date): boolean {
    return (date < new Date());
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
