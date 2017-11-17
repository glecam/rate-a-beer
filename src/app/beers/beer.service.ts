import {Injectable} from '@angular/core'
import {IBeer} from './beer';

@Injectable()
export class BeerService{
    getBeers(): IBeer[]{
        return  [
            {
                "id": 10,
                "name": "La Chouffe",
                "rating": 5,
                "thumbImageUrl": "https://s3.eu-central-1.amazonaws.com/icapps-beers/thumb/Chouffe.png",
                "imageUrl": "https://s3.eu-central-1.amazonaws.com/icapps-beers/full/Chouffe.png",
                "brewery": {
                    "id": 6,
                    "name": "Brouwerij Achouffe",
                    "address": "Achouffe 32",
                    "city": "Houffalize",
                    "country": "Belgium"
                }
            },
            {
                "id": 7,
                "name": "Oude Caert",
                "rating": 2,
                "thumbImageUrl": "https://s3.eu-central-1.amazonaws.com/icapps-beers/thumb/Oude+Caert.png",
                "imageUrl": "https://s3.eu-central-1.amazonaws.com/icapps-beers/full/Oude+Caert.png",
                "brewery": {
                    "id": 4,
                    "name": "Brouwrij d'Oude Caert",
                    "address": "Kortestraat 72",
                    "city": "Brasschaat",
                    "country": "Belgium"
                }
            },
            {
                "id": 5,
                "name": "Tripel Karmeliet",
                "rating": 4,
                "thumb_image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/thumb/Karmeliet.png",
                "image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/full/Karmeliet.png",
                "brewery": {
                    "id": 3,
                    "name": "Brouwrij bosteels",
                    "address": "Kerkstraat 96",
                    "city": "Buggenhout",
                    "country": "Belgium"
                }
            },
            {
                "id": 3,
                "name": "Duvel",
                "rating": 3,
                "thumb_image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/thumb/Duvel.png",
                "image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/full/Duvel.png",
                "brewery": {
                    "id": 1,
                    "name": "Moortgat",
                    "address": "Breendonk-Dorp 58",
                    "city": "Puurs",
                    "country": "Belgium"
                }
            },
            {
                "id": 2,
                "name": "Jupiler",
                "rating": 3,
                "thumb_image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/thumb/Jupiler.png",
                "image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/full/Jupiler.png",
                "brewery": {
                    "id": 2,
                    "name": "Inbev",
                    "address": "Brouwerijplein 1",
                    "city": "Leuven",
                    "country": "Belgium"
                }
            },
            {
                "id": 6,
                "name": "Kwak",
                "rating": 4,
                "thumb_image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/thumb/Kwak.png",
                "image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/full/Kwak.png",
                "brewery": {
                    "id": 3,
                    "name": "Brouwrij bosteels",
                    "address": "Kerkstraat 96",
                    "city": "Buggenhout",
                    "country": "Belgium"
                }
            },
            {
                "id": 1,
                "name": "Stella",
                "rating": 2,
                "thumb_image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/thumb/Stella.png",
                "image_url": "https://s3.eu-central-1.amazonaws.com/icapps-beers/full/Stella.png",
                "brewery": {
                    "id": 2,
                    "name": "Inbev",
                    "address": "Brouwerijplein 1",
                    "city": "Leuven",
                    "country": "Belgium"
                }
            }
        ];
    }
}