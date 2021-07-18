import { CurrentImageGalleryItem , ImageGalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ src, alt, onClick }) {
    return (
        <CurrentImageGalleryItem >
            <ImageGalleryItemImage src={src} alt={alt} onClick={onClick}/>
        </CurrentImageGalleryItem>
    )
};
