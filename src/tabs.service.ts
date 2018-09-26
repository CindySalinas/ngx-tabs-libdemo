import { Injectable } from '@angular/core';

@Injectable()
export class TabsService {

  private static readonly ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
  private static readonly ERR_NOT_LOGGED_IN = 'Not logged in';

  constructor() {
  }

  signIn() {
    console.log('test service');
  }

}
