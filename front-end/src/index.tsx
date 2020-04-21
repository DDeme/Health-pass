//@ts-check
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import Translater from './i18n'
import Styler from './styles'
import Layout from './Layout'

const Root = () => (
	<StrictMode>
		<Translater>
			<Styler>
				<Layout />
			</Styler>
		</Translater>
	</StrictMode>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
