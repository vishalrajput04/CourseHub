import User from "./user.js";

const toPublicUser = (user) => ({
  id: user._id.toString(),
  name: user.name,
  email: user.email,
});

export async function findUserByEmail(email) {
  return User.findOne({ email }).select("+passwordHash");
}

export async function findPublicUserById(id) {
  const user = await User.findById(id).lean();
  return user ? toPublicUser(user) : null;
}

export async function createUser({ name, email, passwordHash }) {
  const user = await User.create({ name, email, passwordHash });
  return toPublicUser(user);
}
