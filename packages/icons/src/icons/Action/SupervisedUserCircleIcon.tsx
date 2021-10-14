import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SupervisedUserCircleIconSvg from '../../assets/Action/supervised_user_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SupervisedUserCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SupervisedUserCircleIcon';

const SupervisedUserCircleIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SupervisedUserCircleIcon;
