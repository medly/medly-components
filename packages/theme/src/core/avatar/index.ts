import colors from '../colors';
import { AvatarTheme } from './types';

const avatar: AvatarTheme = {
    sizes: {
        S: {
            avatarSize: '3.2rem',
            fontSize: '1.4rem'
        },
        M: {
            avatarSize: '4rem',
            fontSize: '1.6rem'
        },
        L: {
            avatarSize: '4.8rem',
            fontSize: '2rem'
        }
    },
    defaults: {
        size: 'M',
        textColor: colors.blue[500],
        bgColor: colors.blue[100],
        fontWeight: 'Regular',
        fontFamily: 'Open Sans',
        borderColor: colors.grey[200],
        borderRadius: '50%',
        hover: {
            textShadowColor: 'rgba(0, 90, 238, 0.35)',
            imgShadowColor: 'rgba(96, 120, 144, 0.35)',
            textColor: colors.white,
            bgColor: colors.blue[500]
        },
        pressed: {
            bgColor: colors.blue[600],
            textColor: colors.white
        }
    }
};

export default avatar;
