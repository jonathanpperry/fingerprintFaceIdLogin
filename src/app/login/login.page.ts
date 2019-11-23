import { Component, OnInit, Input } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() isModal: boolean;
  constructor(
    private faio: FingerprintAIO,
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log("I am modal:", this.isModal)
  }

  login() {
    this.faio.show({
      clientId: "Fingerprint-Demo",
      clientSecret: "password", // Only Android
      localizedFallbackTitle: "Use Pin", // Only iOS
      localizedReason: "Please authenticate" // Only iOS
    }).then(() => {
      if (this.isModal) {
        this.modalCtrl.dismiss();
      } else {
        this.router.navigateByUrl("/home");
      }

    })
  }

}
