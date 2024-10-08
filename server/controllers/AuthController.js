import { getPrismaInstance } from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
  const email = req.body.email;
  if (!email) {
    res.json({ msg: 'email is required', status: false })
  }
  const prisma = getPrismaInstance();
  try {
    const user = await prisma.user.findUnique({ where: { email : email } });
    if (!user) {
     return res.json({ msg: "user not found", status: false })
    }
    return res.json({ msg: "user found", status: true, data: user })
  } catch (error) {
    next(error);
  }
}