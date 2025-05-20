import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUploadService {
  constructor(private storage: Storage, private firestore: Firestore) {}

  // Upload profile picture
  async uploadUserProfile(userId: string, file: File): Promise<string> {
    const path = `users/${userId}/profile.jpg`;
    return this.uploadAndStoreURL(path, file, `users/${userId}`, 'photoURL');
  }

  // Upload store logo
  async uploadStoreLogo(storeId: string, file: File): Promise<string> {
    const path = `stores/${storeId}/logo.jpg`;
    return this.uploadAndStoreURL(path, file, `stores/${storeId}`, 'logoURL');
  }

  // Upload menu item image
  async uploadMenuItemImage(storeId: string, menuItemId: string, file: File): Promise<string> {
    const filename = `${Date.now()}_${file.name}`;
    const path = `stores/${storeId}/menu/${filename}`;
    return this.uploadAndStoreURL(path, file, `stores/${storeId}/menu/${menuItemId}`, 'imageURL');
  }

  // Upload chat image (optional)
  async uploadChatImage(chatId: string, messageId: string, file: File): Promise<string> {
    const path = `storeChats/${chatId}/${messageId}_${file.name}`;
    return this.uploadAndStoreURL(path, file);
  }

  // Core upload function
  private async uploadAndStoreURL(storagePath: string, file: File, docPath?: string, fieldName?: string): Promise<string> {
    const fileRef = ref(this.storage, storagePath);
    await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(fileRef);

    // Optionally update Firestore with the download URL
    if (docPath && fieldName) {
      const docRef = doc(this.firestore, docPath);
      await updateDoc(docRef, {
        [fieldName]: downloadURL
      });
    }

    return downloadURL;
  }
}
