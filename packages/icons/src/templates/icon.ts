export const iconTemplate = (iconName: string, assetPath: string) => `import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ${iconName}Svg from '${assetPath}';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const ${iconName}: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <${iconName}Svg {...props} width="1em" height="1em" />
    </SvgIcon>
));

${iconName}.Style = SvgIcon;
${iconName}.displayName = '${iconName}';

export default ${iconName}
`;
