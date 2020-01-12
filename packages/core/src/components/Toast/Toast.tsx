import { BugIcon, CheckCircleIcon, ClearIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from '@medly-components/icons';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { SFC, useEffect, useState } from 'react';
import Text from '../Text';
import * as Styled from './Toast.styled';
import { Props } from './types';

export const Toast: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { variant, onClose, ...restProps } = props,
            [show, setShowState] = useState(false);

        useEffect(() => {
            setShowState(true);
        }, []);

        return (
            <Styled.Toast ref={ref} show={show} variant={variant} {...restProps}>
                {
                    {
                        error: <BugIcon />,
                        warning: <ExclamationTriangleIcon />,
                        info: <ExclamationCircleIcon />,
                        success: <CheckCircleIcon />
                    }[variant]
                }
                {React.Children.map(props.children, c => {
                    return isValidStringOrNumber(c) ? <Text>{c}</Text> : c;
                })}
                <ClearIcon onClick={onClose} />
            </Styled.Toast>
        );
    })
);
Toast.displayName = 'Toast';
Toast.Style = Styled.Toast;
