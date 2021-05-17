import { NgModule } from '@angular/core';
import {CommonModule}from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';

import {BannerComponent}from'./components/banner/banner.component';
import {HomeComponent}from'./components/home/home.component';
import {HomeRoutingModule}from './home-routing.module';
import { from } from 'rxjs';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent
    ],
    imports:[
        HomeRoutingModule,
        CommonModule,
    ]
})
export class HomeModule{
    
}