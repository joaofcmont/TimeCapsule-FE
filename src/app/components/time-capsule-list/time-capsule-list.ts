import { Component, OnInit } from '@angular/core';
import { timeCapsuleService } from '../../services/time-capsule';
import { TimeCapsule } from '../../time-capsule.model';
import { CommonModule, SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-time-capsule-list',
  imports: [SlicePipe, CommonModule, RouterModule],
  templateUrl: './time-capsule-list.html',
  styleUrl: './time-capsule-list.css'
})
export class TimeCapsuleList implements OnInit{

  timeCapsules: TimeCapsule[] = [];
  loading = false;
  error = '';

  constructor(private timeCapsuleService: timeCapsuleService){}
  
  ngOnInit(): void {
    this.loadTimeCapsules();
  }

  loadTimeCapsules():void{
    this.loading=true;
    this.timeCapsuleService.getAllTimeCapsules().subscribe({
      next: (data) => {
        this.timeCapsules = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading time capsules:', error);
        this.error = 'Failed to load time capsules';
        this.loading = false;
      }
    });
  }
  

}
