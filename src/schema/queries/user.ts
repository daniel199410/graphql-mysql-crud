import {User} from "../../entities/user";
import {UserType} from "../typeDefs/user";
import {GraphQLBoolean, GraphQLID, GraphQLList} from "graphql";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve: async () => await User.find()
}

export const GET_USER = {
    type: UserType,
    args: { id: { type: GraphQLID } },
    resolve: async (_: any, args: any) => await User.findOne(args.id)
}

export const DELETE_USER = {
    type: GraphQLBoolean,
    args: { id: {type: GraphQLID } },
    resolve: async (_: any, {id}: any) => {
        const result = await User.delete(id)
        return result.affected === 1
    }
}