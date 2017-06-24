'use strict';

function Stars({count = 0}) {
  if (count < 1 || count > 5 || typeof count !== 'number') {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array(count).fill(<li><Star /></li>)}
    </ul>
  );
}
