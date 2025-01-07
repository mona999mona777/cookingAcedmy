import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { blankGuard } from './core/guards/blank.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [blankGuard],
    loadComponent: () =>
      import('./layout/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./component/home/home.component').then((m) => m.HomeComponent),
        title: 'home',
      },
      {
        path: 'chefs',
        loadComponent: () =>
          import('./component/chefs/chefs.component').then((m) => m.ChefsComponent),
        title: 'chefs',
      },
      {
        path: 'achivements',
        loadComponent: () =>
          import('./component/achive/achive.component').then((m) => m.AchiveComponent),
        title: 'achivements',
      },
      {
        path: 'testmonials',
        loadComponent: () =>
          import('./component/testmonials/testmonials.component').then(
            (m) => m.TestmonialsComponent
          ),
        title: 'testmonials',
      },
      {
        path: 'DiplopmaDates',
        loadComponent: () =>
          import('./component/dates/dates.component').then((m) => m.DatesComponent),
        title: 'Diplopma Dates',
      },
      {
        path: 'enroll',
        loadComponent: () =>
          import('./component/enroll/enroll.component').then((m) => m.EnrollComponent),
        title: 'enroll',
      },
      {
        path: 'examPleace',
        loadComponent: () =>
          import('./component/yourexamdate/yourexamdate.component').then(
            (m) => m.YourexamdateComponent
          ),
        title: 'exam pleace',
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./component/login/login.component').then((m) => m.LoginComponent),
        title: 'login',
      },
      {
        path: 'forgetpassword',
        loadComponent: () =>
          import('./component/forgetpassword/forgetpassword.component').then(
            (m) => m.ForgetpasswordComponent
          ),
        title: 'forget password',
      },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layout/blank/blank.component').then((m) => m.BlankComponent),
    children: [
      { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
      {
        path: 'mainpage',
        loadComponent: () =>
          import('./component/home-main/home-main.component').then(
            (m) => m.HomeMainComponent
          ),
        title: 'main page',
      },
      {
        path: 'allcategories',
        loadComponent: () =>
          import('./component/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
        title: 'all categories',
      },
      {
        path: 'onecategory/:name',
        loadComponent: () =>
          import('./component/onecategory/onecategory.component').then(
            (m) => m.OnecategoryComponent
          ),
        title: 'onecategory',
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./component/detail-mael/detail-mael.component').then(
            (m) => m.DetailMaelComponent
          ),
        title: 'details',
      },
      {
        path: 'allareas',
        loadComponent: () =>
          import('./component/areas/areas.component').then((m) => m.AreasComponent),
        title: 'all areas',
      },
      {
        path: 'onearea/:name',
        loadComponent: () =>
          import('./component/onearea/onearea.component').then((m) => m.OneareaComponent),
        title: 'onearea',
      },
      {
        path: 'allingradiants',
        loadComponent: () =>
          import('./component/ingredients/ingredients.component').then(
            (m) => m.IngredientsComponent
          ),
        title: 'all ingradiants',
      },
      {
        path: 'oneingradiant/:name',
        loadComponent: () =>
          import('./component/oneingradient/oneingradient.component').then(
            (m) => m.OneingradientComponent
          ),
        title: 'one ingradiant',
      },
      {
        path: 'invoice',
        loadComponent: () =>
          import('./component/invoice/invoice.component').then((m) => m.InvoiceComponent),
        title: 'invoice',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./component/error/error.component').then((m) => m.ErrorComponent),
    title: 'notfound',
  },
];
