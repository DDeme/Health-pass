import { gql } from 'apollo-boost'
import { DocumentNode } from 'apollo-boost'

const CERTIFICATE_QUERY: DocumentNode = gql`
	{
		certificate
	}
`

export { CERTIFICATE_QUERY }
