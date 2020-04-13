import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PictureAsPdfIconSvg from '../../assets/Image/picture_as_pdf_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PictureAsPdfIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PictureAsPdfIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PictureAsPdfIcon.Style = SvgIcon;
PictureAsPdfIcon.displayName = 'PictureAsPdfIcon';

export default PictureAsPdfIcon
