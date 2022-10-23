import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { Gallery } from './ImageGallery/ImageGallery';
import { searchImage } from './API/api';
import { ModalWindow } from './Modal/Modal';
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader/Loader';

// import { Audio } from 'react-loader-spinner';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    modal: false,
    largeImg: '',
    isLoading: false,
  };

  inputValue = input => {
    this.setState({ searchQuery: input });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) {
      this.setState({ isLoading: true });
      const data = await searchImage(this.state.searchQuery, this.state.page)
        .catch(err => console.log(err))
        .finally(() => this.setState({ isLoading: false }));
      if (this.state.page !== 1) {
        this.setState(prevState => ({
          images: [...prevState.images, ...data],
        }));
      } else {
        this.setState({
          images: [...data],
        });
      }
    }
  }
  toggleModal = () => {
    this.setState(({ modal }) => ({
      modal: !modal,
    }));
  };
  onImgClick = event => {
    const { source } = event.target.dataset;
    this.setState({ largeImg: source });
    this.toggleModal();
  };

  submitted = value => {
    this.setState({ searchQuery: value, page: 1 });
  };
  loadMore = async () => {
    this.setState(prevState => ({ isLoading: true, page: prevState.page + 1 }));
  };
  render() {
    const { images, modal, largeImg, isLoading } = this.state;
    return (
      <>
        <SearchBar submitted={this.submitted} inputValue={this.inputValue} />

        {isLoading && <Loader />}
        <Gallery hits={images} onImgClick={this.onImgClick} />

        {modal && (
          <ModalWindow onClose={this.toggleModal}>
            <img src={largeImg} alt="" />
          </ModalWindow>
        )}
        {images.length > 11 && (
          <LoadMoreBtn type="button" loadMore={this.loadMore}>
            load more
          </LoadMoreBtn>
        )}
      </>
    );
  }
}
