import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(items: any, ...arg: any): any {
    let Data = [];
    if (arg[0] && arg[2]) {
      console.log("AQUI_ :)", arg)
      for (const item of arg[2]) {
        if (item[arg[1]]?.indexOf(arg[0]) > -1) {
          Data.push(item);
        }
      }
    } else {
      Data = items;
      return Data;
    }
    console.log(Data, ":o la data esta vacia ");
    return Data;

  }
}
