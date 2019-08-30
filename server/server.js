import app from './app';

const port = process.env.port || 9000;

const server = app.listen(port, () => console.log(`server running on http://localhost:${port}`));

export default server;