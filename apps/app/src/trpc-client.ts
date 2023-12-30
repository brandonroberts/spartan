import { inject } from '@angular/core';
import { createTrpcClient } from '@spartan-ng/trpc';
import superjson from 'superjson';
import { AppRouter } from './server/trpc/routers';

export const { provideTrpcClient, tRPCClient } = createTrpcClient<AppRouter>({
	url: 'http://127.0.0.1:4200/api/trpc',
	options: {
		transformer: superjson,
	},
});

export function injectTRPCClient() {
	return inject(tRPCClient);
}
