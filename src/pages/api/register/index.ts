import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prismadb";
import bcrypt from "bcrypt";

interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponseBody {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponseBody>
) {
  if (req.method === "POST") {
    const { name, email, password } = req.body as RegisterRequestBody;

    const hashedPassword = await bcrypt.hash(password, 12);

    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          hashedPassword,
        },
      });

      return res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error registering user" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
