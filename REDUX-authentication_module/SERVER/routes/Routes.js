const router = require("express").Router();
const pageController = require("../controllers/pageController")

router.post("/regPost", pageController.user_regPost);
router.get("/regShow", pageController.user_regShow);
router.delete("/:id", pageController.user_regDel);
router.get("/editShow/:id", pageController.user_regShowEdit);
router.put("/:id", pageController.user_regEdit);
// router.put("/userId", pageController.user_update);



// router.delete("/arUser_delete/:id", pageController.addrecipeUser_delete)

module.exports = router;