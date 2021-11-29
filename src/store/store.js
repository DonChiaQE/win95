import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // Active window 
    activeWindow: 'Bio',
    // Z-index counter
    zIndex: 2,
    // Nossaflex window
    isShownNossaflex: false, // hide using - button
    isFullscreenNossaflex: false,
    closeNossaflex: false, // close using x button
    // Photo window
    isShownPhotos: false, // hide using - button
    isFullscreenPhotos: false,
    closePhotos: false, // close using x button
    // Resume window
    isShownResume: false, // hide using - button
    isFullscreenResume: false,
    closeResume: false, // close using x button
    // Colorization window
    isShownColorization: false,
    isFullscreenColorization: false,
    closeColorization: false, // close using x button
    // Bio window
    isShownBio: true,
    isFullscreenBio: false,
    closeBio: true, // close using x button
    // Stickies window
    isShownStickies: false,
    isFullscreenStickies: false,
    notepadData: 'Stickies!',
    // Mail window
    isShownMail: false,
    isFullscreenMail: false,
    mailContent: '',
    mailSender: '',
    mailSubject: 'New Message',
    closeMail: false, // close using x button
    // Simulator window
    isShownSimulator: false,
    // Start Menu
    isShownMenu: false,
    closeMenu: false,
    // Mobile User
    mobileAlert: false
  },
  mutations: {
    toggleShownNossaflex(state, shownBool) {
      state.isShownNossaflex = shownBool
    },
    toggleFullscreenNossaflex(state) {
      state.isFullscreenNossaflex = !state.isFullscreenNossaflex
    },
    toggleShownPhotos(state, shownBool) {
      state.isShownPhotos = shownBool
    },
    toggleFullscreenPhotos(state) {
      state.isFullscreenPhotos = !state.isFullscreenPhotos
    },
    toggleShownColorization(state, shownBool) {
      state.isShownColorization = shownBool
    },
    toggleFullscreenColorization(state) {
      state.isFullscreenColorization = !state.isFullscreenColorization
    },
    toggleShownStickies(state, shownBool) {
      state.isShownStickies = shownBool
    },
    toggleFullscreenStickies(state) {
      state.isFullscreenStickies = !state.isFullscreenStickies
    },
    toggleShownBio(state, shownBool) {
      state.isShownBio = shownBool
    },
    toggleFullscreenResume(state) {
      state.isFullscreenResume = !state.isFullscreenResume
    },
    toggleShownResume(state, shownBool) {
      state.isShownResume = shownBool
    },
    toggleFullscreenBio(state) {
      state.isFullscreenBio = !state.isFullscreenBio
    },
    zIndexIncrement(state, top) {
      console.log("zindex upgraded")
      state.zIndex += 1
      document.getElementById(top).style.zIndex = state.zIndex
    },
    changeActiveWindow(state, window) {
      state.activeWindow = window
    },
    updateNotepad(state, local) {
      state.notepadData = local
    },
    toggleShownMail(state, shownBool) {
      state.isShownMail = shownBool
    },
    toggleFullscreenMail(state) {
      state.isFullscreenMail = !state.isFullscreenMail
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
    toggleShownSimulator(state, shownBool) {
      state.isShownSimulator = shownBool
    },
    toggleCloseNossaflex(state, closeBool) {
      state.closeNossaflex = closeBool
    },
    toggleClosePhotos(state, closeBool) {
      state.closePhotos = closeBool
    },
    toggleCloseResume(state, closeBool) {
      state.closeResume = closeBool
    },
    toggleCloseBio(state, closeBool) {
      state.closeBio = closeBool
    },
    toggleCloseMail(state, closeBool) {
      state.closeMail = closeBool
    },
    toggleShownMenu(state, shownBool) {
      state.isShownMenu = shownBool
    },
    toggleCloseMenu(state, closeBool) {
      state.closeMenu = closeBool
    },
    toggleMobileAlert(state, shownBool) {
      state.mobileAlert = shownBool
    }
  },
  actions: {
    
  },
  getters: {
    isShownNossaflex: state => {
      return state.isShownNossaflex
    },
    isFullscreenNossaflex: state => {
      return state.isFullscreenNossaflex
    },
    isShownPhotos: state => {
      return state.isShownPhotos
    },
    isFullscreenPhotos: state => {
      return state.isFullscreenPhotos
    },
    isShownColorization: state => {
      return state.isShownColorization
    },
    isFullscreenColorization: state => {
      return state.isFullscreenColorization
    },
    isShownStickies: state => {
      return state.isShownStickies
    },
    isFullscreenStickies: state => {
      return state.isFullscreenStickies
    },
    isShownBio: state => {
      return state.isShownBio
    },
    isFullscreenBio: state => {
      return state.isFullscreenBio
    },
    isShownResume: state => {
      return state.isShownResume
    },
    isFullscreenResume: state => {
      return state.isFullscreenResume
    },
    zIndex: state => {
      return state.zIndex
    },
    activeWindow: state => {
      return state.activeWindow
    },
    notepadData: state => {
      return state.notepadData
    },
    isShownMail: state => {
      return state.isShownMail
    },
    isFullscreenMail: state => {
      return state.isFullscreenMail
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
    isShownSimulator: state => {
      return state.isShownSimulator
    },
    isCloseNossaflex: state => {
      return state.closeNossaflex
    },
    isClosePhotos: state => {
      return state.closePhotos
    },
    isCloseBio: state => {
      return state.closeBio
    },
    isCloseMail: state => {
      return state.closeMail
    },
    isCloseResume: state => {
      return state.closeResume
    },
    isMobileAlert: state => {
      return state.mobileAlert
    }
  }
})