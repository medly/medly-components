import { defaultTheme } from '@medly-components/theme/src';
import { styled } from '@medly-components/utils';
import { boolean, select, text } from '@storybook/addon-knobs';
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

const FilterHeader: React.FC<{ label: string; onClear: () => void; showClear: boolean }> = React.memo(({ label, onClear, showClear }) => (
    <FilterHeaderStyled>
        <Text textVariant="h5" textColor={defaultTheme.colors.grey[600]}>
            {label}
        </Text>
        {showClear && (
            <Button variant="flat" onClick={onClear}>
                <Text textVariant="button2" textColor={defaultTheme.colors.blue[500]}>
                    Clear
                </Text>
            </Button>
        )}
    </FilterHeaderStyled>
));
FilterHeader.displayName = 'FilterHeader';

export const Basic = () => {
    const [drawerState, setDrawerState] = useState(false),
        [contract, setContract] = useState({ startDate: null, endDate: null }),
        [locations, setLocation] = useState(['Delhi']),
        [brands, setBrands] = useState(['Jaguar']),
        locationOptions = [
            { value: 'Delhi', label: 'Delhi' },
            { value: 'Pune', label: 'Pune' }
        ],
        brandOptions = [
            { value: 'Jaguar', label: 'Jaguar' },
            { value: 'Audi', label: 'Audi' },
            { value: 'Ferrari', label: 'Ferrari' },
            { value: 'GMC', label: 'GMC' },
            { value: 'Ford', label: 'Ford' },
            { value: 'Kia', label: 'Kia' },
            { value: 'Jeep', label: 'Jeep' },
            { value: 'Citroen', label: 'Citroen' },
            { value: 'BMW', label: 'BMW' },
            { value: 'Land Rover', label: 'Land Rover' },
            { value: 'Maserati', label: 'Maserati' },
            { value: 'Pagani', label: 'Pagani' },
            { value: 'Tesla', label: 'Tesla' },
            { value: 'Porsche', label: 'Porsche' },
            { value: 'Lamborghini', label: 'Lamborghini' },
            { value: 'Chevrolet', label: 'Chevrolet' },
            { value: 'Bentley', label: 'Bentley' },
            { value: 'McLaren', label: 'McLaren' },
            { value: 'Honda', label: 'Honda' },
            { value: 'Hyundai', label: 'Hyundai' },
            { value: 'Fiat', label: 'Fiat' }
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
                withOverlay={boolean('With Overlay', true)}
            >
                <Drawer.Header>Add Filters</Drawer.Header>
                <Drawer.Content>
                    <FilterHeader label="CONTRACT" onClear={clearDates} showClear={contract.startDate || contract.endDate} />
                    <DateRangePicker value={contract} onChange={setContract} fullWidth withSingleMonth />
                    <FilterHeader label="LOCATION" onClear={clearLocation} showClear={locations.length > 0} />
                    <MultiSelect options={locationOptions} values={locations} onChange={setLocation} fullWidth />
                    <FilterHeader label="BRAND" onClear={clearBrands} showClear={brands.length > 0} />
                    <CheckboxGroup fullWidth options={brandOptions} values={brands} onChange={setBrands} />
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
