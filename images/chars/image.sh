#!/bin/bash
x=65
while [ $x -le 537 ]
do
  gm convert char.png -resize "$x"x"$x" char$x.png
  x=$(( $x + 1 ))
done
