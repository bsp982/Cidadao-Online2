import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'br.com.sonner.portalmobile',
    appName: 'Cidadão Online',
    webDir: 'www',
    server: {
        androidScheme: 'http'
    },
    plugins: {
        PushNotifications: {
            presentationOptions: ["badge", "sound", "alert"],
        },
        BackgroundGeolocation: {
            notificationTitle: "Background Tracking",
            notificationText: "ENABLED",
            notificationIconColor: "#FEDD1E",
            notificationIconLarge: "mappointer_large",
            notificationIconSmall: "mappointer_small"
        },
        SplashScreen: {
            launchShowDuration: 1000,
            launchAutoHide: true,
            launchFadeOutDuration: 1000,
            "backgroundColor": "#ffffff",
            androidSplashResourceName: "launch_splash",
            androidScaleType: "CENTER_CROP",
            showSpinner: true,
            androidSpinnerStyle: "large",
            iosSpinnerStyle: "small",
            spinnerColor: "#999999",
            splashFullScreen: true,
            splashImmersive: true,
            layoutName: "launch_screen",
            useDialog: true,
        }
    }
};

export default config;
