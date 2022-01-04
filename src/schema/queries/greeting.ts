import {GraphQLString} from 'graphql';
export const Greeting = {
    type: GraphQLString,
    resolve: () => 'Hello world',
}