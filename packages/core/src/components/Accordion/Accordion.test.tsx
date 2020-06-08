import { fireEvent, render, waitFor } from '@test-utils';
import React from 'react';
import { Accordion } from './Accordion';

describe('Accordion component', () => {
    const renderAccordion = () =>
        render(
            <Accordion>
                <Accordion.Title>List Of Components</Accordion.Title>
                <Accordion.Content>Avatar</Accordion.Content>
            </Accordion>
        );
    it('should render properly', () => {
        const { container } = renderAccordion();
        expect(container).toMatchSnapshot();
    });

    it('should render content when title is clicked', async () => {
        const { getByText, queryByText, container } = renderAccordion();
        fireEvent.click(getByText(/List Of Components/));
        await waitFor(() => expect(getByText(/Avatar/)).toBeInTheDocument());
        expect(container).toMatchSnapshot();
        fireEvent.click(getByText(/List Of Components/));
        expect(queryByText(/Avatar/)).not.toBeInTheDocument();
    });
});
