#!/bin/bash
public_path="../../../public"
cd `dirname $0`
for i in *.png; do ffmpeg -y -i "$i" -q 80 -vf "format=gray,curves=master='0|0 0.7|0 0.825|1 1|1',smartblur=lr=1:ls=1,curves=master='0|0 0.900|0 0.905|1',smartblur=lr=3:ls=1" "$public_path/img/map/${i%.*}.webp"; done
