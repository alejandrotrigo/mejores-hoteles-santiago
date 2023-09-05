import  { IEntry } from '../interfaces/IEntry';

interface IData {
	entries: IEntry[];
}

export const initialData: IData = {
	entries: [
		{
			id: 1,
			title: 'First Entry',
			slug: 'first-entry',
			mainImage: 'https://picsum.photos/seed/1/800/600',
			description: 'This is the first entry',
			body: 'This is the body of the first entry',
			tags: ['first', 'entry'],
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 2,
			title: 'Second Entry',
			slug: 'second-entry',
			mainImage: 'https://picsum.photos/seed/2/800/600',
			description: 'This is the second entry',
			body: 'This is the body of the second entry',
			tags: ['second', 'entry'],
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: 3,
			title: 'Third Entry',
			slug: 'third-entry',
			mainImage: 'https://picsum.photos/seed/3/800/600',
			description: 'This is the third entry',
			body: 'This is the body of the third entry',
			tags: ['third', 'entry'],
			createdAt: new Date(),
			updatedAt: new Date()
		},
	]
}