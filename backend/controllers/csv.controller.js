const db = require("../models");
const csvfile = db.CSVfile;
const fs = require("fs");
const csv = require("fast-csv");

const upload = async (req, res) => {
  try {
    const filePath = req.body.filePath || (__basedir + "/backend/uploads/" + req.file.filename);

    if (!filePath) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let csvfiles = [];

    fs.createReadStream(filePath)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        csvfiles.push(row);
        console.log(row);
      })
      .on("end", () => {
        csvfile
          .bulkCreate(csvfiles)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getcsvfiles = (req, res) => {
  csvfile
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

module.exports = {
  upload,
  getcsvfiles,
};
