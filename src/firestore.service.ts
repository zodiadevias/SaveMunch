import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  updateDoc,
  docData,
  query,
  where,
  collectionData,
} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Timestamp } from 'firebase/firestore';
import { User } from './models/user.model';
import { Store } from './models/store.model';
import { MenuItem } from './models/menu-item.model';
import { Order } from './models/order.model';
import { Chat } from './models/chat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  // 1. Add user profile
  async createUser(user: User) {
    const userRef = doc(this.firestore, `users/${user.uid}`);
    await setDoc(userRef, {
      ...user,
      createdAt: Timestamp.now(),
    });
  }

  // 2. Get user profile
  getUser(uid: string): Observable<User> {
    const ref = doc(this.firestore, `users/${uid}`);
    return docData(ref, { idField: 'uid' }) as Observable<User>;
  }

  // 3. Create store
  async createStore(store: Store) {
    const ref = doc(this.firestore, `stores/${store.id}`);
    await setDoc(ref, {
      ...store,
      createdAt: Timestamp.now(),
    });
  }

  // 4. Get store details
  getStore(storeId: string): Observable<Store> {
    const ref = doc(this.firestore, `stores/${storeId}`);
    return docData(ref, { idField: 'id' }) as Observable<Store>;
  }

  // 5. Add food item to menu
  async addMenuItem(storeId: string, item: MenuItem) {
    const ref = collection(this.firestore, `stores/${storeId}/menu`);
    await addDoc(ref, {
      ...item,
      createdAt: Timestamp.now(),
    });
  }

  // 6. Get menu items
  getMenuItems(storeId: string): Observable<MenuItem[]> {
    const ref = collection(this.firestore, `stores/${storeId}/menu`);
    return collectionData(ref, { idField: 'id' }) as Observable<MenuItem[]>;
  }

  // 7. Place order
  async placeOrder(order: Order) {
    const ref = collection(this.firestore, 'orders');
    return addDoc(ref, {
      ...order,
      createdAt: Timestamp.now(),
      status: 'pending',
    });
  }

  // 8. Get orders by user
  getOrdersByUser(userId: string): Observable<Order[]> {
    const ref = collection(this.firestore, 'orders');
    const q = query(ref, where('userId', '==', userId));
    return collectionData(q, { idField: 'id' }) as Observable<Order[]>;
  }

  // 9. Send chat message
  async sendMessage(chatId: string, message: any) {
    const ref = collection(this.firestore, `storeChats/${chatId}/messages`);
    await addDoc(ref, {
      ...message,
      timestamp: Timestamp.now(),
    });

    const chatRef = doc(this.firestore, `storeChats/${chatId}`);
    await updateDoc(chatRef, {
      lastMessage: message.text,
      updatedAt: Timestamp.now(),
    });
  }

  // 10. Get chat messages
  getChatMessages(chatId: string): Observable<any[]> {
    const ref = collection(this.firestore, `storeChats/${chatId}/messages`);
    return collectionData(ref, { idField: 'id' });
  }
}
