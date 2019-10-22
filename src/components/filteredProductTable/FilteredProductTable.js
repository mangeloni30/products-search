import React from 'react';
import './FilteredProductTable.css';
import ListProduct from '../listProduct/ListProduct'

/**
 * @class FilteredProductTable
 * @extends {React.Component}
 * class reponsible of render the input search and list of products
 * @author Martin Angeloni
 */
class FilteredProductTable extends React.Component {
  
  /**
   * Creates an instance of FilteredProductTable.
   * @param {*} props
   * @author Martin Angeloni
   */
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      onlyStock: false
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.checkboxHandler = this.checkboxHandler.bind(this)
  }

  /**
   * @name searchHandler
   * method responsible of set search state
   * in the current input value
   * @param {Event} e 
   * @author Martin Angeloni
   */
  searchHandler(e){
    this.setState({search: e.target.value})
  }

  /**
   * @name checkboxHandler
   * method responsible of set the onlyStock state
   * if checkbox is checked
   * @author Martin Angeloni
   */
  checkboxHandler() {
    if ( this.state.onlyStock === false) {
      this.setState({onlyStock: true})
    } else {
      this.setState({onlyStock: false})
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
