import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { slug } = req.query;
	const data = await import(`/hoteles/${slug}/data.json`, {
		assert: { type: 'json' }
	});
	//const data = JSON.parse(`${process.env.SITE_URL}/public/hoteles/${slug}/data.json`);

  res.status(200).json(data.default);
}