import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ loadMore }) => {
  return (
    <button className="Button" onClick={loadMore}>
      Load More
    </button>
  );
};

LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
