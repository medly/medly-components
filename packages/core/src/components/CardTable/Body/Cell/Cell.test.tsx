import { render } from '@test-utils';
import Text from '../../../Text';
import { ColumnConfig } from '../../types';
import { Cell } from './Cell';
import { StyledProps } from './types';

const renderer = (columnConfig: ColumnConfig) =>
    render(
        <table>
            <tbody>
                <tr>
                    <Cell column={columnConfig} data="text" rowId="1" rowData={{}} />
                </tr>
            </tbody>
        </table>
    );

describe('CardTable Cell', () => {
    it('should render cell with text properly', () => {
        const { container } = renderer({
            title: 'Column 1',
            field: 'column1'
        });
        expect(container).toMatchSnapshot();
    });

    test.each([false, true])('should render cell with text component with wrap text as %s', wrapText => {
        const config: ColumnConfig = {
                wrapText,
                title: 'Column 1',
                field: 'column1',
                component: Text
            },
            { container } = renderer(config);
        expect(container).toMatchSnapshot();
    });

    const positions: Required<StyledProps>['align'][] = ['left', 'center', 'right'];

    test.each(positions)('should be able to %p align', align => {
        const { container } = renderer({
            align,
            title: 'Column 1',
            field: 'column1'
        });
        expect(container).toMatchSnapshot();
    });
});
