import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TonalityIconSvg from '../../assets/Image/tonality_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TonalityIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TonalityIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TonalityIcon.Style = SvgIcon;
TonalityIcon.displayName = 'TonalityIcon';

export default TonalityIcon
