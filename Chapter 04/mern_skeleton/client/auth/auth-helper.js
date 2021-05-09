/**
 * Define helper methods that will help both store & retrieve JWT credentials from 
 * client-side storage (session/local[Storage]) as well as clearing out the storage 
 * upon signout.
 */

import { signout } from "./api-auth";

/**
 * Save credentials received from the server upon successful sign-in.
 * 
 * @param - jwt (json web token)
 * @cb - callback function invoked by component responsible for signing in
 */

const auth = {
    authenticate(jwt, cb){
        if(typeof window !== "undefined") {
            sessionStorage.setItem('jwt', JSON.stringify(jwt));
        }
        cb();
    },

    /**
     * Retrieving credentials
     */

    isAuthenticated() {
        if(typeof window == "undefined") {
            return false;
        }

        if(sessionStorage.getItem('jwt')){
            return JSON.parse(sessionStorage.getItem('jwt'));
        } else {
            return false;
        }
    },

    /**
     * Deleting credentials upon user signout
     */
    clearJWT(cb) {
        if(typeof window !== 'undefined') {
            sessionStorage.removeItem('jwt');
        }
        cb();
        signout().then((data) => {
            document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        });
    }
}

export default auth;