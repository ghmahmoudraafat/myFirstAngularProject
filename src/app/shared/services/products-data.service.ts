import { IProduct } from "../interface/iproduct";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductsDataService {
  getData(): IProduct[] {
    return [
      {
        "productId": 1,
        "productName": "Sony WH-1000XM3",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": `SONY WH-1000XM3 LAYS CLAIM TO TOP NOISE-CANCELING HEADPHONE
        The third iteration of the WH-1000X is more comfortable, sounds slightly better and features even better noise-canceling performance along with USB-C charging.`,
        "price": 19.95,
        "starRating": 3.5,
        "imageUrl": "https://cnet4.cbsistatic.com/img/bK3PfAGrO7mmTy-bAO7izq1sKlU=/1148x646/2018/08/30/e7ad8666-7caf-41fd-9349-06fa647fd711/sony-1000xm3-7.jpg",
        "comments": ['Is not as careful in checking work product for errors as he/she could be.',
        'Tends to miss small errors in work product.',
        'Forms and required paperwork are completed on time with minimal errors.']
      },
      {
        "productId": 2,
        "productName": "Jabra Elite Active 65t ",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": `The Jabra Active Elite 65t are fully sweat-resistant truly wireless earphones that fit comfortably and securely. They sound excellent, perform reliably and are great for making calls, with two microphones in each earpiece. Battery life is decent at 5 hours and the included charging case delivers two extra charges. A quick-charge feature allows you to get 1.5 hours of juice from a 15-minute charge.`,
        "price": 32.99,
        "starRating": 4.5,
        "imageUrl": "https://cnet3.cbsistatic.com/img/qyTA382AqU2Nx10MiTBoJCtoGn0=/1148x646/2018/05/23/05bc4dd5-fe63-45cd-8ac1-fb3f67d2651c/11-jabra-elite-active-65t.jpg",
        "comments": ['Does not complete required paperwork.','Required paperwork is completed late or is only partially complete.']
      },
      {
        "productId": 3,
        "productName": "Bose QuietComfort 35 II",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": `THE ALREADY EXCELLENT BOSE QUIETCOMFORT 35 II GETS A TOUCH BETTER
        The top-rated QC35 adds a direct connection to Google Assistant.`,
        "price": 8.9,
        "starRating": 4.5,
        "imageUrl": "https://cnet3.cbsistatic.com/img/12r72wnIZkHlU_oP1fJ0-XOECh8=/1148x646/2017/09/26/4c6ec5f4-8dcb-45c7-8770-e87208e3d3ae/17bose-quietcomfort-35-ii.jpg",
        "comments": ['Has made frequent errors that are harmful to business operations.','Does not require constant supervision.']
      },
      {
        "productId": 4,
        "productName": "Jabra Elite 65t",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": ` The Jabra Elite 65t are smaller and fit more comfortably than their predecessors. They sound excellent for truly wireless headphones, perform reliably and are great for making calls, with two microphones in each earpiece. Battery life is decent at 5 hours and the included charging case delivers two extra charges`,
        "price": 11.55,
        "starRating": 3.5,
        "imageUrl": "https://cnet4.cbsistatic.com/img/OF1Ul2yy-PACprYLkwYVgV4u37A=/1148x646/2018/01/05/d0162f22-addb-45a0-99b3-d8d06d2c97ae/02-jabra-elite-65t.jpg",
        "comments": ['The supervisor/department head has received numerous complaints about the quality of work','Error rate is acceptable, and all work is completed timely.']
      },
      {
        "productId": 5,
        "productName": "V-Moda Crossfade 2 Wireless",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": `The sturdily built, well-designed V-Moda Crossfade 2 Wireless delivers better battery life and improved sound over its predecessor, with more sculpted bass and better detail. The new larger earpads provide a more comfortable fit. And the headphone folds up to fit a well-designed protective case that now includes air vents.`,
        "price": 35.95,
        "starRating": 4.5,
        "imageUrl": "https://cnet3.cbsistatic.com/img/I2sHsuxe19Ehbtufrw_h66Jam5g=/1148x646/2017/03/21/215ccea9-fee1-41e1-a600-79a6c1207615/v-moda-crossfade-wireless-2-headphones-08.jpg",
        "comments": ['The quality of work produced is unacceptable.']
      },
      {
        "productId": 6,
        "productName": "Apple AirPods ",
        "productCode": "GMG-0062",
        "releaseDate": "October 16, 2015",
        "description": `The ultra-lightweight Apple AirPods are fully wireless headphones that offer a reliable wireless connection, effortless pairing with Apple devices, decent sonics and good call quality. The included compact charging case quickly charges the buds. You can now control playback of your music with a double tap.`,
        "price": 110,
        "starRating": 3,
        "imageUrl": "https://cnet4.cbsistatic.com/img/cXfmQT1Vydf4bi8Ml_szfAt7O2Q=/1148x646/2016/09/13/1d528046-b515-48e5-a170-b9895ec09e89/apple-airpods-2016-014.jpg",
        "comments": ['The quality of work produced is unacceptable.']
      },
      {
        "productId": 7,
        "productName": "Beats Studio3 Wireless",
        "productCode": "GMG-0072",
        "releaseDate": "October 11, 2015",
        "description": `The Beats Studio3 Wireless offers improved sound quality, noise canceling and battery life from its predecessor in the same sturdy design. Apple's W1 chip makes pairing with Apple devices dead simple. Performs well as a headset for making phone calls and and stacks up well against competing models from a sound standpoint.`,
        "price": 34,
        "starRating": 5,
        "imageUrl": "https://cnet3.cbsistatic.com/img/hlxlNuEjbP6_bpCAIzyOpqZrU0U=/1148x646/2017/09/26/7b7430be-1d79-4800-9d3e-81c22ed49358/01-beats-studio3-wireless.jpg",
        "comments": ['The quality of work produced is unacceptable.']
      },
      {
        "productId": 8,
        "productName": "Bose SoundSport Wireless",
        "productCode": "GMG-0082",
        "releaseDate": "October 15, 2015",
        "description": `The SoundSoundSport Wireless is a very comfortable in-ear wireless Bluetooth sports headphone that's sweat-resistant and sounds great. The earphones fit securely in your ears thanks to winged tips. The headphone works decently as a headset for making cell-phone calls and has an auto-off feature to preserve battery life`,
        "price": 855,
        "starRating": 4.5,
        "imageUrl": "https://cnet1.cbsistatic.com/img/VwlEtoGnVvY_BfQbI188oGVL3Pw=/1148x646/2016/06/03/c26879e0-6bc2-4958-aeb1-7aafb15fc718/08-bose-soundsport-wireless.jpg",
        "comments": ['The quality of work produced is unacceptable.']
      }

    ];
  }
  constructor() {}
}
