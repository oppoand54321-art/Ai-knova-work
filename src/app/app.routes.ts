import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'brain',
    loadComponent: () =>
      import('./pages/brain/brain').then(m => m.Brain)
  },
  {
    path: 'silicon',
    loadComponent: () =>
      import('./pages/silicon/silicon').then(m => m.Silicon)
  },
  {
    path: 'quant-studio',
    loadComponent: () =>
      import('./pages/quant_studio/quant-studio').then(m => m.QuantStudio)
  },
  {
    path: 'forge',
    loadComponent: () =>
      import('./pages/forge/forge').then(m => m.Forge)
  },
  {
    path: 'universal',
    loadComponent: () =>
      import('./pages/universal/universal').then(m => m.Universal)
  },
  {
    path: 'studio',
    loadComponent: () =>
      import('./pages/studio/studio').then(m => m.Studio)
  },
  {
    path: 'v8',
    loadComponent: () =>
      import('./pages/v8/v8').then(m => m.V8)
  },
  {
    path: 'swarm',
    loadComponent: () =>
      import('./pages/swarm/swarm').then(m => m.Swarm)
  },
  {
    path: 'sentinel',
    loadComponent: () =>
      import('./pages/sentinel/sentinel').then(m => m.Sentinel)
  },
  {
    path: '**',
    redirectTo: ''
  }
];