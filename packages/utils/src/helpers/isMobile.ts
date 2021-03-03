export const isMobile =
    typeof window !== 'undefined'
        ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
        : false;
