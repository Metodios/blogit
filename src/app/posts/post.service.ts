import { Injectable } from '@angular/core';
import Post from './post.dto';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc')
    )
  }

  list() {
    return this.postsCollection.valueChanges();/*.map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }
      })
    })*/
  }

  save(data) {
    return this.postsCollection.add(data);
  }




}
