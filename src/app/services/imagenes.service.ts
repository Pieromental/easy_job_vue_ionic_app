import { Injectable } from '@angular/core';
import { Storage,ref,uploadBytes ,getDownloadURL,getStorage} from '@angular/fire/storage';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private storage:Storage) { }
  async guardarImagen(file: any) {
    // let file = _event.target.files![0];
    const imgRef = ref(this.storage, `images/${file.name}`);
    await uploadBytes(imgRef, file)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    const storage = getStorage();
    return await (getDownloadURL(ref(storage, `images/${file.name}`))
      .then((url) => {
        return url ;
      }) 
      .catch((error) => {
        return '';
      })) ;
  }
}
