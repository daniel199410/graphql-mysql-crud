import {GraphQLSchema, GraphQLObjectType} from 'graphql';
import {Greeting} from "./queries/greeting";
import {CREATE_USER} from "./mutations/user";
import {GET_ALL_USERS, GET_USER} from "./queries/user";

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: Greeting,
        getAllUsers: GET_ALL_USERS,
        getUser: GET_USER,
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