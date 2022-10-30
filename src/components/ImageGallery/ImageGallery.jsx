import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
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

Gallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onImgClick: PropTypes.func.isRequired,
};
