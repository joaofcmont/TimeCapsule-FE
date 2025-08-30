import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timeCapsuleService } from '../../services/time-capsule';
import { TimeCapsule } from '../../time-capsule.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-capsule-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './time-capsule-form.html',
  styleUrl: './time-capsule-form.css'
})
export class TimeCapsuleForm implements OnInit{

  timeCapsuleForm: FormGroup;
  isEditMode = false;
  timeCapsuleId: number | null = null;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private timeCapsuleService: timeCapsuleService
  ){
    this.timeCapsuleForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      messages: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]]
    })
  }

  ngOnInit(): void {
    this.timeCapsuleId = Number(this.route.snapshot.paramMap.get('id'));

    if(this.timeCapsuleId){
      this.loadTimeCapsule();
    }
  }

  loadTimeCapsule(): void {
    if (this.timeCapsuleId) {
      this.loading = true;
      this.timeCapsuleService.getTimeCapsuleById(this.timeCapsuleId).subscribe({
        next: (timeCapsule) => {
          this.timeCapsuleForm.patchValue({
            name: timeCapsule.name,
            messages: timeCapsule.messages
          });
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading time capsule:', error);
          this.error = 'Failed to load time capsule';
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void{
    if(this.timeCapsuleForm.valid){
      this.loading=true;
      const timeCapsule: TimeCapsule = this.timeCapsuleForm.value;

      this.timeCapsuleService.createTimeCapsule(timeCapsule).subscribe({
        next: () => {
          this.router.navigate(['/time-capsule'])
        },
        error: (error) => {
          console.error('Error creating time capsule:', error);
          this.error = 'Failed to create time capsule';
          this.loading = false;
        }
      });
    }
  }
  onCancel(): void {
    this.timeCapsuleForm.reset();
    this.timeCapsuleForm.markAsUntouched();
    this.timeCapsuleForm.markAsPristine();
    this.router.navigate(['/time-capsule']);
  }
  get name() { return this.timeCapsuleForm.get('name'); }
  get messages() { return this.timeCapsuleForm.get('messages'); }
}

