import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'nationalCode'
})
export class NationalCodePipe implements PipeTransform {
    transform(value : any, countryName : string) : string {
        if(countryName === 'USA'){
            return "+01 " + value;
        }else if (countryName === 'IND'){
            return "+91 " + value;
        }else{
            return "+92 " + value;
        }
    }
}