import { fireEvent, render } from '@test-utils';
import React from 'react';
import { Accordion } from './Accordion';

describe('Accordion component', () => {
    const renderAccordion = () =>
        render(
            <Accordion>
                <Accordion.Header>List Of Components</Accordion.Header>
                <Accordion.Content>Avatar</Accordion.Content>
            </Accordion>
        );
    it('should render properly', () => {
        const { container } = renderAccordion();
        expect(container).toMatchSnapshot();
    });

    it('should render content when header is clicked', async () => {
        const { getByText, getByRole } = renderAccordion();
        fireEvent.click(getByText(/List Of Components/));
        expect(getByRole('region')).toHaveStyle(`opacity: 1; max-height: 100vh`);
        fireEvent.click(getByText(/List Of Components/));
        expect(getByRole('region')).toHaveStyle(`opacity: 0; max-height: 0`);
    });
});
