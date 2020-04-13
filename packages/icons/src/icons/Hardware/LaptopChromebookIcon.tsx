import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LaptopChromebookIconSvg from '../../assets/Hardware/laptop_chromebook_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LaptopChromebookIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LaptopChromebookIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LaptopChromebookIcon.Style = SvgIcon;
LaptopChromebookIcon.displayName = 'LaptopChromebookIcon';

export default LaptopChromebookIcon
