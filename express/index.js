const express = require("express");
const cors = require("cors");

require("dotenv").config();

const run = async () => {
  const app = express();
  const { PORT } = process.env;

  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  app.get("/", (_, res) =>
    res.send({ message: "This is how you know it worked!" })
  );

  app.get("/sample", (_, res) =>
    res.send({ message: "further confirmation that it worked" })
  );

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
};

run();
