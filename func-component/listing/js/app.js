'use strict';

function Price(props) {
  const {currency, price} = props;

  let currencySing = '';
  let currencyCopy = currency;

  if (currencyCopy === 'USD') {
    currencySing = '$';
    currencyCopy = '';
  } else if (currencyCopy === 'EUR') {
    currencySing = '€';
    currencyCopy = '';
  }

  return <p className="item-price">{currencySing}{price}{currencyCopy}</p>;

  // switch (currency) {
  //   case 'USD' : return <p className="item-price">${price}</p>;
  //   case 'EUR' : return <p className="item-price">€{price}</p>;
  //   default    : return <p className="item-price">{price} {currency}</p>;
  // }
}

function Quantity(props) {
  const {quantity} = props;

  let classQuantity = '';

  if (quantity <= 10) {
    classQuantity = 'level-low';
  } else if (quantity > 10 && quantity <= 20) {
    classQuantity = 'level-medium';
  } else if (quantity > 20) {
    classQuantity = 'level-high';
  }

  return <p className={"item-quantity " + classQuantity}>{quantity} left</p>;
}

function Listing({items}) {
  return (
    <div class="item-list">
      {items.map(item => {
        return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <Price currency={item.currency_code} price={item.price} />
              <Quantity quantity={item.quantity} />
            </div>
          </div>
        )
      })}
    </div>
  )
};
