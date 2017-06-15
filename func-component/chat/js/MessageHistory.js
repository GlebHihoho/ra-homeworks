'use strict';

function MessageHistory({list = []}) {
  if (!list.length) {
    return null;
  }

  return (
    <ul>
      {list.map(element => {
        if (element.type === 'response') {
          return <Response from={element.from} message={element} />
        }

        if (element.type === 'message') {
          return <Message from={element.from} message={element} />
        }

        if (element.type === 'typing') {
          return <Typing from={element.from} message={element} />
        }
      })}
    </ul>
  );
}
