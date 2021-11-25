import { render } from '@test-utils';
import { Input } from './Input';

describe('Input component', () => {
    it('should render correctly with all the props given', () => {
        const { container } = render(
            <Input
                id="email-input"
                type="email"
                fullWidth
                label="Email Address"
                labelPosition="top"
                required
                placeholder="Enter Email Address"
                prefix="www."
                suffix=".com"
                description="We will never share your email with anyone"
                descriptionColor="grey"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when fullWidth & required props are falsy', () => {
        const { container } = render(
            <Input
                type="email"
                label="Email Address"
                labelPosition="left"
                placeholder="Enter Email Address"
                description="We will never share your email with anyone"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when label and description are not given', () => {
        const { container } = render(<Input id="email-input" type="email" placeholder="Enter Email Address" />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when it is disabled', () => {
        const { container } = render(<Input id="email-input" disabled placeholder="Enter Email Address" />);
        expect(container).toMatchSnapshot();
    });
});
