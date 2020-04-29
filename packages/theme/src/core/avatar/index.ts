import { AvatarTheme } from './types';

const avatar: AvatarTheme = {
    sizes: {
        S: {
            avatarSize: '32px',
            fontSize: '14px',
            lineHeight: '20px',
        },
        M: {
            avatarSize: '40px',
            fontSize: '16px',
            lineHeight: '20px',
        },
        L: {
            avatarSize: '48px',
            fontSize: '20px',
            lineHeight: '24px',
        }
    },
    defaults: {
        size: 'M',
        textColor: '#005AEE',
        bgColor: '#E6EFFD',
        fontWeight: 'normal',
        textHoverShadowColor: '#005aee',
        imgHoverShadowColor: '#607890',
        hoverTextColor: '#FFFFFF',
        hoverBgColor: '#1A6BF0',
        borderColor: '#DFE4E9',
    }
};

export default avatar;
