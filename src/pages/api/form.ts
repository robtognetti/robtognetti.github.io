import { doc, setDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../firebase/firebase';
 
type Data = {
  message: string;
};
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const { body } = req;
    if (!body.projectname) throw new Error('Project name is required');
    if (body.githuburl && !body.githuburl.startsWith('http')) throw new Error('Check your Github URL');
    if (body.deployurl && !body.deployurl.startsWith('http')) throw new Error('Check your Deploy URL');
    const projectslug = body.projectname.toLowerCase().replace(/ /g, '_');
    const record = setDoc(doc(db, "projects", projectslug), { ...body });
    console.log('saved!', record);
    return res.status(200);
  } catch (err) {
    const error = err as Error;
    return res.status(500).json({ message: error.message })
  }
}