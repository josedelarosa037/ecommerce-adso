import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs"
import User from '../../../models/User'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log("req body:", req.body)

    // encrypt password
    var salt = bcrypt.genSaltSync(10);
    var passwordHashed = bcrypt.hashSync(req.body.password, salt);

    await User.collection.insertOne({
        fullname: req.body.fullname,
        email: req.body.email,
        password: passwordHashed
    })

    return res.status(200).json({ detail: 'User created' });
  } 
  return res.status(404)
}