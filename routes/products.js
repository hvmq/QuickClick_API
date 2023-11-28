const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const {
  getAllProducts,
  Create,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  getQuery,
  // getAllProductsTesting,
} = require("../controllers/products");
//What to show when some one gose to "/" i.e home page
//*post routes
// router.route("/create").post(Create, upload.fields([{ name: "image" }]));
router.route("/create").post(Create);
router.route("/get").get(getAllProducts);
router.route("/").get(getQuery);

//*get routes
router.route("/get/:id").get(getSingleProduct);
//*delete routes
router.route("/delete/:id").delete(deleteProduct);
//*put routes
router.route("/update/:id").put(updateProduct);

module.exports = router;
