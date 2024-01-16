import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { slug } = req.query;
	const data = JSON.parse(fs.readFileSync(path.resolve(`/hoteles/${slug}/data.json`), 'utf-8'));

  res.status(200).json(data);
}