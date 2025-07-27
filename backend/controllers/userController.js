exports.getProfile = async (req, res) => {
  res.json(req.user);
};

exports.updateProfile = async (req, res) => {
  const user = req.user;
  user.name = req.body.name || user.name;
  if (req.body.password) {
    user.password = await bcrypt.hash(req.body.password, 10);
  }
  const updated = await user.save();
  res.json(updated);
};
