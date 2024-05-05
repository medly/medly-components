import { Button } from '@medly-components/core';
import { FCC, memo } from 'react';
import * as Styled from './Actions.styled';
import { ActionProps } from './types';

export const Actions: FCC<ActionProps> = memo(({ formId, disabled, actionLabel, actionSchema, isLoading }) => {
    return (
        <Styled.Actions alignItems={actionSchema?.alignItems} flexDirection={actionSchema?.flexDirection || 'row'}>
            {actionSchema ? (
                <>
                    {actionSchema.actions.map(({ type, label, ...restProps }) => (
                        <Button key={label} form={formId} type={type} disabled={disabled} isLoading={isLoading} {...restProps}>
                            {label}
                        </Button>
                    ))}
                </>
            ) : (
                <Button edges="rounded" form={formId} type="submit" isLoading={isLoading} disabled={disabled}>
                    {actionLabel}
                </Button>
            )}
        </Styled.Actions>
    );
});
Actions.displayName = 'Actions';
Actions.defaultProps = {
    actionLabel: 'Submit'
};
