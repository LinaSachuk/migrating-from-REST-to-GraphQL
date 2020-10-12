import express from 'express';


const app = express();
const PORT = 8080;


routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`GraphQL is running!`)
);

const { graphqlHTTP } = require('express-graphql');

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))



app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}/graphgl`)
);