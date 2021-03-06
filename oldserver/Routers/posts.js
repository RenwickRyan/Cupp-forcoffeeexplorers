// const { Router, request, response } = require("express");
// const router = Router();

// // router
// //   // routes will be specified at the app-level
// //   .route("/") // equivalent to /posts
// //   .get((request, response) => {
// //     const posts = db.get("posts").value();
// //     response.json(posts);
// //   })
// //   .post((request, response) => {
// //     const post = db
// //       .get("posts")
// //       .insert(request.body)
// //       .write();
// //     response.json(post);
// //   });
// // // don't forget to export the router Object
// // module.exports = router;

// router
//   .route("/:id") // equivalent to /posts/:id
//   .get((request, response) => {
//     // use params Object to get the ID
//     const id = request.params.id;
//     const post = db
//       .get("posts")
//       .getById(id)
//       .value();

//     if (post) {
//       response.json(post);
//     } else {
//       response.status(404).json({ message: "Not Found" });
//     }
//   })
//   .patch((request, response) => {
//     const id = request.params.id;
//     const post = db
//       .get("posts")
//       .updateById(id, request.body)
//       .write();

//     if (post) {
//       response.json(post);
//     } else {
//       response.status(404).json({ message: "Not Found" });
//     }
//   })
//   .delete((request, response) => {
//     const id = request.params.id;
//     const post = db
//       .get("posts")
//       .removeById(id)
//       .write();

//     if (post) {
//       response.json(post);
//     } else {
//       response.status(404).json({ message: "Not Found" });
//     }
//   });

// module.exports = router;
