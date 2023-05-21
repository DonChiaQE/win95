<template>
  <interact
    draggable
    :dragOption="dragOption"
    class="window window-style"
    :style="style"
    @dragmove="dragmove"
    @resizemove="resizemove"
    @click.native="setActiveWindow"
    :class="{
      fullscreen: $store.getters.getWindowFullscreen(this.ComponentName),
      minimize:
        $store.getters.getWindowById(ComponentName).windowState == 'minimize',
    }"
  >
    <div
      class="top-bar-window"
      :class="
        $store.getters.getActiveWindow == this.ComponentName
          ? 'top-bar'
          : 'top-bar-deactivated'
      "
      id="top-bar"
      @dblclick="toggleWindowSize"
    >
      <div class="window-name">
        <img
          class="icon-image"
          :src="require('@/assets/win95Icons/' + this.window.iconImage)"
          :alt="this.window.altText"
        />{{ currentImage.title }}
      </div>
      <!-- <div class="window-name">{{this.window.displayName}}</div> -->
      <div class="triple-button">
        <!-- <button class="minimize-button button" @click="minimizeWindow">
                        <span style="height: 2px; width: 6px; background: black; margin-top: 8px; margin-right: 2px;">
                        </span>
                    </button> -->
        <button class="expand-button button" @click="toggleWindowSize">
          <span
            style="
              height: 8px;
              width: 9px;
              border-left: black 1px solid;
              border-right: black 1px solid;
              border-left: black 1px solid;
              border-bottom: black 1px solid;
              border-top: black 2px solid;
            "
          >
          </span>
        </button>
        <button
          class="close-button button"
          style="margin-right: 3px; padding-left: 1px"
          @click="closeWindow"
        >
          ×
        </button>
      </div>
    </div>
    <div class="content">
      <div class="carousel">
        <button class="arrow" @click="prevImage()">&#9664;</button>
        <div class="image-container">
          <img :src="currentImage.src" :alt="currentImage.altText" />
        </div>
        <button class="arrow" @click="nextImage()">&#9654;</button>
      </div>
    </div>
  </interact>
</template>

<style scoped>
.carousel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

@media only screen and (max-width: 600px) {
  .carousel {
    justify-content: space-between;
  }

  .image-container {
    width: 100px !important;
    height: 60% !important;
  }
}

.image-container img {
  height: 100%;
}

@media only screen and (min-width: 600px) {
  .image-container img {
    max-width: 100%;
  }
}

.arrow {
  padding: 5px;
  background: rgb(195, 195, 195);
  border-top: solid rgb(250, 250, 250) 1px;
  border-left: solid rgb(250, 250, 250) 1px;
  border-right: solid rgb(90, 90, 90) 1px;
  border-bottom: solid rgb(90, 90, 90) 1px;
  box-shadow: 1px 1px black;
  cursor: pointer;
  z-index: 2;
}

.arrow:active {
  border-radius: 0px;
  background: rgb(192, 192, 192);
  box-shadow: none;
  border-top: solid rgb(0, 0, 0) 1.5px;
  border-left: solid rgb(0, 0, 0) 1.5px;
  border-bottom: solid rgb(250, 250, 250) 1.5px;
  border-right: solid rgb(250, 250, 250) 1.5px;
}

/*-------------------------------------------*\
                Windows/Display
            \*-------------------------------------------*/

.minimize {
  display: none;
}

.preview-image {
  height: 100%;
}

.window {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  user-select: none;
  -ms-touch-action: none;
  touch-action: none;
  flex-flow: column;
  display: flex;
  min-height: 500px;
  min-width: 600px;
  flex-direction: column;
}

@media only screen and (max-width: 600px) {
  .window {
    min-height: 70vh;
    min-width: 80vw;
  }
}

.content {
  flex-grow: 1;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
}

/*-------------------------------------------*\
                Top Bar
            \*-------------------------------------------*/

.top-bar {
  background: rgb(0, 0, 124);
}

.fullscreen {
  width: 100% !important;
  height: var(--fullscreen) !important;
  margin: 0;
  transition: all 0.5s ease;
  padding: 0;
}

.icon-image {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}

.top-bar-window {
  display: flex;
  width: auto;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  z-index: 10;
  margin: 2px;
  padding: 2px 2px 2px 2px;
}

.top-bar-deactivated {
  background: rgb(123, 125, 123);
}

