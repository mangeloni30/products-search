import React from 'react';
import './ListProduct.css';

/**
 * @class ListProduct
 * @extends {React.Component}
 * class responsible of render the list of products
 * @author Martin Angeloni
 */
class ListProduct extends React.Component {
  
  /**
   * Creates an instance of ListProduct.
   * @param {*} props
   * @author Martin Angeloni
   */
  constructor(props) {
    super(props)
    this.searchingFor = this.searchingFor.bind(this)
  }

  /**
   * @name searchingFor
   * method responsible of return the result
   * of search param if it includes
   * @param {string} search
   * @returns result of search
   * @author Martin Angeloni
   */
  searchingFor(search) {
    return function(arrayResult) {
      return arrayResult.name.toLowerCase().includes(search.toLowerCase()) || !search
    }
  }

  render() {
    let mainTitle = '';
    let noStockClass = '';
    return (
      <React.Fragment>
        <div className="main-titles">
          <h4 className="left-title">{this.props.name}</h4> <h4>{this.props.price}</h4>
        </div>
        {
          !this.props.onlyStock ? (
            <ul>
              {
                this.props.products.filter(this.searchingFor(this.props.search)).map((item) => {
                  noStockClass = item.stocked ? '' : 'no-stock'
                  if(mainTitle !== item.category) {
                    mainTitle = item.category
                    return (
                      <li>
                        <div className="li-container">
                          <div>
                            <h4>{item.category}</h4>
                          </div>
                          <div className="name-price-container">
                            <p className={noStockClass}>{item.name}</p>
                          <p className="item-price">{item.price}</p>
                          </div>
                        </div>
                      </li>
                    )  
                  }
                  return (
                    <li>
                      <div className="name-price-container">
                        <p className={noStockClass}>{item.name}</p>
                        <p className="item-price">{item.price}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          ) : (
            <ul>
            { this.props.products.filter(this.searchingFor(this.props.search)).map((item) => {
                if (item.stocked) {
                  if(mainTitle !== item.category) {
                    mainTitle = item.category;
                    return (
                      <li>
                        <div className="li-container">
                          <div>
                            <h4>{item.category}</h4>
                          </div>
                          <div className="name-price-container">
                            <p>{item.name}</p>
                            <p className="item-price">{item.price}</p>
                          </div>
                        </div>
                      </li>  
                    )
                  }
                  return (
                    <li>
                      <div className="name-price-container">
                        <p>{item.name}</p>
                        <p className="item-price">{item.price}</p>
                      </div>
                    </li>
                  ) 
                }
            })}
            </ul>
          )
        }
      </React.Fragment>
    );
  }
}

export default ListProduct;
