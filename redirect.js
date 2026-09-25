function target(pathname, hash) {
	var path = pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '');
	if (path === '') return 'https://sqlbuild.com/';
	if (/^\/(concepts\/virtual-environments|cli\/(promote|rollback|reconcile|state))(\/|$)/.test(path)) {
		return 'https://sqlbuild.com/docs/';
	}
	if (/\.[a-z0-9]+$/i.test(path)) return 'https://sqlbuild.com' + path;
	return 'https://sqlbuild.com/docs' + path + '/' + (hash || '');
}
