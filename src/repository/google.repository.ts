import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class GoogleRepository {
    constructor(private httpClient: HttpClient) { }

    addToCalendar(dates: string[], festivalName: string, accessToken: string): void {
        this.httpClient.post('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
            "summary": festivalName,
            "start": {
                "dateTime": dates[0],
                "timeZone": "Europe/Amsterdam"
            },
            "end": {
                "dateTime": dates[1],
                "timeZone": "Europe/Amsterdam"
            }
        },{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }}).subscribe({
            next: () => {
                alert("Successfully added to calendar!")
                return true
            },
            error: err => {return false}
        });
    }
}
