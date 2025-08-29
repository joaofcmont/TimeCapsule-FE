import { Routes } from '@angular/router';
import { TimeCapsuleList } from './components/time-capsule-list/time-capsule-list';
import { TimeCapsuleForm } from './components/time-capsule-form/time-capsule-form';
import { TimeCapsuleDetail } from './components/time-capsule-detail/time-capsule-detail';

export const routes: Routes = [
    { path: '', redirectTo: '/capsules', pathMatch: 'full' },
    { path: 'time-capsules', component: TimeCapsuleList },
    { path: 'create', component: TimeCapsuleForm },
    { path: 'capsule/:id', component: TimeCapsuleDetail }
  ];
