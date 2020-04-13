import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SubdirectoryArrowRightIconSvg from '../../assets/Navigation/subdirectory_arrow_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubdirectoryArrowRightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SubdirectoryArrowRightIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SubdirectoryArrowRightIcon.Style = SvgIcon;
SubdirectoryArrowRightIcon.displayName = 'SubdirectoryArrowRightIcon';

export default SubdirectoryArrowRightIcon
