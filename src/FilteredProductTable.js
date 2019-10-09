import React from 'react';
import './FilteredProductTable.css';
import ListProduct from './ListProduct'

class FilteredProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      onlyStock: false
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.searchingFor = this.searchingFor.bind(this)
    this.checkboxHandler = this.checkboxHandler.bind(this)
  }

  searchHandler(e){
    this.setState({search: e.target.value})
  }

  checkboxHandler() {
    if ( this.state.onlyStock === false) {
      this.setState({onlyStock: true})
    } else {
      this.setState({onlyStock: false})
    }
  }

  searchingFor(search) {
    return function(x) {
      return x.name.toLowerCase().includes(search.toLowerCase()) || !search
    }
  }

  render() {
    const { search, onlyStock } = this.state;
    return (
      <div>
        <input 
          type="text"
          placeholder="Search..."
          onChange={this.searchHandler}
          value={search}
        />
        <div className="checkbox-container">
          <input 
            type="checkbox"
            onChange={this.checkboxHandler}
          />
          <p>Only show products in stock</p>
        </div>
        <ListProduct 
          products={this.props.products}
          search={search}
          onlyStock={onlyStock}
          name="Name"
          price="Price"
        />
      </div>
    );
  }
}

export default FilteredProductTable;
