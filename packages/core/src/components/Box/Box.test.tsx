import { render } from '@test-utils';
import { Box } from './Box';
import { BoxProps } from './types';

describe('Box Component', () => {
    it('should render properly', () => {
        const { container } = render(<Box>Box</Box>);
        expect(container).toMatchSnapshot();
    });

    it('should render properly when loading', () => {
        const { container } = render(<Box isLoading>Box</Box>);
        expect(container).toMatchSnapshot();
    });

    it('should wrap children into Text component when rendering string or number', () => {
        const { container } = render(
            <Box>
                Some text
                <i>some icon</i>
                <div>element2</div>
            </Box>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly with given bg and color', () => {
        const { container } = render(
            <Box color="white" bg="black">
                Box
            </Box>
        );
        expect(container).toMatchSnapshot();
        expect(container.querySelector('div')).toHaveStyle({ backgroundColor: 'black', color: 'white' });
    });

    it('should render properly with given height and width', () => {
        const { container } = render(
            <Box height="100%" width="100%">
                Box
            </Box>
        );
        expect(container).toMatchSnapshot();
        expect(container.querySelector('div')).toHaveStyle({ height: '100%', width: '100%' });
    });

    it('should render properly with border', () => {
        const { container } = render(
            <Box borderColor="tomato" borderWidth={1}>
                Box
            </Box>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not render with border if borderWidth is not provided', () => {
        const { container } = render(<Box borderColor="tomato">Box</Box>);
        expect(container).toMatchSnapshot();
    });

    it('should not render with border if borderColor is not provided', () => {
        const { container } = render(<Box borderWidth={1}>Box</Box>);
        expect(container).toMatchSnapshot();
    });

    it('should render with given shadowColor', () => {
        const { container } = render(
            <Box shadowColor="tomato" shadowSize="M">
                Box
            </Box>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not render with given shadowColor if shadow size is not present', () => {
        const { container } = render(<Box shadowColor="tomato">Box</Box>);
        expect(container).toMatchSnapshot();
        expect(container.querySelector('div')).toHaveStyle({ boxShadow: 'none' });
    });

    it('should render with given margin', () => {
        const { container } = render(
            <Box mx={2} my={4}>
                Box
            </Box>
        );
        expect(container).toMatchSnapshot();
        expect(container.querySelector('div')).toHaveStyle({ margin: 'calc(4 * 0.25rem) calc(2 * 0.25rem)' });
    });

    it('should render with given padding', () => {
        const { container } = render(
            <Box px={2} py={4}>
                Box
            </Box>
        );
        expect(container).toMatchSnapshot();
        expect(container.querySelector('div')).toHaveStyle({ padding: 'calc(4 * 0.25rem) calc(2 * 0.25rem)' });
    });

    const shadowOptions: BoxProps['shadowSize'][] = ['S', 'M', 'L', 'XL'];

    it.each(shadowOptions)('should render properly with %p shadow size', shadowSize => {
        const { container } = render(<Box shadowSize={shadowSize}>Box</Box>);
        expect(container).toMatchSnapshot();
    });

    it.each(shadowOptions)('should render properly with %s size and loading state', shadowSize => {
        const { container } = render(
            <Box shadowSize={shadowSize} isLoading>
                Box
            </Box>
        );
        expect(container).toMatchSnapshot();
    });
});
