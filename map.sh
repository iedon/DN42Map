#!/bin/bash
cd /dev/shm/
if [ ! -d /dev/shm/registry ]; then
	/usr/bin/git clone http://git.dn42.us/dn42/registry.git
else
	cd /dev/shm/registry/
	/usr/bin/git pull origin master
fi
exit 0
