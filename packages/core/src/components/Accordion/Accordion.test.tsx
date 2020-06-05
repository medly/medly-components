import { render } from '@test-utils';
import React from 'react';
import { Accordion } from './Accordion';
import { fireEvent, waitFor } from '@testing-library/dom';

describe('Accordion component', () => {

    const renderAccordion = () =>
        render(
            <Accordion title="Test Accordion">
                <p>Test Text</p>
            </Accordion>
        )
    it('should render accordion with default prop values', () => {
        const { container } = renderAccordion();
        expect(container).toMatchSnapshot();
    });

    it('should render children when accordion is clicked', async () => {
        const { getByText, queryByText  } = renderAccordion();
        fireEvent.click(getByText(/Test Accordion/));
        await waitFor(() => expect(getByText(/Test Text/)).toBeInTheDocument());
        fireEvent.click(getByText(/Test Accordion/));
        expect(queryByText(/Test Text/)).not.toBeInTheDocument();
    });
});
