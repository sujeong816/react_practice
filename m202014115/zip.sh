#!/bin/bash

studentNo=201014199

time=`date +"%H%M"`
fileName=m${studentNo}-${time}.tgz

tar cvzf ${fileName} --exclude="node_modules" --exclude="*.tgz" *