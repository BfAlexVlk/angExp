import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): string {
    return Statuses[value];
  }

}
const Statuses= [
  'Создание','Регистрация','Изменение','Удаление'
] 