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

    windows: [
      {
        windowId: "BiographyWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Biography", // Display Name (title under icon)
        windowComponent: 'window', // Window Component (can be changed to use modified windows)
        windowContent: 'bio', // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null
        }, // Window Content Padding 
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "bio.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false // Window Fullscreen State [true, false]
      },
      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Résumé", // Display Name (title under icon)
        windowComponent: 'window', // Window Component (can be changed to use modified windows)
        windowContent: 'resume', // Window Content (used under slots)
        windowContentPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        }, // Window Content Padding 
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Résumé", // Window Icon Alt Text
        fullscreen: false // Window Fullscreen State [true, false]
      },
      {
        windowId: "PhotosWindow", 
          windowState: "close",
          displayName: "Photos",
          windowComponent: 'window',
          windowContent: 'photos',
          windowContentPadding: {
            top: '10px',
            right: '10px',
            bottom: '10px',
            left: '10px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "photos.png",
          altText: "Photos",
          fullscreen: false
      },
      {
        windowId: "NOSSAFLEXWindow", 
          windowState: "close",
          displayName: "NOSSAFLEX",
          windowComponent: 'window',
          windowContent: 'nossaflex',
          windowContentPadding: {
            top: null,
            right: null,
            bottom: null,
            left: null
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "noss.webp",
          altText: "NOSSAFLEX App",
          fullscreen: false
      },
      {
        windowId: "AppleWWDC2021", 
          windowState: "close",
          displayName: "WWDC 2021",
          windowComponent: 'window',
          windowContent: 'wwdc2021',
          windowContentPadding: {
            top: null,
            right: null,
            bottom: null,
            left: null
          },
          position: "absolute",
          positionX: "4vw",
          positionY: "12vh",
          iconImage: "apple.png",
          altText: "Apple WWDC 2021",
          fullscreen: false
      },
      {
        windowId: "AppleWWDC2022", 
          windowState: "close",
          displayName: "WWDC 2022",
          windowComponent: 'window',
          windowContent: 'wwdc2022',
          windowContentPadding: {
            top: null,
            right: null,
            bottom: null,
            left: null
          },
          position: "absolute",
          positionX: "4vw",
          positionY: "12vh",
          iconImage: "apple2.png",
          altText: "Apple WWDC 2022",
          fullscreen: false
      },
      {
        windowId: "OpenSourceWindow", 
          windowState: "close",
          displayName: "Open Source",
          windowComponent: 'window',
          windowContent: 'opensource',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "opensource.png",
          altText: "Open Source Projects",
          fullscreen: false
      },
      {
        windowId: "MailWindow", 
          windowState: "close",
          displayName: "Mail",
          windowComponent: 'mail',
          windowContent: '',
          windowContentPadding: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "mail.png",
          altText: "Mail",
          fullscreen: false
      },
      {
        windowId: "WebOSWindow", 
          windowState: "close",
          displayName: "Web OS",
          windowComponent: 'webos',
          windowContent: '',
          windowContentPadding: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "webos.png",
          altText: "Web OS",
          fullscreen: true
      }
      // register your new windows here
    ],
    mailContent: '',
    mailSender: '',
    mailSubject: 'New Message',
  },
  mutations: {
    // Active Window Mutator
    setActiveWindow(state, window) {
      console.log(window);
      state.activeWindow = window
    },

    // Pushes Active Window onto Active Windows Array
    pushActiveWindow(state, window) {
      state.activeWindows.push(window)
    },

    // Removes Active Window from Active Windows Array
    popActiveWindow(state, window) {
      const windowIndex = state.activeWindows.indexOf(window);
      if (windowIndex !== -1) {
        state.activeWindows.splice(windowIndex, 1)
      }
    },

    // Z-index increment function
    zIndexIncrement(state, windowID) {
      state.zIndex += 1
      document.getElementById(windowID).style.zIndex = state.zIndex
    },

    // Set height of max-height of fullscreen window
    setFullscreenWindowHeight(state, height) {
      state.fullscreenWindowHeight = height
    },

    updateMail(state, local) {
      state.isShownMail = local
    },
    updateMailSubject(state, local) {
      state.mailSubject = local
    },
    updateMailContent(state, local) {
      state.mailContent = local
    },
    updateMailSender(state, local) {
      state.mailSender = local
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

    getWindows: (state) => {
      return state.windows;
    },

    getActiveWindows(state) {
      return state.activeWindows;
    },

    getFullscreenWindowHeight(state) {
      return state.fullscreenWindowHeight;
    },

    mailContent: state => {
      return state.mailContent
    },

    mailSubject: state => {
      return state.mailSubject
    },

    mailSender: state => {
      return state.mailSender
    },
  },
});
