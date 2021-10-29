import { Button, TextField } from '@medly-components/core';
import React, { ChangeEvent, useCallback } from 'react';
import { FormCustomComponent } from '../../Fields/types';

type CustomPhoneFieldProps = {
    setFields: (data: any) => void;
};

const CustomPhoneField: FormCustomComponent<CustomPhoneFieldProps> = ({ value, name, onRemoveField, onChange, setFields }) => {
    const handleOnRemoveField = useCallback(() => {
        setFields((fields: Record<string, string>[]) => fields.filter(field => field.fieldName !== name));
        onRemoveField(name);
    }, [name, onRemoveField, setFields]);
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
            <Button variant="flat" size="XS" onClick={handleOnRemoveField}>
                Remove
            </Button>
        </div>
    );
};

export default CustomPhoneField;
