import { render } from '@test-utils';
import Text from '../Text';
import { Link } from './Link';

describe('Link Component', () => {
    it('should render with default props', () => {
        const { container } = render(<Link href="#">Test</Link>);
        expect(container).toMatchSnapshot();
    });

    it('should render with component as child', () => {
        const { container } = render(
            <Link href="#">
                <Text>help me Mr Kite man</Text>
            </Link>
        );
        expect(container).toMatchSnapshot();
    });
});
