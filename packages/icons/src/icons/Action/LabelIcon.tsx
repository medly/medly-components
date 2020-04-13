import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LabelIconSvg from '../../assets/Action/label_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LabelIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LabelIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LabelIcon.Style = SvgIcon;
LabelIcon.displayName = 'LabelIcon';

export default LabelIcon
