import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const Gallery = ({ hits, onImgClick }) => {
  return (
    <ul className="ImageGallery" onClick={onImgClick}>
      {hits.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};
