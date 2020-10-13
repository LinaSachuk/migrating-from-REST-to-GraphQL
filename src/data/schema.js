import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = ` 
    type Contact {
        id: ID
        firstName: String
        lastName: String
        email: String
        company: String 
    }

    type Query {
        getContacts: []
    }


`

