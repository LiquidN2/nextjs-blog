import React from 'react';
import '../scss/main.scss';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

const App: React.FC<{ Component: React.FC; pageProps: {} }> = ({
  Component,
  pageProps,
}) => <Component {...pageProps} />;

export default App;
