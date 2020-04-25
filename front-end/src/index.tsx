//@ts-check
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import Translater from './i18n'
import Styler from './styles'
import Routing from './routes'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
	uri: 'https://us-central1-health-pass.cloudfunctions.net/graphql',
});



const Root = () => (
	<StrictMode>
		<ApolloProvider client={client}>
		<Translater>
			<Styler>
				<Routing />
			</Styler>
		</Translater>
		</ApolloProvider>
	</StrictMode>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
