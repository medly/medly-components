import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning41LineIconSvg from '../../assets/GSDD/Warning_41_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning41LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning41LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning41LineIcon.Style = SvgIcon;
Warning41LineIcon.displayName = 'Warning41LineIcon';

export default Warning41LineIcon
