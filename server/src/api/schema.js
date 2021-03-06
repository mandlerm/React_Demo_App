import {makeExecutableSchema} from 'graphql-tools';

import resolvers from './resolvers';


export const typeDefs = `

    type Hero {
        _id: String
        name: String
        dob: String
        website: String
        image: String
    }   

    type Query {
        heros: [Hero]
        hero(id: String): Hero
    }

`;

export const schemaDefinitions = [
    typeDefs
];

const logger = { log: (e) => console.log(e) }

export default makeExecutableSchema({
    typeDefs: schemaDefinitions,
    resolvers,
    logger,
    allowUndefinedInResolve: true
});