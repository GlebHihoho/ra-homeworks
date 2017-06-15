'use strict';

const link = 'https://neto-api.herokuapp.com/etsy';

function load(link, done) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', link, false);
  xhr.send();

  if (xhr.status != 200) {
    console.log(`${xhr.status} ${xhr.statusText}`);
  } else {
    done(xhr.responseText);
  }
}

function Listing({items}) {
  console.log(items);

  return (
    <div class="item-list">
      {items.map(item => {
        return (
          <div class="item" key={item.listing_id}>
            <div class="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
              </a>
            </div>
            <div class="item-details">
              <p class="item-title">{item.title}</p>
              <p class="item-price">{item.currency_code}{item.price}</p>
              <p class="item-quantity level-medium">{item.quantity} left</p>
            </div>
          </div>
        )
      })}
    </div>

  )
}

function parse(listStr) {
  let list = JSON.parse(listStr);

  ReactDOM.render(<Listing items={list} />, document.getElementById('root'));
}

load(link, parse)
