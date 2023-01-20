#!/bin/bash

read -p "enter number " number
echo "your number is $number"

if [ "$number" == 5 ]; then
	echo "your number is five"
elif [ "$number" -lt 5 ]; then
	echo "your number is less then five. -lt = >, -gt = <"	
else
	echo "your number is more than five"
fi

