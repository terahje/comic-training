export interface Thumbnail { path: string, extension: string }

export interface FetchedResult {
	id: number;
	thumbnail: Thumbnail;
	creators: CreatorCall;
	issueNumber: number;
	title: string;
	modified: string;
}

export interface CreatorCall {
	items: Creator[];
}

export interface Creator {
	name: string;
	role: string;
	resourceURI: string;
};

export interface ComicProps {
	id: string,
	title: string,
	thumbnail: string,
	issueNumber: number,
	publishDate: string,
	creators: Creator[],
}

