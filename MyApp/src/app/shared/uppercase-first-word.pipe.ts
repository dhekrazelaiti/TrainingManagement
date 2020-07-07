import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'uppercaseFirstWords'
})

export class UppercaseFirstWord implements PipeTransform {

 transform(value: string): string {


     return this.capitalLetter(value);

 }


 capitalLetter(str)
{
    str = str.split(" ");


    var second =  str.slice(-2)[0].toUpperCase();

    for (let i = 1, x = str.length; i < x; i++) {

        str[i] = str[i][0].toUpperCase() + str[i].substr(1);


        var tmp = str[i];


    }

    return  second + " " + tmp;
}

}
