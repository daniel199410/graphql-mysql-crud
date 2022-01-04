import {GraphQLSchema, GraphQLObjectType} from 'graphql';
import {Greeting} from "./queries/greeting";

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: Greeting,
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
})