const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const debug = require("debug")("proxyserver");

const app = express();

app.all("*", function (req, res, next) {
  debug(req.method + " " + req.url);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const updateDatafile = (req, res) => {
  // read file and make object
  let content = JSON.parse(
    fs.readFileSync("./public/datafiles/myDatafile.json", "utf8")
  );
  const name = content.experiments[0].variations[0].key;
  const nameArray = name.split("-");
  const version = +nameArray[1] + 1;
  // reseting variation key;
  content.experiments[0].variations[0].key = "test-" + version;
  content.revision = ++content.revision;
  //write file
  fs.writeFileSync(
    "./public/datafiles/myDatafile.json",
    JSON.stringify(content)
  );
  res.status(200).send("Updated");
};

const resetVariationKeyName = (req, res) => {
  // read file and make object
  let content = JSON.parse(
    fs.readFileSync("./public/datafiles/myDatafile.json", "utf8")
  );

  // reseting variation key;
  content.experiments[0].variations[0].key = "test-1";
  content.revision = "1";
  //write file
  fs.writeFileSync(
    "./public/datafiles/myDatafile.json",
    JSON.stringify(content)
  );
  if (res) res.status(200).send("Resetted");
};

const myDatafileReader = (req, res) => {
  try {
    const datafile = fs.readFileSync(`./public/datafiles/myDatafile.json`);
    res.json(JSON.parse(datafile));
  } catch (error) {
    console.log("Error", error);
  }
};

app.use("/myDatafile", cors(), myDatafileReader);
app.use("/updateDatafile", cors(), updateDatafile);
app.use("/resetDatafile", cors(), resetVariationKeyName);

/* Unknown Route Handler */
app.use("/", (req, res) => {
  return res.status(502).send("Bad request");
});
app.listen(5000, () => {
  console.log("app is listening on port https://localhost:" + 5000);
  resetVariationKeyName();

  debug("Proxy Server started! Go to http://localhost:5000/");
});
