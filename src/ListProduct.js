import React from 'react';
import './ListProduct.css';

class ListProduct extends React.Component {
  constructor(props) {
    super(props)
    this.searchingFor = this.searchingFor.bind(this)
  }

  searchingFor(search) {
    return function(x) {
      return x.name.toLowerCase().includes(search.toLowerCase()) || !search
    }
  }

  render() {
    let mainTitle = '';
    let noStockClass = '';
    const titulos = ['Sport', 'Electornic']
    return (
      <React.Fragment>
        <div className="main-titles">
          <h4 className="left-title">{this.props.name}</h4> <h4>{this.props.price}</h4>
        </div>
        {
          !this.props.onlyStock &&
          <ul>
            {
              this.props.products.filter(this.searchingFor(this.props.search)).map((item) => {
                noStockClass = item.stocked ? '' : 'no-stock'
                if(mainTitle !== item.category) {
                  mainTitle = item.category
                  return <li>
                    <div className="li-container">
                      <div>
                        <h4>{item.category}</h4>
                      </div>
                      <div className="name-price-container">
                        <p className={noStockClass}>{item.name}</p>
                      <p>{item.price}</p>
                      </div>
                    </div>
                  </li>  
                }
                return <li>
                    <p className={noStockClass}>{item.name}</p>
                    <p>{item.price}</p>
                  </li>
              })
            }
          </ul>
        }
        {
          this.props.onlyStock &&
          <ul>
          { this.props.products.filter(this.searchingFor(this.props.search)).map((item) => {
              if (item.stocked) {
                if(mainTitle !== item.category) {
                  mainTitle = item.category
                  return <li>
                    <div className="li-container">
                      <div>
                        <h4>{item.category}</h4>
                      </div>
                      <div className="name-price-container">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                      </div>
                    </div>
                  </li>  
                }
                return  <li>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              }
          })}
          </ul>
        }
      </React.Fragment>
    );
  }
}

export default ListProduct;
