import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CasinoIconSvg from '../../assets/Places/casino_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CasinoIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CasinoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CasinoIcon.Style = SvgIcon;
CasinoIcon.displayName = 'CasinoIcon';

export default CasinoIcon
