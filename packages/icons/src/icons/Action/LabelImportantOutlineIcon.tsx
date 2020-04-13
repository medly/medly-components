import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LabelImportantOutlineIconSvg from '../../assets/Action/label_important_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LabelImportantOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LabelImportantOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LabelImportantOutlineIcon.Style = SvgIcon;
LabelImportantOutlineIcon.displayName = 'LabelImportantOutlineIcon';

export default LabelImportantOutlineIcon
