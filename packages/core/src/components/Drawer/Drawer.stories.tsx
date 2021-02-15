import { select, text } from '@storybook/addon-knobs';
import React, { useCallback, useState } from 'react';
import Button from '../Button';
import CheckboxGroup from '../CheckboxGroup';
import DateRangePicker from '../DateRangePicker';
import MultiSelect from '../MultiSelect';
import { Drawer } from './Drawer';

export const Basic = () => {
    const [drawerState, setDrawerState] = useState(true),
        [dates, setDates] = useState({ startDate: null, endDate: null }),
        [values, setValues] = useState(['Lorem pharmacy']),
        [cars, setCars] = useState(['Honda']),
        options = [
            { value: 'Lorem Pharmacy', label: 'Lorem Pharmacy' },
            { value: 'Ipsum Pharmacy', label: 'Ipsum Pharmacy' }
        ];

    const onClearAll = useCallback(() => {
            setValues([]);
            setDates({ startDate: null, endDate: null });
            setCars([]);
        }, [setValues, setDates, setCars]),
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
                    <DateRangePicker value={dates} onChange={setDates} fullWidth />
                    <MultiSelect label="Pharmacy" options={options} values={values} onChange={setValues} fullWidth />
                    <CheckboxGroup
                        label="Cars"
                        fullWidth
                        options={[
                            { value: 'Honda', label: 'Honda' },
                            { value: 'Hyundai', label: 'Hyundai' },
                            { value: 'Jaguar', label: 'Jaguar' }
                        ]}
                        values={cars}
                        onChange={setCars}
                    />
                </Drawer.Content>
                <Drawer.Footer>
                    <Button variant="flat" onClick={onClearAll} fullWidth>
                        Clear All
                    </Button>
                </Drawer.Footer>
            </Drawer>
        </>
    );
};
