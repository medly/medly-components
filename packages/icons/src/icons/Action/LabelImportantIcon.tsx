import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LabelImportantIconSvg from '../../assets/Action/label_important_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LabelImportantIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LabelImportantIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LabelImportantIcon.Style = SvgIcon;
LabelImportantIcon.displayName = 'LabelImportantIcon';

export default LabelImportantIcon
