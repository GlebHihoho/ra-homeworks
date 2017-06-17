'use strict';

function Price(props) {
  const {currency, price} = props;

  switch (currency) {
    case 'USD' : return <p className="item-price">${price}</p>;
    case 'EUR' : return <p className="item-price">€{price}</p>;
    default    : return <p className="item-price">{price} {currency}</p>;
  }
}

function Quantity(props) {
  const {quantity} = props;

  if (quantity <= 10) {
    return <p className="item-quantity level-low">{quantity} left</p>;
  }

  if (quantity > 10 && quantity <= 20) {
    return <p className="item-quantity level-medium">{quantity} left</p>;
  }

  if (quantity > 20) {
    return <p className="item-quantity level-high">{quantity} left</p>;
  }
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
