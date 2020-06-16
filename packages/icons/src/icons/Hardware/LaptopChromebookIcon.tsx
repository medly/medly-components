import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LaptopChromebookIconSvg from '../../assets/Hardware/laptop_chromebook_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LaptopChromebookIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LaptopChromebookIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LaptopChromebookIcon.Style = SvgIcon;
LaptopChromebookIcon.displayName = 'LaptopChromebookIcon';

export default LaptopChromebookIcon
