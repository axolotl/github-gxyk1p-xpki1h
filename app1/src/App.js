import React, { Suspense, useEffect, useState } from 'react';
import Messaging from './Messaging';
const App2 = React.lazy(() => import('app2/App'));
const App3 = React.lazy(() => import('app3/App'));
const App4 = React.lazy(() => import('app4/App'));

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    Messaging.registerListener(Messaging.INCREMENT, () =>
      setCount((prevCount) => prevCount + 1)
    );
    Messaging.registerListener(Messaging.DECREMENT, () =>
      setCount((prevCount) => prevCount + 1)
    );
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        margin: 'auto',
        alignItems: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Custom Messaging System
      </h1>
      <p>Total Clicks: {count}</p>
      <Suspense fallback={'loading...'}>
        <App2 Messaging={Messaging} />
        <div style={{ display: 'flex' }}>
          <App3 Messaging={Messaging} />
          <App4 Messaging={Messaging} />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
