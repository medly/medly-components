import { defaultTheme } from '@medly-components/theme/src';
import { styled } from '@medly-components/utils';
import { select, text } from '@storybook/addon-knobs';
import React, { useCallback, useState } from 'react';
import Button from '../Button';
import CheckboxGroup from '../CheckboxGroup';
import DateRangePicker from '../DateRangePicker';
import MultiSelect from '../MultiSelect';
import Text from '../Text';
import { Drawer } from './Drawer';

const FilterHeaderStyled = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.4rem 0 1.5rem;

    ${Button.Style} {
        padding: 0;
    }
`;

const FilterHeader: React.FC<{ label: string; onClear: () => void }> = React.memo(({ label, onClear }) => (
    <FilterHeaderStyled>
        <Text textVariant="h5" textColor={defaultTheme.colors.grey[600]}>
            {label}
        </Text>
        <Button variant="flat" onClick={onClear}>
            <Text textVariant="button2" textColor={defaultTheme.colors.blue[500]}>
                Clear
            </Text>
        </Button>
    </FilterHeaderStyled>
));
FilterHeader.displayName = 'FilterHeader';

export const Basic = () => {
    const [drawerState, setDrawerState] = useState(false),
        [contract, setContract] = useState({ startDate: null, endDate: null }),
        [values, setLocation] = useState(['Delhi']),
        [brand, setBrands] = useState(['Honda']),
        locationOptions = [
            { value: 'Delhi', label: 'Delhi' },
            { value: 'Pune', label: 'Pune' }
        ],
        brandOptions = [
            { value: 'Honda', label: 'Honda' },
            { value: 'Hyundai', label: 'Hyundai' },
            { value: 'Jaguar', label: 'Jaguar' }
        ];

    const clearDates = useCallback(() => setContract({ startDate: null, endDate: null }), []),
        clearLocation = useCallback(() => setLocation([]), []),
        clearBrands = useCallback(() => setBrands([]), []),
        clearAll = useCallback(() => {
            clearDates();
            clearLocation();
            clearBrands();
        }, [setLocation, setContract, setBrands]),
        showDrawer = useCallback(() => setDrawerState(true), []),
        hideDrawer = useCallback(() => setDrawerState(false), []);

    return (
        <>
            <Button onClick={showDrawer}>Click to Open</Button>
            <Drawer
                open={drawerState}
                onClose={hideDrawer}
                width={text('Width', '40rem')}
                position={select('Position', ['left', 'right'], 'right')}
            >
                <Drawer.Header>Add Filters</Drawer.Header>
                <Drawer.Content>
                    <FilterHeader label="CONTRACT" onClear={clearDates} />
                    <DateRangePicker value={contract} onChange={setContract} fullWidth withSingleMonth />
                    <FilterHeader label="LOCATION" onClear={clearLocation} />
                    <MultiSelect options={locationOptions} values={values} onChange={setLocation} fullWidth />
                    <FilterHeader label="BRAND" onClear={clearBrands} />
                    <CheckboxGroup fullWidth options={brandOptions} values={brand} onChange={setBrands} />
                </Drawer.Content>
                <Drawer.Footer alignItems="center">
                    <Button variant="flat" onClick={clearAll}>
                        Clear All
                    </Button>
                </Drawer.Footer>
            </Drawer>
        </>
    );
};
