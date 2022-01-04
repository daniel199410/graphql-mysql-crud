import {User} from "../../entities/user";
import {UserType} from "../typeDefs/user";
import {GraphQLID, GraphQLList} from "graphql";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve: async () => await User.find()
}

export const GET_USER = {
    type: UserType,
    args: { id: { type: GraphQLID }},
    resolve: async (_: any, args: any) => await User.findOne(args.id)
}