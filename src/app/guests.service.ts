import { AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class GuestsService {
constructor(   private firestore: AngularFirestore   ) {}
createGuestslist(data) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("GuestList")
          .add(data)
          .then(res => {}, err => reject(err));
  });
}
getGuestsList() {
  return this.firestore.collection("GuestList").snapshotChanges();
}

deleteGuest(data) {
  return this.firestore
    .collection("GuestList")
    .doc(data.payload.doc.id)
    .delete();
}
}


