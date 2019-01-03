function FindProxyForURL(url, host){
	if (shExpMatch (host, "56.*.*.*")){
		return "PROXY 56.88.105.23:8080";
	}
	
	if (isInNet(host, "56.*.*.*", "255.255.255.0")){
		return "PROXY 56.88.105.23:8080";
	}
	
	if (isInNet(dnsResolve(host), "56.*.*.*", "255.255.255.0")){
		return "PROXY 56.88.105.23:8080";
	}
	return "DIRECT";
}
