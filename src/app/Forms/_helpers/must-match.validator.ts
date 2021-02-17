import { FormGroup } from '@angular/forms';

export function MustMatch(controlName:string,matchingControlName:string){
  return(formgroup:FormGroup) => {
    const ps = formgroup.controls[controlName];
    const cps = formgroup.controls[matchingControlName];

    if(cps.errors && !cps.errors.mustMatch)
    return;

    if(cps.value != ps.value)
    return cps.setErrors({mustMatch:true});

    else return cps.setErrors(null);
  }
}
