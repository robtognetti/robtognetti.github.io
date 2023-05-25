import { doc, setDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../firebase/firebase';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const { body } = req;
    if (!body.projectname) throw new Error('Project name is required');
    if (body.githuburl && !body.githuburl.startsWith('http')) throw new Error('Check your Github URL');
    if (body.deployurl && !body.deployurl.startsWith('http')) throw new Error('Check your Deploy URL');
    const date = new Date();
    setDoc(doc(db, "projects", JSON.stringify(date)), { ...body });
    return res.status(201).json({ message: 'SUCCESS' });
  } catch (err) {
    const error = err as Error;
    return res.status(400).json({ message: error.message })
  }
}