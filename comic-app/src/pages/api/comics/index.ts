// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiResponse, NextApiRequest } from 'next';
import md5 from 'md5';
import { FetchedResult } from '../../../types';
const api_key = 'ff34e285bad35f7abc603c31db177f23';
const private_key = 'c29cbf42efa8d7f8d376a365afc9eef0bd764d15';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const headers: string[] = req.rawHeaders; 
	
	const baseUrl = 'http://gateway.marvel.com/v1/public/comics';
	const ts = Date.now().toString();
	const apiKey = api_key;
	const privateKey = private_key;
	const hash = md5(ts + privateKey + apiKey);
	const api = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
	
	
	try {
		const response = await fetch(api);
		const data = await response.json();
		const { results } = data.data;
		
		const newResults = results.map((comic: FetchedResult) => {
			const {
				id,
				thumbnail: img,
				creators: { items: creators },
				issueNumber,
				title,
				modified: publishDate,
			} = comic;
			const thumbnail = `${img.path}.${img.extension}`;

			return { id, thumbnail, creators, issueNumber, title, publishDate };
		});

		res.status(200).json(newResults);
	} catch (err: any) {
		console.log(err);
		return;
	}
}