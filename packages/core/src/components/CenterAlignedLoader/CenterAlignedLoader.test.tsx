import { ConcentricCircleLoader } from '@medly-components/loaders';
import { render, screen } from '@test-utils';
import { CenterAlignedLoader } from './CenterAlignedLoader';

describe('Center Aligned Loader', () => {
    it('should render properly with default props', () => {
        render(<CenterAlignedLoader />);
        expect(screen.getByTitle('circle-loader')).toBeInTheDocument();
    });

    it('should render properly with all props given', () => {
        render(
            <CenterAlignedLoader
                withLoadingBox
                withOverlay
                position="absolute"
                loadingMessage=""
                loader={<ConcentricCircleLoader size="XS" title="concentric-circle-loader" />}
            />
        );
        expect(screen.getByTitle('concentric-circle-loader')).toBeInTheDocument();
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render properly with custom loading message', () => {
        render(<CenterAlignedLoader withLoadingBox loadingMessage="custom loading message" />);
        expect(screen.getByTitle('circle-loader')).toBeInTheDocument();
        expect(screen.getByText('custom loading message')).toBeInTheDocument();
    });
});
