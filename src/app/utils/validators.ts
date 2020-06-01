import { AbstractControl } from '@angular/forms';

export class MyValidators {

    static isPriceValid(abstractControl: AbstractControl) {
        const price = abstractControl.value;
        console.log(price);
        if (price > 10000) {
            return {
                isPriceInvalid: true
            };
            return null;
        }
    }

}
