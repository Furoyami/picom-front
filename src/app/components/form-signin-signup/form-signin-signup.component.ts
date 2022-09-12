import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedUserModel } from 'src/app/model/autenticated-user.model';
import { ClientModel } from 'src/app/model/client.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Const } from 'src/app/utils/const';

@Component({
  selector: 'app-form-signin-signup',
  templateUrl: './form-signin-signup.component.html',
  styleUrls: ['./form-signin-signup.component.css']
})
export class FormSigninSignupComponent implements OnInit {

  private _userState: string;
  client: ClientModel = new ClientModel();
  authenticatedUser: AuthenticatedUserModel = new AuthenticatedUserModel();
  formSign: FormGroup;

  // va nous permettre de trier les champs utilisés ou non selon l'état et de les afficher
  public get userState(): boolean {
    return this._userState === Const.SIGNUP;
  }


  constructor(private _fb: FormBuilder,
    private _autenticationService: AuthenticationService,
    private _route: Router) {
  }

  ngOnInit(): void {
    this._autenticationService.userState.subscribe((result: string) => {
      this.onUserState(result);
    });

    // initialisation du formGroup
    this.formSign = this._fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.initFromGroup();
  }

  onUserState(pResult: string): void {
    this._userState = pResult;
  }

  submitForm() {


    switch (this._userState) {
      case Const.SIGNUP:
        this.createClient();
        this._autenticationService.addClient(this.client).subscribe();
        this._userState = Const.SIGNIN;
        this._route.navigate(['/authentication']);
        break;
      case Const.SIGNIN:
        this.createAuthenticatedUser();
        this._autenticationService.connecterClient(this.authenticatedUser).subscribe(data => sessionStorage.setItem('utilisateur', data.id));
        this._route.navigate(['/dashboard']);

        break;

      default:
        break;
    }
  }
  createClient(): ClientModel {
    this.client.nom = this.formSign.get('lastName')?.value;
    this.client.prenom = this.formSign.get('firstName')?.value;
    this.client.email = this.formSign.get('email')?.value;
    this.client.motDePasse = this.formSign.get('password')?.value;
    this.client.numeroDeTelephone = this.formSign.get('phone')?.value;
    return this.client;
  }

  createAuthenticatedUser(): void {
    this.authenticatedUser.email = this.formSign.get('email')?.value;
    this.authenticatedUser.motDePasse = this.formSign.get('password')?.value;
  }

  initFromGroup() {
    if (this._userState === Const.SIGNUP) {
      // TOUJOURS INITIALISER LA CHAINE DU CONTROL
      this.formSign.addControl('lastName', this._fb.control('', Validators.required));
      this.formSign.addControl('firstName', this._fb.control('', Validators.required));
      this.formSign.addControl('phone', this._fb.control('', Validators.required));
      this.formSign.updateValueAndValidity();
    }

  }

}
