import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PlusOneIconSvg from '../../assets/Social/plus_one_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlusOneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PlusOneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PlusOneIcon.Style = SvgIcon;
PlusOneIcon.displayName = 'PlusOneIcon';

export default PlusOneIcon
