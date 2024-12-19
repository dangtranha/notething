const app = require('./app');

const PORT = 8080;


const server = app.listen(PORT, () => {
    console.log(`F*cking Srver is still running on port ${PORT}`);
})

process.on("SIGINT", () => {
    server.close( () => console.log(`Bye bye!`));
})