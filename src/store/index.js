import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Height of Fullscreen Window
    fullscreenWindowHeight: window.innerHeight + "px",

    // Active Window State
    activeWindow: "BiographyWindow",

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2,

    photoFiles: [
      {
        id: 0,
        title: "Leica Q",
        content: [
          {
            id: 0,
            title: "Q-3.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica Q/Q-3.JPG",
            altText: "Q-3.JPG",
            size: 2477506,
          },
          {
            id: 1,
            title: "Q-2.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica Q/Q-2.JPG",
            altText: "Q-2.JPG",
            size: 1265051,
          },
          {
            id: 2,
            title: "Q-1.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica Q/Q-1.JPG",
            altText: "Q-1.JPG",
            size: 1366527,
          },
        ],
        size: 5109084,
        type: "folder",
        altText: "Leica Q",
      },
      {
        id: 1,
        title: "Yashica FX-7",
        content: [
          {
            id: 0,
            title: "FX7-8.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-8.JPG",
            altText: "FX7-8.JPG",
            size: 2705525,
          },
          {
            id: 1,
            title: "FX7-1.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-1.JPG",
            altText: "FX7-1.JPG",
            size: 3285824,
          },
          {
            id: 2,
            title: "FX7-2.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-2.JPG",
            altText: "FX7-2.JPG",
            size: 2524860,
          },
          {
            id: 3,
            title: "FX7-3.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-3.JPG",
            altText: "FX7-3.JPG",
            size: 2126399,
          },
          {
            id: 4,
            title: "FX7-7.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-7.JPG",
            altText: "FX7-7.JPG",
            size: 2391497,
          },
          {
            id: 5,
            title: "FX7-6.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-6.JPG",
            altText: "FX7-6.JPG",
            size: 1903950,
          },
          {
            id: 6,
            title: "FX7-4.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-4.JPG",
            altText: "FX7-4.JPG",
            size: 2660198,
          },
          {
            id: 7,
            title: "FX7-5.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Yashica FX-7/FX7-5.JPG",
            altText: "FX7-5.JPG",
            size: 720153,
          },
        ],
        size: 18318406,
        type: "folder",
        altText: "Yashica FX-7",
      },
      {
        id: 2,
        title: "Mamiya RB67",
        content: [
          {
            id: 0,
            title: "RB67-17.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-17.JPG",
            altText: "RB67-17.JPG",
            size: 4018715,
          },
          {
            id: 1,
            title: "RB67-16.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-16.JPG",
            altText: "RB67-16.JPG",
            size: 6310380,
          },
          {
            id: 2,
            title: "RB67-14.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-14.JPG",
            altText: "RB67-14.JPG",
            size: 5023300,
          },
          {
            id: 3,
            title: "RB67-15.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-15.JPG",
            altText: "RB67-15.JPG",
            size: 4324262,
          },
          {
            id: 4,
            title: "RB67-11.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-11.JPG",
            altText: "RB67-11.JPG",
            size: 3841978,
          },
          {
            id: 5,
            title: "RB67-10.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-10.JPG",
            altText: "RB67-10.JPG",
            size: 1776580,
          },
          {
            id: 6,
            title: "RB67-12.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-12.JPG",
            altText: "RB67-12.JPG",
            size: 2880049,
          },
          {
            id: 7,
            title: "RB67-13.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-13.JPG",
            altText: "RB67-13.JPG",
            size: 3496524,
          },
          {
            id: 8,
            title: "RB67-8.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-8.JPG",
            altText: "RB67-8.JPG",
            size: 3183608,
          },
          {
            id: 9,
            title: "RB67-9.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-9.JPG",
            altText: "RB67-9.JPG",
            size: 3620249,
          },
          {
            id: 10,
            title: "RB67-4.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-4.JPG",
            altText: "RB67-4.JPG",
            size: 4628923,
          },
          {
            id: 11,
            title: "RB67-5.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-5.JPG",
            altText: "RB67-5.JPG",
            size: 3756349,
          },
          {
            id: 12,
            title: "RB67-7.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-7.JPG",
            altText: "RB67-7.JPG",
            size: 4537069,
          },
          {
            id: 13,
            title: "RB67-6.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-6.JPG",
            altText: "RB67-6.JPG",
            size: 2526863,
          },
          {
            id: 14,
            title: "RB67-2.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-2.JPG",
            altText: "RB67-2.JPG",
            size: 3589326,
          },
          {
            id: 15,
            title: "RB67-3.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-3.JPG",
            altText: "RB67-3.JPG",
            size: 2662097,
          },
          {
            id: 16,
            title: "RB67-1.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-1.JPG",
            altText: "RB67-1.JPG",
            size: 3956155,
          },
          {
            id: 17,
            title: "RB67-22.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-22.JPG",
            altText: "RB67-22.JPG",
            size: 1231755,
          },
          {
            id: 18,
            title: "RB67-23.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-23.JPG",
            altText: "RB67-23.JPG",
            size: 2724006,
          },
          {
            id: 19,
            title: "RB67-21.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-21.JPG",
            altText: "RB67-21.JPG",
            size: 1118255,
          },
          {
            id: 20,
            title: "RB67-20.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-20.JPG",
            altText: "RB67-20.JPG",
            size: 1028996,
          },
          {
            id: 21,
            title: "RB67-18.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-18.JPG",
            altText: "RB67-18.JPG",
            size: 4362951,
          },
          {
            id: 22,
            title: "RB67-19.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Mamiya RB67/RB67-19.JPG",
            altText: "RB67-19.JPG",
            size: 4082215,
          },
        ],
        size: 78680605,
        type: "folder",
        altText: "Mamiya RB67",
      },
      {
        id: 3,
        title: "Leica M4-P",
        content: [
          {
            id: 0,
            title: "M4P-2.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M4-P/M4P-2.JPG",
            altText: "M4P-2.JPG",
            size: 616758,
          },
          {
            id: 1,
            title: "M4P-3.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M4-P/M4P-3.JPG",
            altText: "M4P-3.JPG",
            size: 671916,
          },
          {
            id: 2,
            title: "M4P-1.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M4-P/M4P-1.JPG",
            altText: "M4P-1.JPG",
            size: 432534,
          },
        ],
        size: 1721208,
        type: "folder",
        altText: "Leica M4-P",
      },
      {
        id: 4,
        title: "Canon FTb",
        content: [
          {
            id: 0,
            title: "FTb-3.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Canon FTb/FTb-3.JPG",
            altText: "FTb-3.JPG",
            size: 1853391,
          },
          {
            id: 1,
            title: "FTb-2.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Canon FTb/FTb-2.JPG",
            altText: "FTb-2.JPG",
            size: 294620,
          },
          {
            id: 2,
            title: "FTb-1.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Canon FTb/FTb-1.JPG",
            altText: "FTb-1.JPG",
            size: 832777,
          },
        ],
        size: 2980788,
        type: "folder",
        altText: "Canon FTb",
      },
      {
        id: 5,
        title: "Minolta Dynax",
        content: [
          {
            id: 0,
            title: "Dynax-4.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-4.JPG",
            altText: "Dynax-4.JPG",
            size: 1565244,
          },
          {
            id: 1,
            title: "Dynax-5.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-5.JPG",
            altText: "Dynax-5.JPG",
            size: 1424551,
          },
          {
            id: 2,
            title: "Dynax-7.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-7.JPG",
            altText: "Dynax-7.JPG",
            size: 1878078,
          },
          {
            id: 3,
            title: "Dynax-6.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-6.JPG",
            altText: "Dynax-6.JPG",
            size: 1467924,
          },
          {
            id: 4,
            title: "Dynax-2.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-2.JPG",
            altText: "Dynax-2.JPG",
            size: 1929487,
          },
          {
            id: 5,
            title: "Dynax-3.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-3.JPG",
            altText: "Dynax-3.JPG",
            size: 1827869,
          },
          {
            id: 6,
            title: "Dynax-1.jpg",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-1.jpg",
            altText: "Dynax-1.jpg",
            size: 1505052,
          },
          {
            id: 7,
            title: "Dynax-11.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-11.JPG",
            altText: "Dynax-11.JPG",
            size: 2111385,
          },
          {
            id: 8,
            title: "Dynax-10.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-10.JPG",
            altText: "Dynax-10.JPG",
            size: 1575287,
          },
          {
            id: 9,
            title: "Dynax-12.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-12.JPG",
            altText: "Dynax-12.JPG",
            size: 952801,
          },
          {
            id: 10,
            title: "Dynax-8.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-8.JPG",
            altText: "Dynax-8.JPG",
            size: 1650754,
          },
          {
            id: 11,
            title: "Dynax-9.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Minolta Dynax/Dynax-9.JPG",
            altText: "Dynax-9.JPG",
            size: 1816302,
          },
        ],
        size: 19704734,
        type: "folder",
        altText: "Minolta Dynax",
      },
      {
        id: 6,
        title: "Rolleiflex K4A",
        content: [
          {
            id: 0,
            title: "K4A-1.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Rolleiflex K4A/K4A-1.JPG",
            altText: "K4A-1.JPG",
            size: 4533313,
          },
          {
            id: 1,
            title: "K4A-2.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Rolleiflex K4A/K4A-2.JPG",
            altText: "K4A-2.JPG",
            size: 2715035,
          },
          {
            id: 2,
            title: "K4A-3.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Rolleiflex K4A/K4A-3.JPG",
            altText: "K4A-3.JPG",
            size: 3321761,
          },
          {
            id: 3,
            title: "K4A-6.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Rolleiflex K4A/K4A-6.JPG",
            altText: "K4A-6.JPG",
            size: 2095538,
          },
          {
            id: 4,
            title: "K4A-4.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Rolleiflex K4A/K4A-4.JPG",
            altText: "K4A-4.JPG",
            size: 1720820,
          },
          {
            id: 5,
            title: "K4A-5.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Rolleiflex K4A/K4A-5.JPG",
            altText: "K4A-5.JPG",
            size: 2221798,
          },
        ],
        size: 16608265,
        type: "folder",
        altText: "Rolleiflex K4A",
      },
      {
        id: 7,
        title: "Fuji G617",
        content: [
          {
            id: 0,
            title: "G617-3.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Fuji G617/G617-3.JPG",
            altText: "G617-3.JPG",
            size: 1783412,
          },
          {
            id: 1,
            title: "G617-2.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Fuji G617/G617-2.JPG",
            altText: "G617-2.JPG",
            size: 1720995,
          },
          {
            id: 2,
            title: "G617-1.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Fuji G617/G617-1.JPG",
            altText: "G617-1.JPG",
            size: 1729038,
          },
          {
            id: 3,
            title: "G617-5.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Fuji G617/G617-5.JPG",
            altText: "G617-5.JPG",
            size: 1506793,
          },
          {
            id: 4,
            title: "G617-4.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Fuji G617/G617-4.JPG",
            altText: "G617-4.JPG",
            size: 1570263,
          },
        ],
        size: 8310501,
        type: "folder",
        altText: "Fuji G617",
      },
      {
        id: 8,
        title: "Leica M3",
        content: [
          {
            id: 0,
            title: "M3-33.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-33.JPG",
            altText: "M3-33.JPG",
            size: 852940,
          },
          {
            id: 1,
            title: "M3-27.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-27.JPG",
            altText: "M3-27.JPG",
            size: 1744815,
          },
          {
            id: 2,
            title: "M3-2.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-2.JPG",
            altText: "M3-2.JPG",
            size: 910816,
          },
          {
            id: 3,
            title: "M3-3.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-3.JPG",
            altText: "M3-3.JPG",
            size: 1982342,
          },
          {
            id: 4,
            title: "M3-26.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-26.JPG",
            altText: "M3-26.JPG",
            size: 2460131,
          },
          {
            id: 5,
            title: "M3-32.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-32.JPG",
            altText: "M3-32.JPG",
            size: 1022058,
          },
          {
            id: 6,
            title: "M3-24.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-24.JPG",
            altText: "M3-24.JPG",
            size: 1438429,
          },
          {
            id: 7,
            title: "M3-30.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-30.JPG",
            altText: "M3-30.JPG",
            size: 2656606,
          },
          {
            id: 8,
            title: "M3-18.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-18.JPG",
            altText: "M3-18.JPG",
            size: 2572457,
          },
          {
            id: 9,
            title: "M3-1.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-1.JPG",
            altText: "M3-1.JPG",
            size: 947821,
          },
          {
            id: 10,
            title: "M3-19.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-19.JPG",
            altText: "M3-19.JPG",
            size: 2674248,
          },
          {
            id: 11,
            title: "M3-31.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-31.JPG",
            altText: "M3-31.JPG",
            size: 809256,
          },
          {
            id: 12,
            title: "M3-25.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-25.JPG",
            altText: "M3-25.JPG",
            size: 1990432,
          },
          {
            id: 13,
            title: "M3-21.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-21.JPG",
            altText: "M3-21.JPG",
            size: 3539590,
          },
          {
            id: 14,
            title: "M3-35.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-35.JPG",
            altText: "M3-35.JPG",
            size: 869398,
          },
          {
            id: 15,
            title: "M3-4.jpg",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-4.jpg",
            altText: "M3-4.jpg",
            size: 2532715,
          },
          {
            id: 16,
            title: "M3-5.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-5.JPG",
            altText: "M3-5.JPG",
            size: 744483,
          },
          {
            id: 17,
            title: "M3-34.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-34.JPG",
            altText: "M3-34.JPG",
            size: 1035700,
          },
          {
            id: 18,
            title: "M3-20.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-20.JPG",
            altText: "M3-20.JPG",
            size: 2287979,
          },
          {
            id: 19,
            title: "M3-36.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-36.JPG",
            altText: "M3-36.JPG",
            size: 1067729,
          },
          {
            id: 20,
            title: "M3-22.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-22.JPG",
            altText: "M3-22.JPG",
            size: 2322286,
          },
          {
            id: 21,
            title: "M3-7.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-7.JPG",
            altText: "M3-7.JPG",
            size: 827370,
          },
          {
            id: 22,
            title: "M3-6.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-6.JPG",
            altText: "M3-6.JPG",
            size: 1157164,
          },
          {
            id: 23,
            title: "M3-23.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-23.JPG",
            altText: "M3-23.JPG",
            size: 2597351,
          },
          {
            id: 24,
            title: "M3-37.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-37.JPG",
            altText: "M3-37.JPG",
            size: 815457,
          },
          {
            id: 25,
            title: "M3-50.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-50.JPG",
            altText: "M3-50.JPG",
            size: 1119928,
          },
          {
            id: 26,
            title: "M3-44.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-44.JPG",
            altText: "M3-44.JPG",
            size: 757988,
          },
          {
            id: 27,
            title: "M3-45.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-45.JPG",
            altText: "M3-45.JPG",
            size: 1274517,
          },
          {
            id: 28,
            title: "M3-51.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-51.JPG",
            altText: "M3-51.JPG",
            size: 1783101,
          },
          {
            id: 29,
            title: "M3-47.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-47.JPG",
            altText: "M3-47.JPG",
            size: 1008929,
          },
          {
            id: 30,
            title: "M3-53.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-53.JPG",
            altText: "M3-53.JPG",
            size: 2421371,
          },
          {
            id: 31,
            title: "M3-52.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-52.JPG",
            altText: "M3-52.JPG",
            size: 2112080,
          },
          {
            id: 32,
            title: "M3-46.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-46.JPG",
            altText: "M3-46.JPG",
            size: 767638,
          },
          {
            id: 33,
            title: "M3-42.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-42.JPG",
            altText: "M3-42.JPG",
            size: 716074,
          },
          {
            id: 34,
            title: "M3-56.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-56.JPG",
            altText: "M3-56.JPG",
            size: 523248,
          },
          {
            id: 35,
            title: "M3-57.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-57.JPG",
            altText: "M3-57.JPG",
            size: 734875,
          },
          {
            id: 36,
            title: "M3-43.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-43.JPG",
            altText: "M3-43.JPG",
            size: 641204,
          },
          {
            id: 37,
            title: "M3-55.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-55.JPG",
            altText: "M3-55.JPG",
            size: 2078049,
          },
          {
            id: 38,
            title: "M3-41.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-41.JPG",
            altText: "M3-41.JPG",
            size: 944823,
          },
          {
            id: 39,
            title: "M3-40.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-40.JPG",
            altText: "M3-40.JPG",
            size: 804392,
          },
          {
            id: 40,
            title: "M3-54.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-54.JPG",
            altText: "M3-54.JPG",
            size: 641347,
          },
          {
            id: 41,
            title: "M3-59.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-59.JPG",
            altText: "M3-59.JPG",
            size: 1082101,
          },
          {
            id: 42,
            title: "M3-58.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-58.JPG",
            altText: "M3-58.JPG",
            size: 619018,
          },
          {
            id: 43,
            title: "M3-63.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-63.JPG",
            altText: "M3-63.JPG",
            size: 705959,
          },
          {
            id: 44,
            title: "M3-62.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-62.JPG",
            altText: "M3-62.JPG",
            size: 1937518,
          },
          {
            id: 45,
            title: "M3-48.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-48.JPG",
            altText: "M3-48.JPG",
            size: 702641,
          },
          {
            id: 46,
            title: "M3-60.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-60.JPG",
            altText: "M3-60.JPG",
            size: 2063091,
          },
          {
            id: 47,
            title: "M3-61.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-61.JPG",
            altText: "M3-61.JPG",
            size: 1834262,
          },
          {
            id: 48,
            title: "M3-49.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-49.JPG",
            altText: "M3-49.JPG",
            size: 753450,
          },
          {
            id: 49,
            title: "M3-12.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-12.JPG",
            altText: "M3-12.JPG",
            size: 1350738,
          },
          {
            id: 50,
            title: "M3-13.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-13.JPG",
            altText: "M3-13.JPG",
            size: 1123064,
          },
          {
            id: 51,
            title: "M3-11.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-11.JPG",
            altText: "M3-11.JPG",
            size: 763125,
          },
          {
            id: 52,
            title: "M3-39.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-39.JPG",
            altText: "M3-39.JPG",
            size: 597701,
          },
          {
            id: 53,
            title: "M3-8.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-8.JPG",
            altText: "M3-8.JPG",
            size: 1254391,
          },
          {
            id: 54,
            title: "M3-9.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-9.JPG",
            altText: "M3-9.JPG",
            size: 1411428,
          },
          {
            id: 55,
            title: "M3-38.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-38.JPG",
            altText: "M3-38.JPG",
            size: 853279,
          },
          {
            id: 56,
            title: "M3-10.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-10.JPG",
            altText: "M3-10.JPG",
            size: 907174,
          },
          {
            id: 57,
            title: "M3-28.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-28.JPG",
            altText: "M3-28.JPG",
            size: 1956501,
          },
          {
            id: 58,
            title: "M3-14.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-14.JPG",
            altText: "M3-14.JPG",
            size: 1139310,
          },
          {
            id: 59,
            title: "M3-15.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-15.JPG",
            altText: "M3-15.JPG",
            size: 941481,
          },
          {
            id: 60,
            title: "M3-29.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-29.JPG",
            altText: "M3-29.JPG",
            size: 1856275,
          },
          {
            id: 61,
            title: "M3-17.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-17.JPG",
            altText: "M3-17.JPG",
            size: 2771293,
          },
          {
            id: 62,
            title: "M3-16.JPG",
            type: "file",
            src: "https://d3eubay99a85fr.cloudfront.net/Win95 Photos/Leica M3/M3-16.JPG",
            altText: "M3-16.JPG",
            size: 970795,
          },
        ],
        size: 87783732,
        type: "folder",
        altText: "Leica M3",
      },
    ],

    photoFolderContent: [],

    windows: [
      {
        windowId: "BiographyWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Biography", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "bio", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "bio.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Résumé", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "resume", // Window Content (used under slots)
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Résumé", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ImagePreviewWindow",
        windowState: "close",
        displayName: "Media Viewer",
        windowComponent: "ImagePreviewWindow",
        windowContent: "",
        windowContentPadding: {
          top: "1px",
          right: "10px",
          bottom: "10px",
          left: "10px",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "image.png",
        altText: "Photos",
        fullscreen: false,
        showInAppGrid: false,
        showInNavbar: false,
        // imagePreview: file.src
      },
      {
        windowId: "NOSSAFLEXWindow",
        windowState: "close",
        displayName: "NOSSAFLEX",
        windowComponent: "window",
        windowContent: "nossaflex",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "noss.webp",
        altText: "NOSSAFLEX App",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "AppleWWDC2021",
        windowState: "close",
        displayName: "WWDC 2021",
        windowComponent: "window",
        windowContent: "wwdc2021",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "apple.png",
        altText: "Apple WWDC 2021",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "AppleWWDC2022",
        windowState: "close",
        displayName: "WWDC 2022",
        windowComponent: "window",
        windowContent: "wwdc2022",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "apple2.png",
        altText: "Apple WWDC 2022",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "OpenSourceWindow",
        windowState: "close",
        displayName: "Open Source",
        windowComponent: "window",
        windowContent: "opensource",
        windowContentPadding: {
          top: null,
          right: "15px",
          bottom: null,
          left: "15px",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "opensource.png",
        altText: "Open Source Projects",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "MailWindow",
        windowState: "close",
        displayName: "Mail",
        windowComponent: "mail",
        windowContent: "",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "mail.png",
        altText: "Mail",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "WebOSWindow",
        windowState: "close",
        displayName: "OS",
        windowComponent: "webos",
        windowContent: "",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "webos.png",
        altText: "Web OS",
        fullscreen: true,
        showInAppGrid: true,
        showInNavbar: true,
      },
      // register your new windows here
    ],
    mailContent: "",
    mailSender: "",
    mailSubject: "New Message",
  },
  mutations: {
    // Active Window Mutator
    setActiveWindow(state, window) {
      console.log(window);
      state.activeWindow = window;
    },

    pushNewWindow(state, window) {
      state.windows.push(window);
    },

    // Pushes Active Window onto Active Windows Array
    pushActiveWindow(state, window) {
      state.activeWindows.push(window);
    },

    // Removes Active Window from Active Windows Array
    popActiveWindow(state, window) {
      const windowIndex = state.activeWindows.indexOf(window);
      if (windowIndex !== -1) {
        state.activeWindows.splice(windowIndex, 1);
      }
    },

    // Z-index increment function
    zIndexIncrement(state, windowID) {
      state.zIndex += 1;
      document.getElementById(windowID).style.zIndex = state.zIndex;
    },

    // Set height of max-height of fullscreen window
    setFullscreenWindowHeight(state, height) {
      state.fullscreenWindowHeight = height;
    },

    updateMail(state, local) {
      state.isShownMail = local;
    },
    updateMailSubject(state, local) {
      state.mailSubject = local;
    },
    updateMailContent(state, local) {
      state.mailContent = local;
    },
    updateMailSender(state, local) {
      state.mailSender = local;
    },

    setFullscreen(state, payload) {
      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();
      window.fullscreen = payload.fullscreen;
    },

    setPhotoFolderContent(state, payload) {
      state.photoFolderContent = payload;
    },

    setCurrentVideo(state, payload) {
      state.currentVideo = payload;
    },

    // Window State Mutator
    setWindowState(state, payload) {
      // payload = {'windowState': 'open', 'windowID': 'WindowOne'}

      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();

      var preventAppendingOpenWindow = false;
      if (window.windowState == "open" || window.windowState == "minimize") {
        preventAppendingOpenWindow = true;
      }

      if (payload.windowState == "open") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("zIndexIncrement", payload.windowID);
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", payload.windowID);
        }, 0);
        if (preventAppendingOpenWindow == false) {
          setTimeout(() => {
            this.commit("pushActiveWindow", window);
          }, 0);
        }
      } else if (payload.windowState == "close") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("popActiveWindow", window);
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", "nil");
        }, 0);
      } else if (payload.windowState == "minimize") {
        window.windowState = payload.windowState;
        this.commit("setActiveWindow", "nil");
      } else {
        console.log("Error: windowState not found or invalid");
      }
    },
  },
  getters: {
    // Active Window Getter
    getActiveWindow: (state) => {
      return state.activeWindow;
    },

    // Window Getter
    getWindowById: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id);
    },

    getWindowFullscreen: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id).fullscreen;
    },

    getPhotoFolderContent(state) {
      return state.photoFolderContent;
    },

    getPhotoFiles: (state) => {
      return state.photoFiles;
    },

    getSongAlbumFiles: (state) => {
      return state.songAlbumFiles;
    },

    getVideoFiles: (state) => {
      return state.videoFiles;
    },

    getCurrentVideo: (state) => {
      return state.currentVideo;
    },

    getWindows: (state) => {
      return state.windows;
    },

    getActiveWindows(state) {
      return state.activeWindows;
    },

    getFullscreenWindowHeight(state) {
      return state.fullscreenWindowHeight;
    },

    mailContent: (state) => {
      return state.mailContent;
    },

    mailSubject: (state) => {
      return state.mailSubject;
    },

    mailSender: (state) => {
      return state.mailSender;
    },
  },
});
