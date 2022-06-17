import { render, screen } from '@test-utils';
import { RefObject } from 'react';
import { defaultKeyBindings } from '../constants';
import { TableComponentsCommonPropsContext } from '../context';
import testColumns from '../docs/columns';
import testData from '../docs/data';
import Body from './Body';

const tableRef = {
    current: {
        scrollWidth: 300,
        offsetWidth: 200,
        clientWidth: 200,
        scrollLeft: 1,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        getBoundingClientRect: jest.fn().mockImplementation(() => ({
            bottom: 100
        })),
        scroll: jest.fn()
    }
} as unknown as RefObject<HTMLTableElement>;

const setUniqueIds = jest.fn(),
    onRowSelection = jest.fn(),
    setSelectAllDisableState = jest.fn(),
    onGroupedRowSelection = jest.fn(),
    defaultProps = {
        setUniqueIds,
        selectedRowIds: [1],
        onRowSelection,
        showShadowAfterFrozenElement: false,
        setSelectAllDisableState,
        onGroupedRowSelection
    },
    contextValue = {
        columns: testColumns,
        size: 'S' as 'XS' | 'S' | 'M' | 'L',
        rowIdentifier: testColumns[0].field,
        data: testData,
        isGroupedTable: false,
        tableRef,
        hiddenDivRef: tableRef,
        addColumnMaxSize: jest.fn(),
        keyBindings: {
            ...defaultKeyBindings
        }
    },
    renderer = (props = defaultProps, context = contextValue) =>
        render(
            <TableComponentsCommonPropsContext.Provider value={context}>
                <Body {...props} />
            </TableComponentsCommonPropsContext.Provider>
        );

describe('Row', () => {
    it('should render tbody properly with default props', () => {
        const { container } = renderer();
        expect(screen.getByText(testData[0].name)).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should render tbody properly with `No result` content', () => {
        renderer(defaultProps, { ...contextValue, data: [] });
        expect(screen.getByText('No result')).toBeInTheDocument();
    });
});
