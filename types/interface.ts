import { ReactElement } from 'react';
export interface IntHero extends IntHeroContent, IntHeroPoster {
    socials:IntSocial[];
}
export interface IntHeroButtons {
    path:string;
    title:string;
}
export interface IntHeroContent {
    buttons:IntHeroButtons[];
    content:string;
    title:string;
}
export interface IntHeroPoster {
    image:string;
    title:string;
}
export interface IntSocial extends IntSocialColor {
    icon:ReactElement;
    path:string;
}
export interface IntSocialColor {
    color:string;
}
export interface IntTimeline {
    title:string;
}
export interface IntTimelineCard extends IntTimeline{
    content:string;
    date:string;
}