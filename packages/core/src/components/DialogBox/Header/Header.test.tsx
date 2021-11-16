import { render } from '@test-utils';
import { defaultValues, DialogBoxContext } from '../DialogBox.context';
import { Header } from './Header';

const DialogBoxHeaderRenderer = () => {
    return render(
        <DialogBoxContext.Provider value={{ ...defaultValues }}>
            <Header>test</Header>
        </DialogBoxContext.Provider>
    );
};

describe('DialogBox component header', () => {
    it('should render properly at small screen size', () => {
        const { container } = DialogBoxHeaderRenderer();
        expect(container).toMatchSnapshot();
    });
});
