const createPost = async (req, res) => {
  if (req.files) {
    console.log(req.files);
  }
};
module.exports = { createPost };
