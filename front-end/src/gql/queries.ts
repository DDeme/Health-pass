//@ts-check
import { gql } from 'apollo-boost'
import { DocumentNode } from 'apollo-boost'

const QUERY_RESULTS: DocumentNode = gql`
	{
		certificate
	}
`

const QUERY_MYSTATUS: DocumentNode = gql`
	{
		reason {
			title
			type
			message
			published
			end
		}
		test_results {
			title
			type
			message
			published
			end
		}
	}
`

const QUERY_TESTRESULTS: DocumentNode = gql`
	{
		test_results {
			title
			type
			message
			published
			end
		}
	}
`

const QUERY_NOTIFICATION: DocumentNode = gql`
	{
		notifications {
			title
			type
			message
			published
			end
		}
	}
`

export { QUERY_RESULTS, QUERY_TESTRESULTS, QUERY_NOTIFICATION, QUERY_MYSTATUS }
