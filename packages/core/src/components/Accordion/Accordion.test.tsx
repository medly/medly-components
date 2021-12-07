import { fireEvent, render, screen } from '@test-utils';
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
        renderAccordion();
        fireEvent.click(screen.getByText(/List Of Components/));
        expect(screen.getByRole('region')).toHaveStyle(`opacity: 1; max-height: 100vh`);
        fireEvent.click(screen.getByText(/List Of Components/));
        expect(screen.getByRole('region')).toHaveStyle(`opacity: 0; max-height: 0`);
    });
});
