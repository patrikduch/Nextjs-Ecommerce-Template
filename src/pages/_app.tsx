import React from 'react';
import App from 'next/app';
import { CssBaseline } from '@material-ui/core';
import {appWithTranslation} from '../i18n';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
	padding: 0;
    margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    	Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
   }

  *{
    box-sizing: border-box;
  }

  #nprogress .bar {
    z-index: 9999;
  }
`;

class StartupApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<>
				<Head>
					<title>Patrik Duch, Solutions Architect</title>
        			<link rel="icon" href="/favicon.ico" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				</Head>
				<StylesProvider injectFirst>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<GlobalStyle />
						<Component {...pageProps} />
					</ThemeProvider>
				</StylesProvider>
			</>
		);
	}
}

export default appWithTranslation(StartupApp);