import express, { Request, Response } from "express";

// Create a new express application instance
const app: express.Application = express();

app.use(express.json());

// Define the POST endpoint
app.post("/dummy", (req: Request, res: Response) => {
  const response = "Hello World!";

  res.json({
    response,
  });
});

// The server is listening on port 3000
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
