import '@glidejs/glide/dist/css/glide.core.min.css';
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default.theme';
import GlobalStyles from 'assets/style/Global.style';
import Layout from 'container/Layout/Layout';
import { SearchProvider } from 'context/SearchProvider';
import 'antd/dist/antd.css';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
})

Router.events.on('routeChangeError', () => {
  NProgress.done();
})


function App({ Component, router, pageProps }) {
  const { query } = router;

  return (
      <SearchProvider query={query}>
          <ThemeProvider theme={theme}>
            <Layout>
              <GlobalStyles />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
      </SearchProvider>
  );
}

export default App;
