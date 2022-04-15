import { ConcentricCircleLoader } from '@medly-components/loaders';
import { render, screen } from '@test-utils';
import { CenterAlignedLoader } from './CenterAlignedLoader';

describe('Center Aligned Loader', () => {
    it('should render properly with default props', () => {
        const { container } = render(<CenterAlignedLoader />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with all props given', () => {
        const { container } = render(
            <CenterAlignedLoader
                withLoadingBox
                withOverlay
                position="absolute"
                loadingMessage=""
                loader={<ConcentricCircleLoader size="XS" />}
            />
        );
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render properly with custom loading message', () => {
        const { container } = render(<CenterAlignedLoader withLoadingBox loadingMessage="custom loading message" />);
        expect(container).toMatchSnapshot();
        expect(screen.getByText('custom loading message')).toBeInTheDocument();
    });
});
