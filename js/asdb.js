function aao(n, v) {
	if (!n || !v)
		return -1;
	init_asdb(n);
	init_asdb(v);
	asdb[n][asdb[n]['c']] = v;
	asdb[n]['hc'] = gi;
	asdb[n]['c']++;
	asdb[v][asdb[v]['c']] = n;
	asdb[v]['c']++;
	asdb[n]['hc'] = gi;
}

function init_asdb(k) {
	if (k && asdb[k] == null) {
		asdb[k] = new Array();
		asdb[k]['c'] = 0;
	}
}