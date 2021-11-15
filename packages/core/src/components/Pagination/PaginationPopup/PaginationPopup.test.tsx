import { cleanup, fireEvent, render } from '@test-utils';
import PaginationPopup from '.';
import Popover from '../../Popover';

describe('Pagination popup component', () => {
    const renderer = (props: any = { prevPageNumber: 1, nextPageNumber: 3 }) => {
        const mockOnPageClick = jest.fn();
        return {
            mockOnPageClick,
            ...render(
                <Popover interactionType="click">
                    <PaginationPopup {...props} onClickHandler={mockOnPageClick} />
                </Popover>
            )
        };
    };

    afterEach(cleanup);

    it('should render correctly with all the default props', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should call onClick handler with expected page when selected from ellipsis popover', () => {
        const { mockOnPageClick, getByRole } = renderer();
        fireEvent.click(getByRole('button', { name: '...' }));
        fireEvent.click(getByRole('button', { name: '2' }));
        expect(mockOnPageClick).toBeCalledWith(2);
    });
});
