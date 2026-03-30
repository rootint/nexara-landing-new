import { deLocalizeUrl } from '$paraglide/runtime.js';

export const reroute = (request) => {
	return deLocalizeUrl(request.url).pathname;
};
