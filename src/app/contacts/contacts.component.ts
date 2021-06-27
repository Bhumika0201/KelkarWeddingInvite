import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';


import { AngularFireStorage } from '@angular/fire/storage';
import { UrlHandlingStrategy } from '@angular/router';

//import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  file: File[] = [];
  snapshot: Observable<any>;
  downloadURL:  Observable<string>;
  percentage: Observable<number>;
  urllist;



  constructor(private storage: AngularFireStorage,private db: AngularFirestore) { }

  onDrop(event) {
    console.log(event[0]);
     const file = event[0];
    const filePath = `Photos/${file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    this.percentage = task.percentageChanges();


    this.snapshot   = task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        console.log(this.downloadURL);

        this.db.collection('files').add( { downloadURL: this.downloadURL, filePath });
      }),
    );
this.getGuestsList();

  }
  ngOnInit() {
    this.getGuestsList()
    .subscribe(res => (this.urllist=res));

  }
  getGuestsList() {
    return this.db.collection("files").snapshotChanges();
  }

}
