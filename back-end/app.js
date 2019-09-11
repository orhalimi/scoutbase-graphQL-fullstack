import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import schema from './graphQL/schema';
import resolvers from './graphQL/resolvers'
import authUtil from './auth/authUtil';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) return next();
  try {
    const decoded = authUtil.jwtVerify(token);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).send("Invalid token.");
  }
});

app.use('/graphql', 
    graphqlHTTP(req =>({
      schema: schema,
      rootValue: resolvers,
      graphiql: true,
      context: {user: req.user},
    }))
);

app.use((err, req, res, next) => {
  console.log(err);
  return next(err);
});

export default app;

