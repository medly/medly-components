import { render } from '@test-utils';
import { NavItem } from './NavItem.styled';

describe('Header NavItem', () => {
    test.each([true, false])(`should render properly when isActive is set to %p`, isActive => {
        const { container } = render(<NavItem isActive={isActive} />);
        expect(container).toMatchSnapshot();
    });
});
