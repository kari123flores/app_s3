import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';
  bienvenidos: string = 'Bienvenid@';

  productos = [
    { nombre: 'Lima 100/180 ', precio: '2.990', enStock: true },
    { nombre: 'Lima 180/240 ', precio: '2.990', enStock: true },
    { nombre: 'Lima buffer 180/240 ', precio: '1.990', enStock: true },
    { nombre: 'Esmalte BlueSky Mojito', precio: '10.990', enStock: false },
    { nombre: 'Esmalte BlueSky Strawberry', precio: '10.990', enStock: false },
    { nombre: 'Esmalte BlueSky NudeZone', precio: '10.990', enStock: false },
    { nombre: 'Esmalte BlueSky Sunny Snowflakes', precio: '10.990', enStock: false },
    { nombre: 'Polímero VBP Cotton Candy 50g', precio: '$17.000', enStock: true },
    { nombre: 'Polímero VBP Raspberry Cream Cheese 50g', precio: '$17.000', enStock: true },
    { nombre: 'Polímero MagicKur Smooth Peach 50g', precio: '$12.990', enStock: false },
    { nombre: 'Polímero MagicKur CrystalClear 50g', precio: '$12.990', enStock: false },
    { nombre: 'Removedor GoNails 1lt', precio: '$11.990', enStock: true },
    { nombre: 'Crema de manos GoNails 550 ml Golden Hour', precio: '$9.990', enStock: true },
    { nombre: 'Higienizante 1lt', precio: '$9.590', enStock: true },
  ];

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private menu: MenuController
  ) {}

  ngOnInit() {
    this.menu.close("mainMenu");
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.password = params['password'];
    });
  }

  async mostrarAlerta(producto: any) {
    const alert = await this.alertController.create({
      header: 'Estado del Producto',
      message: producto.enStock ? 'El producto está en stock' : 'El producto no está en stock',
      buttons: ['OK']
    });

    await alert.present();
  }
}