import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipe',
  standalone: true // Add this to make the pipe standalone
})
export class CpipePipe implements PipeTransform {
  
  transform(value: string, searchText: string): string {
    if (!searchText) return value; // If no search text, return the original value

    // Create a regex to find the search text, case-insensitive
    const regex = new RegExp(`(${searchText})`, 'gi');

    // Replace the matching text with bold and underline HTML tags
    return value.replace(regex, '<strong><u>$1</u></strong>');
  }
}
