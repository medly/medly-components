import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FastfoodIconSvg from '../../assets/Maps/fastfood_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FastfoodIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FastfoodIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FastfoodIcon.Style = SvgIcon;
FastfoodIcon.displayName = 'FastfoodIcon';

export default FastfoodIcon
