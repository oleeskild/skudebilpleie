import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(date: Date, args?: any): any {
    let hour: string = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()).toString();
    let minutes: string = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()).toString();
    return `${hour}:${minutes}`;
  }

}
