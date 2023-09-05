export interface IEntry {
		id: number;
		title: string;
		slug: string;
		mainImage: string;
		description: string;
		body: string;
		tags: string[];

		createdAt?: Date;
		updatedAt?: Date;
		
}