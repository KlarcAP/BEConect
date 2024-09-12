import fastify from 'fastify';

const app = fastify()

app.get('/api/', () => {
    return "Rodando API"
})

app.listen({port: 3000}).then(() => {
    console.log('Server is running on port 3000')
})