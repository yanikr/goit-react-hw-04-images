export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,

  largeImageURL,
}) => {
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
