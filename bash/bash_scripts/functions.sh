#!/bin/bash

divide() {
	echo "Params is: $1 and $2"
	
	if [ $2 == 0 ]; then
		echo "error division by zero"
	else
		res=$(($1 / $2))
		echo "$res"
	fi
}

divide 10 5
divide 10 0
