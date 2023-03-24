export interface Thumbnail { path: string, extension: string }

export interface FetchedResult {
	id: number;
	thumbnail: Thumbnail;
	creators: CreatorCall;
	issueNumber: number;
	title: string;
	dates: Date[];
}

export interface CreatorCall {
	items?: {
		resourceURI: string;
		name: string;
		role: string;
	};
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
	dates: Date,
	creators: Creator[],
}
