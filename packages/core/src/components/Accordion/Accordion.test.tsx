import { Text } from '@medly-components/core';
import { fireEvent, render, screen } from '@test-utils';
import { useState } from 'react';
import { Accordion } from './Accordion';
import { AccordionProps } from './types';

const AccordionWithExternalState = () => {
    const [active, setActive] = useState(false);
    return (
        <>
            {active && <Text id="active">active is true</Text>}
            <Accordion active={active} onChange={setActive}>
                <Accordion.Header>List Of Components</Accordion.Header>
                <Accordion.Content>Avatar</Accordion.Content>
            </Accordion>
        </>
    );
};

describe('Accordion component', () => {
    const renderAccordion = ({ defaultActive }: AccordionProps) =>
        render(
            <Accordion defaultActive={defaultActive}>
                <Accordion.Header>List Of Components</Accordion.Header>
                <Accordion.Content>Avatar</Accordion.Content>
            </Accordion>
        );

    it('should render properly', () => {
        const { container } = renderAccordion({});
        expect(container).toMatchSnapshot();
    });

    it('should render content when header is clicked', async () => {
        renderAccordion({});
        fireEvent.click(screen.getByText(/List Of Components/));
        expect(screen.getByRole('region')).toHaveStyle(`opacity: 1`);
        fireEvent.click(screen.getByText(/List Of Components/));
        expect(screen.getByRole('region')).toHaveStyle(`opacity: 0; max-height: 0`);
    });

    it('should show content when defaultActive is true', () => {
        renderAccordion({ defaultActive: true });
        expect(screen.getByRole('region')).toHaveStyle(`opacity: 1`);
    });

    it('should change external state when header is clicked', () => {
        const { container } = render(<AccordionWithExternalState />);
        expect(screen.getByRole('region')).toHaveStyle(`opacity: 0; max-height: 0`);
        fireEvent.click(screen.getByText(/List Of Components/));
        expect(container.querySelector('#active')).toBeInTheDocument();
        expect(screen.getByRole('region')).toHaveStyle(`opacity: 1`);
    });
});
