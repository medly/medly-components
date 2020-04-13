import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ItalIconSvg from '../../assets/Editor/ital_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ItalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ItalIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ItalIcon.Style = SvgIcon;
ItalIcon.displayName = 'ItalIcon';

export default ItalIcon
