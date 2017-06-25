'use strict';

function MessageHistory({list = []}) {
  if (!list.length) {
    return null;
  }

  const components = {
    response : Response,
    message  : Message,
    typing   : Typing
  }

  return (
    <ul>
      {list.map(element => {
        const Component = components[element.type];

        return <Component from={element.from} message={element} />;
      })}
    </ul>
  );
}
