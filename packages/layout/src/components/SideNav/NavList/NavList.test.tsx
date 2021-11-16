import { cleanup, render } from '@test-utils';
import { NavList } from './NavList.styled';

describe('NavList', () => {
    afterEach(cleanup);

    it('should render properly', () => {
        const { container } = render(<NavList>Dummy</NavList>);
        expect(container).toMatchSnapshot();
    });
});
