import { Injectable } from '@angular/core';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FirestoreService } from './firestore.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private firestoreService: FirestoreService, private authService: AuthService) { }

  async getBName(){
    const db = getFirestore();
    const user = this.authService.currentUser;

    if (user) {
      const uid = user.uid;
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        return userData['businessName'] || null;
      }
    }

    return null;
}


}
