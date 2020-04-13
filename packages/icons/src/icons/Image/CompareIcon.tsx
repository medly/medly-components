import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CompareIconSvg from '../../assets/Image/compare_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CompareIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CompareIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CompareIcon.Style = SvgIcon;
CompareIcon.displayName = 'CompareIcon';

export default CompareIcon
