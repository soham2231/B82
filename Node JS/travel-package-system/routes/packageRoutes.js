const express = require("express");

const router = express.Router();

const packages = require("../data/packages");

// CREATE PACKAGE
router.post("/", (req, res) => {
  const newPackage = req.body;

  packages.push(newPackage);

  res.json({
    message: "Package added successfully",
    data: newPackage,
  });
});

// GET ALL PACKAGES
router.get("/", (req, res) => {
  res.json(packages);
});

// SEARCH BY LOCATION
router.get("/search/location", (req, res) => {
  const location = req.query.location;

  const result = packages.filter(
    (pkg) =>
      pkg &&
      pkg.location &&
      pkg.location.toLowerCase() === location.toLowerCase(),
  );

  res.json(result);
});

// GET PACKAGE BY ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foundPackage = packages.find((pkg) => pkg && pkg.id === id);

  if (!foundPackage) {
    return res.status(404).json({
      message: "Package not found",
    });
  }

  res.json(foundPackage);
});

// UPDATE PACKAGE
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = packages.findIndex((pkg) => pkg && pkg.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Package not found",
    });
  }

  packages[index] = req.body;

  res.json({
    message: "Package updated successfully",
    data: packages[index],
  });
});

// DELETE PACKAGE
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = packages.findIndex((pkg) => pkg && pkg.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Package not found",
    });
  }

  const deletedPackage = packages.splice(index, 1);

  res.json({
    message: "Package deleted successfully",
    data: deletedPackage,
  });
});

module.exports = router;
