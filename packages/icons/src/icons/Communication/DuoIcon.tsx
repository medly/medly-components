import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DuoIconSvg from '../../assets/Communication/duo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DuoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DuoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DuoIcon.Style = SvgIcon;
DuoIcon.displayName = 'DuoIcon';

export default DuoIcon
