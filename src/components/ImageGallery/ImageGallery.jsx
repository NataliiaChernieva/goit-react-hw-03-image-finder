import { v4 as uuidv4 } from 'uuid';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { CurrentImageGallery } from './ImageGallery.styled';

export default function ImageGallery({ images, handleImageClick }) {
    return (
        <CurrentImageGallery>
            {images.map(({ src, alt }) => {
                const itemId = uuidv4();
                <ImageGalleryItem key={itemId} src={src} alt={alt} onClick={handleImageClick}/>
            })}
        </CurrentImageGallery>
    );
};
