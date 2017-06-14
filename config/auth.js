module.exports = {
    'facebookAuth': {
        'clientID': '1689573841352159', // your App ID
        'clientSecret': '15f23902e2aa94936e46f147432fb9cc', // your App Secret
        'callbackURL': '/facebook/callback', //cllback url,
        "profileFields": ['id', 'displayName', 'name', 'gender', 'emails', 'photos']
    },
    'googleAuth': {
        'clientID': '417352517428-4avuav932p6tms8j1d0n69a53jjs3sre.apps.googleusercontent.com', // your App ID
        'clientSecret': 's2uk6kyAHOrcT6xK5adWTmX2', // your App Secret
        'callbackURL': '/google/callback', //callback url
        "profileFields": ['id', 'displayName', 'name', 'gender', 'emails','photos']
    }
};
