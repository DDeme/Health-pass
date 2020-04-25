import { GraphQLServer } from "graphql-yoga";
import { certificateResolver } from './graphql/resolvers/certificate';
import { reasonResolver } from './graphql/resolvers/reason';
import { testResultsResolver } from './graphql/resolvers/testResults';
import { notificationsResolver } from './graphql/resolvers/notifications';
import { keysResolver } from './graphql/resolvers/keys';



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
 `;



const resolvers = {
  Query: {
    certificate: certificateResolver,
    reason: reasonResolver,
    test_results: testResultsResolver,
    notifications: notificationsResolver,
    keys: keysResolver, 
  },
};



const server = new GraphQLServer({ typeDefs, resolvers });

export default server







