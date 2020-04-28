import { AvatarTheme } from './types';

const avatar: AvatarTheme = {
    sizes: {
        S: {
            avatarSize: '32px',
            fontSize: '14px',
        },
        M: {
            avatarSize: '40px',
            fontSize: '16px',
        },
        L: {
            avatarSize: '48px',
            fontSize: '20px',
            // lineHeight: '24px',
        }
    },
    defaults: {
        size: 'M',
        textColor: '#005AEE',
        bgColor: '#E6EFFD',
        lineHeight: '20px',
        fontFamily: '',
        fontWeight: 'normal',
        hoverBoxShadowColor: '0 0.4rem 0.8rem rgba(0, 90, 238, 0.35)',
        imgHoverShadowColor: '0 0.4rem 0.8rem rgba(96, 120, 144, 0.35)',
        hoverTextColor: '#FFFFFF',
        hoverBgColor: '#1A6BF0',
        borderColor: '#DFE4E9',
    }
};

export default avatar;
