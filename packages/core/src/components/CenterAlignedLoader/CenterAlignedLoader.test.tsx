import { ConcentricCircleLoader } from '@medly-components/loaders';
import { render } from '@test-utils';
import { CenterAlignedLoader } from './CenterAlignedLoader';

describe('Center Aligned Loader', () => {
    it('should render properly with default props', () => {
        const { container } = render(<CenterAlignedLoader />);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with all props given', () => {
        const { container } = render(
            <CenterAlignedLoader withLoadingBox withOverlay position="absolute" loader={<ConcentricCircleLoader size="XS" />} />
        );
        expect(container).toMatchSnapshot();
    });
});
