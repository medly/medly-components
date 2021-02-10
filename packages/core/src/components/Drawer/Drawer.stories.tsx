import React, { useCallback, useState } from 'react';
import { select, text } from '@storybook/addon-knobs';
import Button from '../Button';
import CheckboxGroup from '../CheckboxGroup';
import DateRangePicker from '../DateRangePicker';
import MultiSelect from '../MultiSelect';
import { Drawer } from './Drawer';

export const Basic = () => {
    const [drawerState, setDrawerState] = useState(false);
    const changeDrawerState = useCallback(() => setDrawerState(val => !val), []);
    const [dates, setDates] = useState({ startDate: null, endDate: null });
    const [values, setValues] = useState(['Lorem pharmacy']);
    const [cars, setCars] = useState(['Honda']);
    const options = [
        { value: 'Lorem Pharmacy', label: 'Lorem Pharmacy' },
        { value: 'Ipsum Pharmacy', label: 'Ipsum Pharmacy' }
    ];
    const onClearAll = useCallback(() => {
        setValues([]);
        setDates({ startDate: null, endDate: null });
        setCars([]);
    }, [setValues, setDates, setCars]);

    return (
        <>
            <Button onClick={changeDrawerState}>Click to Open</Button>
            <Drawer
                open={drawerState}
                onClose={changeDrawerState}
                width={text('Width', '32rem')}
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
                    <Button variant="flat" onClick={onClearAll}>
                        Clear All
                    </Button>
                </Drawer.Footer>
            </Drawer>
        </>
    );
};
