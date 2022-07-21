import React, { useEffect, useState } from 'react';

const App = ({ Messaging }) => {
  const [count, setCount] = useState(99);

  useEffect(() => {
    Messaging.registerListener(Messaging.INCREMENT, () =>
      setCount((prevCount) => prevCount + 1)
    );
    Messaging.registerListener(Messaging.DECREMENT, () =>
      setCount((prevCount) => prevCount - 1)
    );
  }, []);

  return (
    <div style={{ borderRight: '1px solid #e3e3e3' }}>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          fontSize: '2rem',
        }}
      >
        <h3>
          <small> -/+</small> 1
        </h3>
        {count} ♥️
      </div>
    </div>
  );
};

export default App;
