module.exports = {
    'facebookAuth': {
        'clientID': '1851117141877304', // your App ID
        'clientSecret': '2d1083acdaaba722b638036ae6c77cd9', // your App Secret
        'callbackURL': '/facebook/callback', //cllback url,
        "profileFields": ['id', 'displayName', 'name', 'gender', 'emails', 'photos']
    },
    'googleAuth': {
        'clientID': '657934561560-2b8q91j0hkhn6i20m6k8cvuunhe2pbem.apps.googleusercontent.com', // your App ID
        'clientSecret': 'nqycJG21RTQuaxz5qpc_R87i', // your App Secret
        'callbackURL': '/google/callback', //callback url
        "profileFields": ['id', 'displayName', 'name', 'gender', 'emails','photos']
    }
};
