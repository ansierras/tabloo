import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, cities } from 'src/constants/places';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './edit-profile.component.html'
})
export class EditProfileComponent implements OnInit {
  user: User;
  cities: City[] = cities;

  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    this.createForm();
  }

  createForm(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      cityId: [this.user.cityId, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const updates = {...this.userForm.value, state: 'active'};
      this.userService.updateUser(updates).then((res) => {
        console.log(res);
        this.router.navigate(['../show'], {relativeTo: this.route});
      });
    }
  }

}
