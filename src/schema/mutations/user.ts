import {GraphQLString} from "graphql";
import {User} from "../../entities/user";
import {UserType} from "../typeDefs/user";
import bcrypt from 'bcryptjs';

export const CREATE_USER = {
    type: UserType,
    args: { name: {type: GraphQLString}, username: {type: GraphQLString}, password: {type: GraphQLString}},
    resolve: async (_: any, args: any) => {
        const {name, username, password} = args;
        const encryptedPassword = await bcrypt.hash(password, 10);
        const result = await User.insert({name, username, password: encryptedPassword})
        return {id: result.identifiers[0].id, ...args};
    },
}