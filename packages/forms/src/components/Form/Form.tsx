import { Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useMemo } from 'react';
import { createObjectFromDottedKeys } from '../../helpers';
import useForm from '../../hooks/useForm';
import Actions from '../Actions';
import Fields from '../Fields';
import * as Styled from './Form.styled';
import { Props } from './types';

export const Form: React.FC<Props> & WithStyle = React.memo(
    React.forwardRef(
        (
            {
                header,
                helperText,
                disabled,
                hideActions,
                apiErrorMessages,
                initialState,
                actionLabel,
                actionSchema,
                onSubmit,
                onReset,
                id,
                onChange,
                fieldSchema,
                gridGap,
                readOnly,
                fullWidth,
                variant,
                ...restProps
            },
            ref
        ) => {
            const formId = useMemo(() => id || 'medly-dynamic-form', [id]),
                { values, formKey, handlers, errorMessages, addErrorMessage, setErrorMessages } = useForm(initialState),
                fields = useMemo(() => (typeof fieldSchema === 'object' ? fieldSchema : fieldSchema(values)), [values, fieldSchema]);

            useEffect(() => {
                apiErrorMessages && Object.keys(apiErrorMessages).length && setErrorMessages(apiErrorMessages);
            }, [apiErrorMessages]);

            useEffect(() => {
                onChange && onChange(createObjectFromDottedKeys(values));
            }, [values]);

            return (
                <Styled.Form
                    {...restProps}
                    id={formId}
                    ref={ref}
                    key={formKey}
                    onSubmit={handlers.handleFormSubmit(onSubmit)}
                    onReset={handlers.handleFormReset(onReset)}
                    gridGap={gridGap}
                    fullWidth={fullWidth}
                >
                    {header && <Text textVariant="h2">{header}</Text>}
                    {helperText && <Text textVariant="body1">{helperText}</Text>}
                    <Fields
                        errorMessages={errorMessages}
                        addErrorMessage={addErrorMessage}
                        fields={fields}
                        values={values}
                        handlers={handlers}
                        disabled={disabled}
                        readOnly={readOnly}
                        variant={variant}
                    />
                    {!hideActions && <Actions actionSchema={actionSchema} formId={formId} disabled={disabled} actionLabel={actionLabel} />}
                </Styled.Form>
            );
        }
    )
);
Form.displayName = 'Form';
Form.Style = Styled.Form;
Form.defaultProps = {
    initialState: {},
    hideActions: false,
    disabled: false,
    fullWidth: false
};
