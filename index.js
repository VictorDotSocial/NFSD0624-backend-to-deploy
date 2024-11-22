require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  console.log("Petición al endpoint TEST");
  setTimeout(() => {
    res.json({
      success: true,
      message: "¡API respondiendo!",
    });
  }, 4000);
});

app.listen(process.env.PORT || `0.0.0.0:$PORT`, () => {
  console.log("Servidor rulando al máximo!");
});
