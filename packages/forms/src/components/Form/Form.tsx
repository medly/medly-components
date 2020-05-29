import { Button } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useMemo } from 'react';
import useForm from '../../hooks/useForm';
import Fields from '../Fields';
import * as Styled from './Form.styled';
import { Props } from './types';

export const Form: React.SFC<Props> & WithStyle = React.memo(
    React.forwardRef(({ disabled, hideActions, apiErrorMessages, initialState, actionLabel, onSubmit, id, schema, ...restProps }, ref) => {
        const { values, handlers, errorMessages, addErrorMessage, setErrorMessages } = useForm(initialState),
            formId = useMemo(() => id || 'medly-dynamic-form', [id]);

        useEffect(() => {
            apiErrorMessages && Object.keys(apiErrorMessages).length && setErrorMessages(apiErrorMessages);
        }, [apiErrorMessages]);

        return (
            <Styled.Form id={formId} ref={ref} onSubmit={handlers.handleFormSubmit(onSubmit)} {...restProps}>
                <Fields
                    errorMessages={errorMessages}
                    addErrorMessage={addErrorMessage}
                    fields={schema}
                    values={values}
                    handlers={handlers}
                    disabled={disabled}
                />
                {!hideActions && (
                    <Styled.Actions>
                        <Button form={formId} type="submit" disabled={disabled}>
                            {actionLabel}
                        </Button>
                    </Styled.Actions>
                )}
            </Styled.Form>
        );
    })
);
Form.displayName = 'Form';
Form.Style = Styled.Form;
Form.defaultProps = {
    initialState: {},
    hideActions: false,
    disabled: false,
    actionLabel: 'Save',
    fullWidth: false
};
