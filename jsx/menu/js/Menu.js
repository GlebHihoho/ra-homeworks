'use strict';

function Menu(props) {
  const { items, opened = false } = props;

  // Почему лучше использовать везде где возможно const?
  // Это как-то связано с невозможнотью изменить переменные простых типов
  // и приблизить JS к типизированному языку?)

  const list  = (
    <nav>
      <ul>
        {items.map(item => <li><a href={item.href}>{item.title}</a></li>)}
      </ul>
    </nav>
  );

  return (
    <div className={opened ? "menu menu-open" : "menu"}>
      <div className="menu-toggle"><span></span></div>
      {opened ? list : null}
    </div>
  )
};
