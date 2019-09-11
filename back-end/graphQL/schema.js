import { buildSchema } from "graphql";
import gql from 'graphql-tag';

const schema = buildSchema(`
    scalar ISODate

    type director {
        name: String
        birthday: ISODate
        country: String
    }

    type actor {
        name: String
        birthday: ISODate
        country: String
        directors: [director]
    }

    type movie {
        title: String
        year: Int
        rating: Float
        actors: [actor]
        scoutbase_rating: String
    }
    type Query {
        movies: [movie]
    }

    type User {
        id: ID
        name: String
    }

    type userPayload {
        token: String
        user: User
    }

    type Mutation {
        createUser(username: String!, password: String!): userPayload
        login(username: String!, password: String!): userPayload
    }
`);

export default schema;