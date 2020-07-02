import AppServer from './server';

const PORT = process.env.PORT || 3333;
const server = AppServer;

try {
  server.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
} catch (error) {
  console.log("Couldn't start the server, error:", error);
}