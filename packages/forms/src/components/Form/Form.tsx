import { Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useMemo } from 'react';
import { createObjectFromDottedKeys } from '../../helpers';
import useForm from '../../hooks/useForm';
import Actions from '../Actions';
import Fields from '../Fields';
import * as Styled from './Form.styled';
import { FormProps } from './types';

const Component: React.FC<FormProps> = React.memo(
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
                showDecorators,
                variant,
                isLoading,
                ...restProps
            },
            ref
        ) => {
            const formId = useMemo(() => id || 'medly-dynamic-form', [id]),
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                { values, formKey, handlers, errorMessages, addErrorMessage, setErrorMessages } = useForm(initialState!),
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
                >
                    {header && <Text textVariant="h2">{header}</Text>}
                    {helperText && <Text textVariant="body1">{helperText}</Text>}
                    <Fields
                        errorMessages={errorMessages}
                        addErrorMessage={addErrorMessage}
                        fields={fields}
                        values={values}
                        handlers={handlers}
                        disabled={disabled || isLoading}
                        showDecorators={showDecorators}
                        variant={variant}
                    />
                    {!hideActions && (
                        <Actions
                            actionSchema={actionSchema}
                            formId={formId}
                            isLoading={isLoading}
                            disabled={disabled}
                            actionLabel={actionLabel}
                        />
                    )}
                </Styled.Form>
            );
        }
    )
);
Component.displayName = 'Form';
Component.defaultProps = {
    initialState: {},
    hideActions: false,
    disabled: false,
    fullWidth: false,
    showDecorators: true,
    isLoading: false
};

export const Form: React.FC<FormProps> & WithStyle = Object.assign(Component, { Style: Styled.Form });
