const wInfoStyle = {
    infoBody: {
        lineHeight: '2'
    }
};
export const wInfo = (text: string) => ({ info: { text, inline: false, header: false, source: true, styles: wInfoStyle } });
