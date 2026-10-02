/** Prefix an internal path with Astro's configured base, without duplicate slashes. */
export function withBase(path: `/${string}`): string {
	return `${import.meta.env.BASE_URL.replace(/\/+$/, '')}${path}`;
}
