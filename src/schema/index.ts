import {GraphQLSchema, GraphQLObjectType} from 'graphql';
import {Greeting} from "./queries/greeting";
import {CREATE_USER} from "./mutations/user";

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: Greeting,
    }
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {createUser: CREATE_USER},
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation,
})