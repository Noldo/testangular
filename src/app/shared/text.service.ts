import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  constructor(private firestore: AngularFirestore) {
  }

  form = new FormGroup({
    textEntry: new FormControl(''),
  });


  createTextEntry(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('textEntries')
        .add(data)
        .then(res => {
        }, err => reject(err));
    });
  }

  updateTextEntry(data) {
    return this.firestore
      .collection('textEntries')
      .doc(data.payload.doc.id)
      .set({completed: true}, {merge: true});
  }

  getTextEntry() {
    return this.firestore.collection('textEntries').snapshotChanges();
  }

  deleteTextEntry(data) {
    return this.firestore
      .collection('textEntries')
      .doc(data.payload.doc.id)
      .delete();
  }


}

