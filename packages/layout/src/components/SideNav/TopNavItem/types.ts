import { SvgIconProps } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';

export interface Props {
    open: boolean;
    burgerIconClickHandler: () => void;
    logo?: React.FunctionComponent<SvgIconProps> & WithStyle;
}
