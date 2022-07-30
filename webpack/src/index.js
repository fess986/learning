//import * as $ from 'jquery'   // импортируем всё в объект $ из библиотеки jquery
//import JSON from "@assets/json"  // использование alias из конфига для сокращения пути 
//import XML from './assets/data.xml'
// import WebpackLogo from "./assets/webpack-logo.png"
import Post from "./Post"
import './babel'
import './styles/styles.css'
import './styles/sass/main.scss'


const post = new Post('webpack post')

// $('pre').html(post.toString())

console.log(post.toString())
console.log(JSON)
// console.log(XML)