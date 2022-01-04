import {User} from "../../entities/user";
import {UserType} from "../typeDefs/user";
import {GraphQLList} from "graphql";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve: async () => await User.find()
}