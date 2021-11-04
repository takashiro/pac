import find from '../src';
import { proxy, direct } from '../src/config';

it('should proxy these websites', () => {
	expect(find('', 'github.com')).toBe(proxy);
	expect(find('', 'gov.tw')).toBe(proxy);
	expect(find('', 'moe.gov.tw')).toBe(proxy);
	expect(find('', 'www.moe.gov.tw')).toBe(proxy);
});

it('should ignore these websites', () => {
	expect(find('', 'qq.com')).toBe(direct);
});
