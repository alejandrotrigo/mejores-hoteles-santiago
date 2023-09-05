import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'

type Data = 
  | { status: 'success' | 'error', data: { captcha: string } }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { token } = req.body;
	if (req.method === 'POST') {
		const response = await axios.post(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${token}`
		);
		const { success } = response.data;
		if (success) {
			res.status(200).json({ status: 'success', data: { captcha: 'success' } });
		}
	} else {
		res.status(400).json({ status: 'error', data: { captcha: 'error' } });
	}
}