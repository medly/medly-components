import { RemoveCircleIcon } from '@medly-components/icons';
import { cleanup, render, screen } from '@test-utils';
import { Button } from '../..';
import { TableComponentsCommonPropsContext } from '../context/TableComponentsCommonProps.context';
import { ActionBar } from './ActionBar';

describe('ActionBar component', () => {
    const getButtonElement = (text: string) => (
        <Button size="S" variant="solid">
            <RemoveCircleIcon size="S" />
            {text}
        </Button>
    );
    const renderer = (props: any = { selectedRowIds: [1], actions: [getButtonElement('Lorem')] }) => {
        return render(
            <TableComponentsCommonPropsContext.Provider value={{ ...props }}>
                <ActionBar />
            </TableComponentsCommonPropsContext.Provider>
        );
    };

    afterEach(cleanup);

    it('should render correctly with all the default props', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Lorem')).toBeInTheDocument();
        expect(screen.getByText('1 Rows Selected')).toBeInTheDocument();
    });

    it('should not render Action bar with passed parameters', () => {
        const actionElements = [getButtonElement('Test1'), getButtonElement('Test2')];
        const { container } = renderer({ actions: actionElements, selectedRowIds: [1, 2] });
        expect(screen.getByText('Test1')).toBeInTheDocument();
        expect(screen.getByText('Test2')).toBeInTheDocument();
        expect(screen.getByText('2 Rows Selected')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});
