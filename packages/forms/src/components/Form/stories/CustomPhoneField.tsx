import React, { ChangeEvent, FC } from 'react';
import { Button, TextField } from '@medly-components/core';

type CustomPhoneFieldProps = {
    value: string;
    name: string;
    onChange: (name: string, value: string) => void;
    onRemoveField: (name: string) => void;
};
const CustomPhoneField: FC<CustomPhoneFieldProps> = ({ value, name, onRemoveField, onChange }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                value={value}
                name={name}
                label="Phone number"
                required
                fullWidth
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(name, e.target.value)}
            />
            <Button variant="flat" size="XS" onClick={() => onRemoveField(name)}>
                Remove
            </Button>
        </div>
    );
};

export default CustomPhoneField;
