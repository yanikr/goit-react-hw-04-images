import { SearchBar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';
import { searchImage } from './API/api';
import { ModalWindow } from './Modal/Modal';
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader/Loader';
import { useEffect, useState, useCallback } from 'react';
import Notiflix from 'notiflix';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(searchQuery, page);
  }, [searchQuery, page]);

  const inputValue = input => {
    setSearchQuery(input);
  };

  const fetchData = async (searchQuery, page) => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    const data = await searchImage(searchQuery, page)
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
    if (data.length === 0) {
      return Notiflix.Notify.failure(
        'Sorry, no images found. Specify your request'
      );
    }

    if (page !== 1) {
      setImages(prevState => [...prevState, ...data]);
    } else {
      setImages([...data]);
    }
  };

  const toggleModal = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const onImgClick = event => {
    const { source } = event.target.dataset;
    setLargeImg(source);
    toggleModal();
  };

  const submitted = value => {
    setSearchQuery(value);
    setPage(1);
  };
  const loadMore = () => {
    setIsLoading(true);
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <SearchBar submitted={submitted} inputValue={inputValue} />

      {isLoading && <Loader />}
      <Gallery hits={images} onImgClick={onImgClick} />

      {modal && (
        <ModalWindow onClose={toggleModal}>
          <img src={largeImg} alt="" />
        </ModalWindow>
      )}
      {images.length > 11 && (
        <LoadMoreBtn type="button" loadMore={loadMore}>
          load more
        </LoadMoreBtn>
      )}
    </>
  );
};
