import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public formCreate: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formCreate = this.fb.group({
      id: [uuidv4(), Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.userService.postUser(this.formCreate.value);
    this.showSnackMsgSuccess();
    this.router.navigate(['list']);
  }

  showSnackMsgSuccess(): void {
    this.snackBar.open('Usuario creado exitosamente', '🥳', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

}
