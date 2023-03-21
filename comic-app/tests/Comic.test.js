import next from 'next';
import moment from 'moment';
import { fireEvent, render, screen, waitFor, cleanup, debug } from "@testing-library/react";
import Comic from '../src/components/Comic';
import "@testing-library/jest-dom";

afterEach(cleanup);

const comic = {
    id: 87,
    title: 'The One Above All: Vol 1',
    date: '2022-12-25T00:00:00-0400',
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

const undefinedProps = {
	creators: '',
	date: '',
};

test('<Comic />', async () => {
    const {debug, getyByText, queryByTestId, getByTestId } = render(<Comic comic={comic}/>);
    const creators = comic.creators?.map(({ name }) => name.split(' ')[1]).join(', ');
    const publishDate = comic.date;
    const formattedDate = moment(publishDate).format('LL');

    console.log(formattedDate);
    console.log(comic.date);

    expect(getByTestId('comic-title').textContent).toBe(comic.title);
    expect(queryByTestId('comic-publishDate').textContent).toBe(`Published: ${ formattedDate }`);
    expect(getByTestId('comic-issueNumber').textContent).toBe(`Issue: ${ comic.issueNumber }`);
    expect(getByTestId('comic-creators').textContent).toBe(`Creators: ${ creators }`);
    debug();
});