export const deviceCheck = () => {
    let activeScreen = "";
    const deviceWidth = window.innerWidth;

    if (deviceWidth < 768) {
        activeScreen = "mobile";
    } else if (deviceWidth > 768 && deviceWidth < 1024) {
        activeScreen = "tablet";
    } else {
        activeScreen = "desktop";
    }

    return activeScreen;
}