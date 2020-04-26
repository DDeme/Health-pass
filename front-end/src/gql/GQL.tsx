import React from 'react'
// import { useQuery } from '@apollo/react-hooks'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Loading, NotFound } from '../pages'

const GQL = props => {
	return (
		<Query query={props.query}>
			{({ loading, error, data }: any) => {
				if (loading) return <Loading />
				if (error) return <NotFound />
				if (!data) return <NotFound />
				return props.children
			}}
		</Query>
	)
}

const REASON_QUERY = gql`
	query {
		certificate
		reason {
			title
			type
			message
			published
			end
		}
	}
`

export { REASON_QUERY }
export default GQL
