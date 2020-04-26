import { GraphQLServer } from 'graphql-yoga'
import { certificateResolver } from './graphql/resolvers/certificate'
import { reasonResolver } from './graphql/resolvers/reason'
import { testResultsResolver } from './graphql/resolvers/testResults'
import { notificationsResolver } from './graphql/resolvers/notifications'
import { keysResolver } from './graphql/resolvers/keys'

const typeDefs = `
   type Query {
     certificate: String!
     test_results: [Event]!
     notifications: [Event]!
     reason: Event
     keys: [PublicKey]
    }
    enum EventEnum {
        NOTIFICATION
        TEST_RESULT
        REASON
    }
    type Event {
      title: String
      type: String
      message: String
      published: String
      end: String
    }

    type PublicKey {
      public_key: String
      validUntil: String
    }
 `

const resolvers = {
	Query: {
		certificate: certificateResolver,
		reason: reasonResolver,
		test_results: testResultsResolver,
		notifications: notificationsResolver,
		keys: keysResolver,
	},
}

// const context: Context = ({ req }) => {
// 	// get the user token from the headers
// 	const token = req.headers.authorization || ''

// 	// try to retrieve a user with the token
// 	const user = getUser(token)

// 	// optionally block the user
// 	// we could also check user roles/permissions here
// 	if (!user) throw new Error('you must be logged in')

// 	// add the user to the context
// 	return { user }
// }

const server = new GraphQLServer({ typeDefs, resolvers })

export default server
