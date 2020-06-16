import { Button } from '@medly-components/core';
import React from 'react';
import * as Styled from './Actions.styled';
import { Props } from './types';

export const Actions: React.FC<Props> = React.memo(({ formId, disabled, actionLabel, actionSchema }) => {
    return (
        <Styled.Actions alignItems={actionSchema?.alignItems} flexDirection={actionSchema?.flexDirection}>
            {actionSchema ? (
                <>
                    {actionSchema.actions.map(({ type, label, ...restProps }) => (
                        <Button key={label} form={formId} type={type} disabled={disabled} {...restProps}>
                            {label}
                        </Button>
                    ))}
                </>
            ) : (
                <Button edges="rounded" form={formId} type="submit" disabled={disabled}>
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
