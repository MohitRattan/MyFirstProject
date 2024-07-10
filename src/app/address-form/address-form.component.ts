import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  addressForm!: FormGroup;

  // Inject FormBuilder and Router
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      country: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log('Form Submitted!', this.addressForm.value);
      this.router.navigate(['/Pay-Now']); 
    } else {
      console.log('Form is invalid');
    }
  }
  
}
