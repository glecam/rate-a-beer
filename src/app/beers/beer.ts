import {IBrewery} from '../breweries/brewery';

export interface IBeer {
    id: number;
    name: string;
    rating: number;
    thumbImageUrl: string;
    imageUrl: string;
    brewery: IBrewery;
}