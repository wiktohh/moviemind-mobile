import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Movie } from 'src/app/shared/models/movies/movie.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.scss',
  standalone: true,
  imports: [TranslateModule, IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilterModalComponent implements OnInit {
  @Input() filters2: any;
  categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];
  marks = [1, 2, 3, 4, 5];
    filtersForm!: FormGroup;
    filters: any = {
      categories: {},
      rating: null,
      yearStart: null,
      yearEnd: null,
    };
    customModalOptions = {
      header: 'Sortuj',
      breakpoints: [0, 0.3],
      initialBreakpoint: 0.3,
    };
    isModalOpen = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    if(this.filters2){
      this.filters = this.filters2;
    }
  }

  onCategoryChange(category: string, isChecked: boolean) {
    this.filters.categories[category] = isChecked;
    console.log('Kategorie po zmianie:', this.filters.categories);
  }

  onRatingChange(rating: number) {
    this.filters.rating = rating;
    console.log('Ocena po zmianie:', this.filters.rating);
  }

  apply(){
    this.modalController.dismiss(this.filters, 'confirm');
  }

  cancel(){
    this.modalController.dismiss(null, 'cancel');
  }

}
