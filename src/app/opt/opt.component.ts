import { Component, OnInit } from '@angular/core';
import { authenticator } from 'otplib/otplib-browser';
import CryptoJS from 'crypto-js';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.css']
})
export class OptComponent implements OnInit {
  key: any;
  iv: any;
  constructor() {
    this.key = 'SenhaAES';
  }

  ngOnInit() {
    const epoch = 1545323236861 / 1000;
    console.log(epoch);

    authenticator.options = {
      algorithm: 'sha1',
      epoch: epoch,
      step: 30
    };
    const validationCode = authenticator.generate('SenhaTOTP');
    console.log(validationCode);

    let encrypted = CryptoJS.AES.encrypt(validationCode, this.key);
    encrypted = encrypted.toString();
    console.log('Cipher text: ' + encrypted);
  }

}
