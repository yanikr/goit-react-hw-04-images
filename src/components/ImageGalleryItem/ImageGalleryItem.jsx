import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
