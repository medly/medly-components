import { render } from '@test-utils';
import { defaultValues, ModalContext } from '../Modal.context';
import { Header } from './Header';

const ModalHeaderRenderer = ({ isSmallScreen = true }: { isSmallScreen: boolean }) => {
    return render(
        <ModalContext.Provider value={{ ...defaultValues, isSmallScreen }}>
            <Header>test</Header>
        </ModalContext.Provider>
    );
};

describe('Modal component header', () => {
    it('should render properly at small screen size', () => {
        const { container } = ModalHeaderRenderer({ isSmallScreen: true });
        expect(container).toMatchSnapshot();
    });
});
