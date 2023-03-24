import { render, cleanup } from "@testing-library/react";
import Comic from '../src/components/Comic';
import "@testing-library/jest-dom";

afterEach(cleanup);

const comic = {
	id: 87,
	title: 'The One Above All: Vol 1',
	dates: [
		{
			date: "2022-10-19T00:00:00-0400",
			type: "focDate"
		}
	],
	issueNumber : 87,
	creators: [
		{
			name: 'Jim Me'
		},
		{
			name: 'He Him'
		}
	],
}

test('<Comic />', async () => {
	const {debug, getByTestId } = render(<Comic comic={comic}/>);
	const creators = comic.creators?.map(({ name }) => name.split(' ')[1]).join(', ');

	expect(getByTestId('comic-title').textContent).toBe(comic.title);
	expect(getByTestId("comic-publishDate").textContent).toBe("Published: October 18, 2022");
	expect(getByTestId('comic-issueNumber').textContent).toBe(`Issue: ${ comic.issueNumber }`);
	expect(getByTestId('comic-creators').textContent).toBe(`Creators: ${ creators }`);
	debug();
});