import React, { FC } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider as ApolloProviderGQL } from '@apollo/react-hooks'

const client = new ApolloClient({
	uri: 'https://us-central1-health-pass.cloudfunctions.net/graphql',
})

const Apollo: FC = (props): JSX.Element => <ApolloProviderGQL client={client}>{props.children}</ApolloProviderGQL>

export default Apollo