.top-bar:hover {
  cursor: default;
}

.window-name {
  color: white;
  display: flex;
  align-items: center;
  font-weight: 500;
  padding: 0;
  font-size: 16px;
  margin: 0 0 0 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon-image {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-top: 0;
  margin-bottom: 0;
}

.content {
  flex-grow: 1;
  overflow-x: hidden;
  padding-right: var(--content-padding-right);
  padding-left: var(--content-padding-left);
  padding-top: var(--content-padding-top);
  padding-bottom: var(--content-padding-bottom);
}
</style>

<script>
import interact from "interactjs";
export default {
  props: {
    windowId: String,
    nameOfWindow: String,
    content_padding_left: {
      required: false,
      type: String,
      default: "15%",
    },
    content_padding_right: {
      required: false,
      type: String,
      default: "15%",
    },
    content_padding_top: {
      required: false,
      type: String,
      default: "5%",
    },
    content_padding_bottom: {
      required: false,
      type: String,
      default: "5%",
    },
    image_preview: {
      required: false,
      type: String,
      default: "",
    },
  },
  data: function () {
    return {
      // ID Name of window (important)
      ComponentName: this.nameOfWindow,

      // window
      Window: {},

      dragOption: {
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "#screen",
            endOnly: true,
          }),
        ],
        allowFrom: "#top-bar",
      },
      // values for interact.js transformation
      x: 0,
      y: 0,
      tempX: 0,
      tempY: 0,
      w: 0,
      h: 0,

      windows: this.$store.getters.getPhotos,
      gridHeight: "",

      // previewImage: this.image_preview,
      images: this.$store.getters.getPhotoFolderContent,
      currentIndex: 0,
    };
  },
  mounted() {},
  computed: {
    style() {
      return {
        height: `${this.h}px`,
        width: `${this.w}px`,
        transform: `translate(${this.x}px, ${this.y}px)`,
        "--content-padding-left": this.content_padding_left || "15%",
        "--content-padding-right": this.content_padding_right || "15%",
        "--content-padding-top": this.content_padding_top || "5%",
        "--content-padding-bottom": this.content_padding_bottom || "5%",
        "--fullscreen": this.$store.getters.getFullscreenWindowHeight,
      };
    },
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  created() {
    this.window = this.$store.getters.getWindowById(this.ComponentName);
  },
  methods: {
    // functions to interact with window state
    prevImage() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.images.length - 1
          : this.currentIndex - 1;
    },
    nextImage() {
      this.currentIndex =
        this.currentIndex === this.images.length - 1
          ? 0
          : this.currentIndex + 1;
    },
    closeWindow() {
      const payload = {
        windowState: "close",
        windowID: this.ComponentName,
      };
      this.$store.commit("setWindowState", payload);
    },

    openWindow() {
      const payload = {
        windowState: "open",
        windowID: this.ComponentName,
      };
      this.$store.commit("setWindowState", payload);
    },

    minimizeWindow() {
      const payload = {
        windowState: "minimize",
        windowID: this.ComponentName,
      };
      this.$store.commit("setWindowState", payload);
    },

    toggleWindowSize() {
      if (this.$store.getters.getWindowFullscreen(this.ComponentName) == true) {
        const payload = {
          fullscreen: false,
          windowID: this.ComponentName,
        };
        this.$store.commit("setFullscreen", payload);
        this.x = this.tempX;
        this.y = this.tempY;
      } else if (
        this.$store.getters.getWindowFullscreen(this.ComponentName) == false
      ) {
        const payload = {
          fullscreen: true,
          windowID: this.ComponentName,
        };
        this.$store.commit("setFullscreen", payload);
        const tempX = this.x;
        const tempY = this.y;
        this.tempX = tempX;
        this.tempY = tempY;
        this.x = 0;
        this.y = 0;
      }
    },

    setActiveWindow() {
      this.$store.commit("zIndexIncrement", this.ComponentName);
      this.$store.commit("setActiveWindow", this.ComponentName);
    },

    // drag events

    dragmove(event) {
      this.x += event.dx;
      this.y += event.dy;
      this.setActiveWindow();
    },

    resizemove(event) {
      this.w = event.rect.width;
      this.h = event.rect.height;

      this.x += event.deltaRect.left;
      this.y += event.deltaRect.top;
    },
  },
};
</script>
