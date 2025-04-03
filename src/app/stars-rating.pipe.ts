import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starsRating'
})
export class StarsRatingPipe implements PipeTransform {

  transform(value: string): string {
    let stars = ""
    let rating = parseFloat(value) / 2

    for (let i = 1; i < rating; i++)
    {stars += "★"}

    for (let i = 0; i < 5 - rating; i++)
    {stars += "☆"}

    return stars;
  }

}
