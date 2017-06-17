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

function parse(listStr) {
  let list = JSON.parse(listStr);

  ReactDOM.render(<Listing items={list} />, document.getElementById('root'));
}

load(link, parse);
