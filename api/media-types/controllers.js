const db = require("../db-connection");

const controllers = {
  getAll: (req, res) => {
    const sql = `SELECT * FROM media_types`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      res.json(rows);
    });
  },
  getOne: (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM media_types WHERE MediaTypeId = '${id}'`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  },
  create: (req, res) => {
    // read row data from body
    const newMedia = req.body;
    const sql = `INSERT INTO media_types (MediaTypeId, Name)
        VALUES("${newMedia.MediaTypeId}","${newMedia.Name}")`;
    console.log(newMedia);
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        console.log(err);
        return;
      }
      res.json("New media is added.");
    });
  },
  update: (req, res) => {
    // read row data from body
    const newMedia = req.body;
    const sql = `UPDATE media_types SET Name ='${newMedia.Name}' WHERE MediaTypeId =${newMedia.MediaTypeId}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("Value is updated");
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM media_types WHERE MediaTypeId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("Value is deleted");
    });
  },
};

module.exports = controllers;
