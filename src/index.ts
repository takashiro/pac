import * as config from './config';

const hosts = new Set<string>(config.protectedHosts);

export default function FindProxyForURL(url: string, host: string): string {
	if (hosts.has(host)) {
		return config.proxy;
	}

	let domain = host;
	let dot = domain.indexOf('.');
	while (dot >= 0) {
		domain = domain.substring(dot + 1);
		if (domain && hosts.has(domain)) {
			return config.proxy;
		}

		dot = domain.indexOf('.');
	}

	return config.direct;
}
