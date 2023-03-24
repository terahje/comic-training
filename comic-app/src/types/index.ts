export interface Thumbnail { path: string, extension: string }

export interface FetchedResult {
	id: number;
	thumbnail: Thumbnail;
	creators: CreatorCall;
	characters: CharacterCall;
	issueNumber: number;
	title: string;
	dates: Date[];
}

export type Date = {
	type: string,
	date: string,
}

export interface CreatorCall {
	items: Creator[];
}
export interface CharacterCall {
	items: Character[];
}

export interface Creator {
	name: string;
	role: string;
	resourceURI: string;
};
export interface Character {
	name: string;
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

export interface Favorites {
	id: string,
	title: string,
	thumbnail: string,
	issueNumber: number,
}
