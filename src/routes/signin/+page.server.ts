import { signIn } from '../../auth';
import type { Actions } from '@sveltejs/kit';
export const actions: Actions = { default: signIn };
