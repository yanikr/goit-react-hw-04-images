import { Component } from 'react';
const INITIAL_STATE = {
  searchQuery: '',
};
export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.submitted(this.state.searchQuery);
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="button-label">Search</span>
          </button>
          <input
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            name="searchQuery"
            value={this.state.searchQuery}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
