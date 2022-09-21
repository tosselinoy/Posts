import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interface/post';

@Pipe({
  name: 'postFilter',
})
export class SearchFilterPipe implements PipeTransform {
  //Search filter
  transform(posts: Post[], searchText: string): Post[] {
    if (!posts) {
      return [];
    }
    if (!searchText) {
      return posts;
    }
    searchText = searchText.toLocaleLowerCase();

    return posts.filter((it) => {
      return JSON.stringify(it).toLocaleLowerCase().includes(searchText);
    });
  }
}
