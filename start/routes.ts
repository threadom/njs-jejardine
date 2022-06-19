/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {  return view.render('templates/blank',{content:'dashboard',scripts:['dashboard']}) })

Route.get('/404', async ({ view }) => {  return view.render('templates/blank',{content:'404'}) })
Route.get('/blank', async ({ view }) => {  return view.render('templates/blank',{content:'blank'}) })
Route.get('/buttons', async ({ view }) => {  return view.render('templates/blank',{content:'buttons'}) })
Route.get('/cards', async ({ view }) => {  return view.render('templates/blank',{content:'cards'}) })

Route.get('/charts', async ({ view }) => {  return view.render('templates/blank',{content:'charts',scripts:['charts']}) })
Route.get('/dashboard', async ({ view }) => {  return view.render('templates/blank',{content:'dashboard',scripts:['dashboard']}) })
Route.get('/tables', async ({ view }) => {  return view.render('templates/blank',{content:'tables',scripts:['tables']}) })

Route.get('/login', async ({ view }) => {  return view.render('templates/full',{content:'login'}) })
Route.get('/register', async ({ view }) => {  return view.render('templates/full',{content:'register'}) })
Route.get('/forgot-password', async ({ view }) => {  return view.render('templates/full',{content:'forgot-password'}) })

Route.get('/utilities-animation', async ({ view }) => {  return view.render('templates/blank',{content:'utilities-animation'}) })
Route.get('/utilities-border', async ({ view }) => {  return view.render('templates/blank',{content:'utilities-border'}) })
Route.get('/utilities-color', async ({ view }) => {  return view.render('templates/blank',{content:'utilities-color'}) })
Route.get('/utilities-other', async ({ view }) => {  return view.render('templates/blank',{content:'utilities-other'}) })
