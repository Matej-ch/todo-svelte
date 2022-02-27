//import cookie from 'cookie';
//import {v4 as uuid} from '@lukeed/uuid';

//export const handle = async ({event, resolve}) => {

//const cookies = cookie.parse(event.request.headers.get('cookie') || '');

//event.locals.userid = cookies.userid || uuid();

//const response = await resolve(event);

/*if (!cookies.userid) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    response.headers.set('set-cookie', cookie.serialize('userid', event.locals.userid, {
        path: '/',
        httpOnly: true
    }));
}*/

//    return await resolve(event);
//};

import {getCookieValue} from '$lib/getCookieValue'

const getThemeFromCookie = (cookie) => {
    return getCookieValue(cookie, 'theme')
}

export const handle = async ({event, resolve}) => {
    const cookie = event.request.headers.get('cookie')
    event.locals.theme = getThemeFromCookie(cookie)

    return resolve(event)
}

export const getSession = ({locals}) => {
    const theme = locals.theme

    return {theme}
}

