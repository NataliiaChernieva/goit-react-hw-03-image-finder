import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { CurrentImageGallery } from './ImageGallery.styled';

export default function ImageGallery({ images, onSelect }) {
    return (
        <CurrentImageGallery>
            {images && images.map(image => {
                const { id, webformatURL, tags} = image;
                return < ImageGalleryItem key={id} src={webformatURL} alt={tags} onClick={() => onSelect(image)} />
            })}
            
        </CurrentImageGallery>
    );
};
