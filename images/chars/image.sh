#!/bin/bash
x=1
while [ $x -le 700 ]
do
  gm convert char.png -scale "$x"x"$x" char$x.png
  x=$(( $x + 1 ))
done
