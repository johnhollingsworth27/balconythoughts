// PhotoService.js
import images from './imagesData';

class PhotoService {
  getImages() {
    return Promise.resolve(images);
  }
}

export const photoService = new PhotoService();
