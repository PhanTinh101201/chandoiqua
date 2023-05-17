// import type { AppProps } from 'next/app';
import 'reflect-metadata';
import 'styles/index.css';
import 'styles/antd.less';
import { wrapper } from '../store';
import Root from 'common/containers/root';
import nProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function App({ Component, pageProps }: any) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default wrapper.withRedux(App);
