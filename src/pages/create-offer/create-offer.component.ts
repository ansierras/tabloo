import { Component, OnInit } from '@angular/core';
import { BggService } from 'src/services/bgg.service';
import { BggGame } from 'src/models/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, cities } from 'src/constants/places';
import { Condition, conditions } from 'src/constants/conditions';
import { PaymentMethod, methods } from 'src/constants/payment';
import { UserService } from 'src/services/user.service';

@Component({
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnInit {
  searchString: string;
  searching = false;
  bggSearchResults: BggGame[];
  errorMessage: string;
  selectedGame = false;
  cities: City[] = cities;
  conditions: Condition[] = conditions;
  methods: PaymentMethod[] = methods;
  offerForm: FormGroup;


  constructor(
    private bggService: BggService,
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    this.offerForm = this.fb.group({
      game: this.fb.group({
        name: ['', Validators.required],
        bggId: ['', Validators.required],
        imageUrl: ['', Validators.required],
        thumbnailUrl: ['', Validators.required]
      }),
      price: ['', Validators.required],
      cityId: ['', Validators.required],
      condition: ['', Validators.required],
      owner: this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        avatarUrl: ['', Validators.required]
      }),
      description: [''],
      paymentMethod: ['', Validators.required],
      shrinkwrapped: ['']
    });
  }

  onSelectGame(game: BggGame): void {
    this.offerForm.patchValue({
      game: {
        name: game.name,
        imageUrl: game.imgUrl,
        thumbnailUrl: game.thumbnailUrl,
        bggId: game.id
      }
    });
    this.selectedGame = true;
  }

  onSearch(): void {
    this.searching = true;
    this.errorMessage = null;
    this.bggService.searchBgg(this.searchString).then(result => {
      this.bggSearchResults = result;
      this.searching = false;
    })
      .catch(error => {
        this.searching = false;
        this.errorMessage = error;
      });
  }

  onSubmit(): void {
    this.offerForm.patchValue({
      owner: {
        ...this.userService.getUserSignature()
      }
    });
    if (this.offerForm.valid) {
      console.log(this.offerForm.value);
    }
  }
}
