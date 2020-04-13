import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ImportContactsIconSvg from '../../assets/Communication/import_contacts_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ImportContactsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ImportContactsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ImportContactsIcon.Style = SvgIcon;
ImportContactsIcon.displayName = 'ImportContactsIcon';

export default ImportContactsIcon
