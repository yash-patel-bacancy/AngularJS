import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map,catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';


@Injectable()
export class PostsService{
    error = new Subject<string>();

    constructor(private http: HttpClient){}

    createAndStorePost(title: string, content: string){
        const postData: Post ={ title:title, content:content}
        this.http
            .post<{ anme: string }>(
                'https://making-http-requests-c4b4f-default-rtdb.firebaseio.com/posts.json',
                postData,
                {
                    observe: 'response'
                }
            )
            .subscribe(
                responseData => {
                    console.log(responseData);
                },
                error => {
                    this.error.next(error.message);
                }
            );
    }

    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom','value');
        return this.http
            .get<{ [key: string] : Post }>(
                'https://making-http-requests-c4b4f-default-rtdb.firebaseio.com/posts.json',
                {
                    headers: new HttpHeaders({'Custom-Header': 'Hello'}),
                    params: searchParams,
                    responseType: 'json'
                }
            )
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if(responseData.hasOwnProperty(key)){
                        postsArray.push({...responseData[key], id: key });
                    }
                }
                return postsArray;
            }),
            catchError(errorRes => {
                return throwError(errorRes);
            })
        );
    }

    deletePosts(){
       return this.http.delete(
           'https://making-http-requests-c4b4f-default-rtdb.firebaseio.com/posts.json',
           {
               observe: 'events',
               responseType: 'text'
           })
           .pipe(
               tap(event => {
                   console.log(event);
                   if(event.type === HttpEventType.Sent) {

                   }
                   if(event.type === HttpEventType.Response){
                       console.log(event.body);
                   }
               })
           );
    }
}