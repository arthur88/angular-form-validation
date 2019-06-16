import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ngValidation';
  angForm: FormGroup;
  surnamePat = "^[a-zA-Z]+$";

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      surname: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.surnamePat)]]
    });
  }
}
