import { ClearIcon, DoneIcon, ErrorIcon, NotificationsIcon, WarningAmberIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback } from 'react';
import Text from '../Text';
import { removeToast } from '../ToastContainer/ToastStore';
import * as Styled from './Toast.styled';
import { Props } from './types';

export const Toast: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, variant, header, icon: Icon, message, ...restProps } = props;

        const handleClose = useCallback(() => removeToast(id), [id]);

        return (
            <Styled.Toast ref={ref} variant={variant} {...restProps}>
                <Styled.SvgWrapper variant={variant}>
                    {Icon ? (
                        <Icon />
                    ) : (
                        {
                            error: <ErrorIcon />,
                            warning: <WarningAmberIcon />,
                            info: <NotificationsIcon />,
                            success: <DoneIcon />
                        }[variant]
                    )}
                </Styled.SvgWrapper>
                <Styled.ToastContent>
                    {header && <Text textWeight="Medium">{header}</Text>}
                    {message && <Text fullWidth>{message}</Text>}
                </Styled.ToastContent>
                <ClearIcon size="M" onClick={handleClose} />
            </Styled.Toast>
        );
    })
);
Toast.displayName = 'Toast';
Toast.Style = Styled.Toast;
