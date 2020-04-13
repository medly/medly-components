import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CategoryIconSvg from '../../assets/Maps/category_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CategoryIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CategoryIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CategoryIcon.Style = SvgIcon;
CategoryIcon.displayName = 'CategoryIcon';

export default CategoryIcon
