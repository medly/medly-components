import { render } from '@test-utils';
import { Actions } from './Actions';

describe('Form Actions', () => {
    it('should render default action button', () => {
        const { container } = render(<Actions disabled formId="dummy" actionLabel="Save" />);
        expect(container).toMatchSnapshot();
    });

    it('should render left aligned actions defined in action schema', () => {
        const { container } = render(
            <Actions
                disabled
                formId="dummy"
                actionSchema={{
                    alignItems: 'left',
                    flexDirection: 'row',
                    actions: [{ type: 'submit', label: 'Submit' }]
                }}
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render center aligned actions defined in action schema', () => {
        const { container } = render(
            <Actions
                disabled
                formId="dummy"
                actionSchema={{
                    alignItems: 'center',
                    flexDirection: 'column',
                    actions: [{ type: 'submit', label: 'Submit' }]
                }}
            />
        );
        expect(container).toMatchSnapshot();
    });
});
