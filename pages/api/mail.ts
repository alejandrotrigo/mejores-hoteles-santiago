import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = 
  | { message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { name, email, phone, company, message } = req.body

	if (req.method === 'POST') {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const info = await transporter.sendMail({
			to: process.env.EMAIL_USER,
			from: `${name} <${email}>`,
			subject: `Interés en webs - ${name}`,
			text: `${name} - ${email} - ${phone} - ${company} - ${message}`,
		});

	}

	res.status(200).json({ message: 'ok' });
}