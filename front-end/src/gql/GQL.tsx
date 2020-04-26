import React from 'react'
import { gql } from 'apollo-boost'
import { Loading, NotFound } from '../pages'
import { Query } from 'react-apollo'

const QueryStateManagement: any = (props: any) => {
	const { loading, error, data } = props
	if (loading) return <Loading />
	if (error) return <NotFound />
	if (!data) return <NotFound />
}

const REASON_QUERY = gql`
	{
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

interface GQLProps {
	query: any
	children: any
}

const GQL: any = (props: GQLProps): any => (
	<Query query={props.query}>
		{({ loading, error, data }: any): any => {
			if (loading || error || !data) {
				return <QueryStateManagement loading={loading} error={error} data={data} />
			}

			// return React.Children.map(props.children, child => React.cloneElement(child, { data: props.data }))
			return React.cloneElement(props.children, props)
		}}
	</Query>
)

export { REASON_QUERY }
export default GQL
