import deprecatedModule from './deprecatedModule';
Object.defineProperties(module.exports, {
    Updates: {
        enumerable: true,
        get() {
            deprecatedModule(`import { Updates } from 'expo' -> import * as Updates from 'expo-updates'\n`, 'Updates', 'expo-updates', 'Note the breaking changes in the new Updates API: https://docs.expo.io/versions/v37.0.0/sdk/updates/#legacy-api . The legacy API will be removed in SDK 38.');
            return require('./Updates/Updates');
        },
    },
    Linking: {
        enumerable: true,
        get() {
            deprecatedModule(`import { Linking } from 'expo' -> import * as Linking from 'expo-linking'\n`, 'Linking', 'expo-linking');
            return require('expo-linking');
        },
    },
    Notifications: {
        enumerable: true,
        get() {
            deprecatedModule(`import { Notifications } from 'expo' -> import * as Notifications from 'expo-notifications'\n`, 'Notifications', 'expo-notifications', 'Note the breaking changes in the new Notifications API: https://docs.expo.io/versions/latest/sdk/notifications/ . This legacy API will be removed in SDK 40.');
            return require('./Notifications/Notifications').default;
        },
    },
});
//# sourceMappingURL=deprecated.js.map