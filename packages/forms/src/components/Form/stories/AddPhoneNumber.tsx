import { Button } from '@medly-components/core';
import { FormCustomComponent } from '../../Fields/types';
import CustomPhoneField from './CustomPhoneField';

type AddPhoneNumberProps = { fields: { [key: string]: any }[]; setFields: (data: any) => void };

export const AddPhoneNumber: FormCustomComponent<AddPhoneNumberProps> = ({ fields, setFields }) => {
    const lastField = fields[fields.length - 1];
    const newFieldIndex = lastField.index + 1;
    const disabled = newFieldIndex > 3;

    const addPhoneNumberField = () =>
        setFields([
            ...fields,
            {
                fieldName: `phone${newFieldIndex}`,
                index: newFieldIndex,
                type: 'custom',
                component: CustomPhoneField,
                setFields: setFields
            }
        ]);
    return (
        <div>
            <Button onClick={addPhoneNumberField} variant="flat" size="XS" disabled={disabled}>
                + Add phone number
            </Button>
        </div>
    );
};
