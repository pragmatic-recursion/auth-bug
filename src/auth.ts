import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';

import {
	PRIVATE_AUTH_SECRET,
	PRIVATE_GITHUB_CLIENT_ID,
	PRIVATE_GITHUB_CLIENT_SECRET
} from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
	const authOptions = {
		providers: [
			GitHub({
				clientId: PRIVATE_GITHUB_CLIENT_ID,
				clientSecret: PRIVATE_GITHUB_CLIENT_SECRET
			})
		],
		secret: PRIVATE_AUTH_SECRET,
		trustHost: true
	};
	return authOptions;
});
