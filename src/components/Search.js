import React, { PureComponent } from 'react';
import SearchBar from 'material-ui-search-bar';

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }



  render() {
    return (
      <SearchBar
      onChange={(value) => this.setState({ inputValue: value})}
      value={this.state.inputValue}
      hintText="Zoeken naar..."
      style={{
      margin: '0 auto',
      maxWidth: 800
      }}/>
    )
  }
}

export default Search
