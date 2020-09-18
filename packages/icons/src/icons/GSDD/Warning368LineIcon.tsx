import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning368LineIconSvg from '../../assets/GSDD/Warning_368_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning368LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning368LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning368LineIcon.Style = SvgIcon;
Warning368LineIcon.displayName = 'Warning368LineIcon';

export default Warning368LineIcon
