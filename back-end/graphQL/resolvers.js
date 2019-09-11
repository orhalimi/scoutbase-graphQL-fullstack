import Movies from '../data/movies';
import Users from '../data/users';
import authUtil from '../auth/authUtil';
import {GraphQLScalarType} from 'graphql';
import _ from 'lodash';

const root = {
    movies:  (root, context) => {
      let movies = _.cloneDeep(Movies);
      if (context.user){
        movies.map(movie=> {
         movie.scoutbase_rating =  (Math.random() * 5 + 5).toFixed(1);
         return movie;
       });
      }
      return movies;
    },
    ISODate: ISODate,
    createUser: async input => {
      const {username, password} = input;
      const user = {
        name: username,
        id: (Math.random()*1e19).toString(36),
        password:  await authUtil.hashPass(password)
      }
      Users.push(user);
      const token = authUtil.jwtSign(user);
      return {token, user};
    },
    login: async input => {
      const {username, password} = input;
      let user = Users.find(user => user.name === username );
      let isUserVerified = false
      if (user){
        isUserVerified = await authUtil.compereHashPass(password,user.password);
      }
      return user && isUserVerified? {token: authUtil.jwtSign(user), user} : {};
    }
}


const ISODate =  new GraphQLScalarType({
  name: 'ISODate',
  description: 'JavaScript Date object as an ISO timestamp',
  serialize: function (value) {
    return value instanceof Date ? value.toISOString() : null;
  },
  
  parseValue: function(value) {
    try{
      return value == null ? null : new Date(value);
    } catch(e){
      return null;
    }
  },
  parseLiteral: function (ast) {
    return ast.kind === Kind.STRING ? parseValue(ast.value) : null;
  }
});

export default root;