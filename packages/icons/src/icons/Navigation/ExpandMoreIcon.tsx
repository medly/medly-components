import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExpandMoreIconSvg from '../../assets/Navigation/expand_more_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExpandMoreIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExpandMoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExpandMoreIcon.Style = SvgIcon;
ExpandMoreIcon.displayName = 'ExpandMoreIcon';

export default ExpandMoreIcon
