import React, { useEffect, useState } from 'react';
// const Messaging = import('app1/Messaging');
// import Messaging from 'app1/Messaging';

const buttonStyles = {
  fontSize: '1.5rem',
  minWidth: '2rem',
};

const App = ({ Messaging }) => {
  // let Messaging;
  // const [Messaging, setMessaging] = useState(null);

  useEffect(async () => {
    await import('app1/Messaging').then((module) => {
      // Messaging = module.default;
      setMessaging(module.default);
      // console.log('MESSAGING');
      // console.log(Messaging);
      // console.log(Messaging.INCREMENT);
    });
  }, []);

  console.log(Messaging);

  return (
    <div
      style={{
        border: '1px solid #e3e3e3',
        width: '100%',
        padding: '1rem 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          style={{ marginRight: '1rem', ...buttonStyles }}
          onClick={() => Messaging?.triggerListeners?.(Messaging.DECREMENT)}
        >
          -
        </button>
        <button
          style={buttonStyles}
          onClick={() => Messaging?.triggerListeners?.(Messaging.INCREMENT)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
