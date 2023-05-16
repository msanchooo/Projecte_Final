import { FormGroup } from '@angular/forms';

export class Util {
  static onValueChanged(
    enSubmit: Boolean,
    frm: FormGroup,
    fErrors: any,
    valMes: any
  ) {
    for (const field in fErrors) {
      fErrors[field] = '';
      const control = frm.get(field);
      let mira = control ? control.dirty || enSubmit : false;
      if (control && mira && !control.valid) {
        const messages = valMes[field];
        for (const key in control.errors) {
          fErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}
