import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBackButton, IonButtons, IonButton, IonIcon, IonAvatar, IonImg, IonText, IonSegment, IonSegmentButton, SegmentChangeEventDetail, IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader } from '@ionic/angular/standalone';
import { IonSegmentCustomEvent } from '@ionic/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { star, funnelOutline, filterOutline, chevronExpandOutline } from 'ionicons/icons';
import { Genre, Movie } from 'src/app/shared/models/movies/movie.model';
import { MoviesServiceService } from 'src/app/shared/services/movies/movies.service';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { finalize } from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ModalController],
  imports: [TranslateModule, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCol, IonRow, IonGrid, IonSegmentButton, IonSegment, IonText, IonImg, IonAvatar, IonIcon, IonButton, IonButtons, IonBackButton, IonLabel, IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule, ReactiveFormsModule],
})
export class MoviesPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'];
  marks = [1, 2, 3, 4, 5];
  startYear = 1900;
  endYear = this.getCurrentYear();
  filtersForm!: FormGroup;
  filters: any;
  customModalOptions = {
    header: 'Sortuj',
    breakpoints: [0, 0.3],
    initialBreakpoint: 0.3,
  };
  isModalOpen = false;
  loading = false;
  Genre = Genre;
  tempMovieImage = environment.tempImage;


  constructor(private moviesService: MoviesServiceService, private router: Router, private fb: FormBuilder, private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController, private translate: TranslateService) {
    addIcons({chevronExpandOutline,funnelOutline,star,filterOutline});
  }

  ngOnInit() {
   this.loading = true;
   this.moviesService.getMovies().pipe(finalize(() => this.loading = false)).subscribe({
      next: (movies: Movie[]) => {
        this.movies = movies;
        this.filteredMovies = movies;
      },
      error: (error) => {
        console.log('Error:', error);
      }
   })
    this.filters = {
      categories: {},
      rating: null,
      yearStart: null,
      yearEnd: null,
    };
  }

  sortMovies(criteria: string) {
    this.loading = true;
    switch (criteria) {
      case 'best':
        this.filteredMovies = this.movies.sort((a, b) => b.score - a.score);
        break;
      case 'worst':
        this.filteredMovies = this.movies.sort((a, b) => a.score - b.score);
        break;
      case 'newest':
        this.filteredMovies = this.movies.sort((a, b) => +b.releaseDate - +a.releaseDate);
        break;
      case 'oldest':
        this.filteredMovies = this.movies.sort((a, b) => +a.releaseDate - +b.releaseDate);
        break;
    }
    this.loading = false;

    console.log('Wybrano sortowanie:', criteria);
  }

  onSortClick() {
    this.actionSheetCtrl.create({
      header: this.translate.instant('moviePage.sort.header'),
      buttons: [
        {
          text: this.translate.instant('moviePage.sort.best'),
          handler: () => this.sortMovies('best'),
        },
        {
          text: this.translate.instant('moviePage.sort.worst'),
          handler: () => this.sortMovies('worst'),
        },
        {
          text: this.translate.instant('moviePage.sort.newest'),
          handler: () => this.sortMovies('newest'),
        },
        {
          text: this.translate.instant('moviePage.sort.oldest'),
          handler: () => this.sortMovies('oldest'),
        },
        {
          text: this.translate.instant('moviePage.sort.cancel'),
          role: 'cancel',
        },
      ],
    }).then(actionSheet => actionSheet.present());
  }

  onFilterClick() {
    this.modalCtrl.create({
      component: FilterModalComponent,
      componentProps: {filters2: this.filters},
    }).then(modalEl => {
      modalEl.present()
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      this.filters = resultData.data;
      if(resultData.role === 'confirm'){
        this.applyFilters();
      }
    });
  }

  onCategoryChange(category: string, isChecked: boolean) {
    this.filters.categories[category] = isChecked;
    console.log('Kategorie po zmianie:', this.filters.categories);
  }

  onRatingChange(rating: number) {
    this.filters.rating = rating;
    console.log('Ocena po zmianie:', this.filters.rating);
  }

  onYearStartChange(year: string | null | undefined) {
    this.filters.yearStart = +(year ?? 0);
    console.log('Rok początkowy po zmianie:', this.filters.yearStart);
  }

  onYearEndChange(year: string | null | undefined) {
    this.filters.yearEnd = +(year ?? 0);
    console.log('Rok końcowy po zmianie:', this.filters.yearEnd);
  }

  applyFilters() {
    this.loading = true;
    this.filteredMovies = this.movies.filter(movie => {
      const isInYearRange =
        (!this.filters.yearStart || +movie.releaseDate >= this.filters.yearStart) &&
        (!this.filters.yearEnd || +movie.releaseDate <= this.filters.yearEnd);
  
      const selectedCategories = Object.keys(this.filters.categories).filter(
        key => this.filters.categories[key]
      );

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(Genre[movie.genre]);
  
      const matchesRating =
        !this.filters.rating || movie.score >= this.filters.rating;
  
      return isInYearRange && matchesCategory && matchesRating;
    });
    this.loading = false;
  }

  goToMovieDetails(movieId: string) {
    this.router.navigate(['/movies', movieId]);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    const option = event.detail.value;
    if(option === "best"){
      this.movies = this.movies.sort((a, b) => b.score - a.score);
    } else {
      this.movies = this.movies.sort((a, b) => a.score - b.score);
    }
  }

  getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }
}
