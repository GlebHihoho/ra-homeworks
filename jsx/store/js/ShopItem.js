'use strict';

function plan(symbol, price) {
  price = price.toFixed(2);

  switch (symbol) {
    case '$' : return `${symbol}${price}`;
    case '£' : return `${symbol}${price}`;
    case '€' : return `${symbol}${price}`;
    case 'Р' : return `${price}${symbol}`;
    default  : return `${price}${symbol}`;
  }
}

function CurrencyPrice(props) {
  let {symbol, price} = props;

  return (
    <div className="price">
      {plan(symbol, price)}
    </div>
  )
}

function ShopItem(props) {
  let {brand, title, description, descriptionFull, price, currency} = props.item;

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window  mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">
          <CurrencyPrice symbol={currency} price={price}/>
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
};
