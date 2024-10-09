import { getPrismaInstance } from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
  const email = req.body.email;
  if (!email) {
    res.json({ msg: 'email is required', status: false })
  }
  const prisma = getPrismaInstance();
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      return res.json({ msg: "user not found", status: false })
    }
    return res.json({ msg: "user found", status: true, data: user })
  } catch (error) {
    next(error);
  }
}

export const saveUserInfo = async (req, res, next) => {
  const { email, name, about, image: profilePic } = req.body;
  if (!email) {
    return res.send("Email is required");
  }
  if (!name) {
    return res.send("Name is required");
  }
  if (!profilePic) {
    return res.send("Image is required");
  }
  try {
    const prisma = getPrismaInstance();
    await prisma.User.create({
      data: {email, name, about, profilePic}
    });
    return res.status(201).json({msg:"userInfo saved successfully"})
  } catch (error) {
    next(error);
  }

}