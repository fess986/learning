#!/bin/bash

echo 'starting script...'
echo 'скрипт запускает материалы для проекта "what to watch react"...'

echo 'открываем техзадание проекта...'
evince --preview ~/Desktop/Projects/what-to-watch-js3-react/tz.pdf

echo 'открываем комитты учебного проекта...'
firefox https://github.com/htmlacademy/guess-melody-demo/commits/season/10?before=3b3cc71c2bc6a43b5d117a98ec6d90995fd9a111+70&branch=season%2F10&qualified_name=refs%2Fheads%2Fseason%2F10

echo 'открываем гитхаб проекта'
firefox https://github.com/fess986/what-to-watch-js3-react & exit

echo 'script is end succesfull!'
