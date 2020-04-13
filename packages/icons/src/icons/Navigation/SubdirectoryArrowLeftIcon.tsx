import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SubdirectoryArrowLeftIconSvg from '../../assets/Navigation/subdirectory_arrow_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubdirectoryArrowLeftIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SubdirectoryArrowLeftIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SubdirectoryArrowLeftIcon.Style = SvgIcon;
SubdirectoryArrowLeftIcon.displayName = 'SubdirectoryArrowLeftIcon';

export default SubdirectoryArrowLeftIcon
