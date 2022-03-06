import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import { PAGE_SETTINGS } from '../constants';
import { GlobalStyle, Styled } from '../styled';

const App = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<>
			<Script
				async
				strategy='beforeInteractive'
				onLoad={() => console.log('Loaded')}
				src='https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
			/>

			<GlobalStyle />

			<Head>
				<title>{PAGE_SETTINGS.page_title}</title>
				<meta name='description' content='One product store' />
				<link rel='shortcut icon' href={PAGE_SETTINGS.favicon_url} />
			</Head>

			<Styled.Main>
				<Component {...pageProps} />
			</Styled.Main>
		</>
	);
};

export default App;
