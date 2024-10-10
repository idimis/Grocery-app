import ReactQueryProvider from '../utils/providers/ReactQueryProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  );
}

export default MyApp;
