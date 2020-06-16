import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import EqIconSvg from '../../assets/Device/eq_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EqIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EqIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EqIcon.Style = SvgIcon;
EqIcon.displayName = 'EqIcon';

export default EqIcon
