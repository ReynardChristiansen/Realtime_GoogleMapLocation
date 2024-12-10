require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users");
const cors = require("cors");

const app = express();

const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

app.options("", cors(corsConfig));
app.use(cors(corsConfig));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://maps.googleapis.com;"
  );
  next();
});

app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on port ${process.env.PORT || 4000}`);
});
