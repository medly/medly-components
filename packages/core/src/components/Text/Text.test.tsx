import { render } from '@test-utils';
import { Text } from './Text';

describe('Text Component', () => {
    it('should render span element by default', () => {
        const { container } = render(<Text />);
        expect(container).toMatchSnapshot();
    });

    it('should render strong html tag for textWeight Strong', () => {
        const { container } = render(<Text textWeight="Strong" />);
        expect(container).toMatchSnapshot();
    });

    it('should render strong html tag for textWeight ExtraStrong', () => {
        const { container } = render(<Text textWeight="ExtraStrong" />);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props', () => {
        const { container } = render(<Text fullWidth textVariant="body2" textWeight="Light" textColor="pink" uppercase lineThrough />);
        expect(container).toMatchSnapshot();
    });
});
