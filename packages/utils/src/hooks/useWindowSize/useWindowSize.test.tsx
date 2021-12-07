import { render, screen } from '@test-utils';
import { fireEvent } from '@testing-library/react';
import { useWindowSize } from './useWindowSize';

const DummyComp = () => {
    const { height, width } = useWindowSize();

    return (
        <>
            <p>The current window dimensions are: </p>
            <code>{JSON.stringify({ height, width })}</code>
        </>
    );
};

describe('useWindowSize', () => {
    it('should return expected window dimensions on initial render', () => {
        render(<DummyComp />);
        expect(screen.getByText(`{"height":768,"width":1024}`)).toBeInTheDocument();
    });

    it('should return expected window dimensions on window resize', async () => {
        render(<DummyComp />);
        Object.defineProperty(window, 'innerWidth', { value: 500 });
        fireEvent(window, new Event('resize'));
        await screen.findByText(`{"height":768,"width":500}`);
    });
});
