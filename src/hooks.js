import { deLocalizeUrl } from '$paraglide/runtime.js';

export const reroute = (request) => {
    console.log(request.url)
    console.log(deLocalizeUrl(request.url).pathname)
	return deLocalizeUrl(request.url).pathname;
};
