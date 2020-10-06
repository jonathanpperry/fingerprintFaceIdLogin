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
  }

  login() {
    this.faio.show({
      title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
      subtitle: 'Coolest Plugin ever', // (Android Only) | optional | Default: null
      description: 'Please authenticate', // optional | Default: null
      fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
      disableBackup: true,  // optional | default: false
    }).then(() => {
      if (this.isModal) {
        this.modalCtrl.dismiss();
      } else {
        this.router.navigateByUrl("/home");
      }

    })
  }

}
