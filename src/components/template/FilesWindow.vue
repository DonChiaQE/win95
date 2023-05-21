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
          :alt="window.altText"
        />{{ this.window.displayName }}
      </div>
      <!-- <div class="window-name">{{this.window.displayName}}</div> -->
      <div class="triple-button">
        <button class="minimize-button button" @click="minimizeWindow">
          <span
            style="
              height: 2px;
              width: 6px;
              background: black;
              margin-top: 8px;
              margin-right: 2px;
            "
          >
          </span>
        </button>
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
      <div class="top-bar-nav">
        <div class="top-bar-text">
          <span style="margin-right: 12px"><u>F</u>ile </span>
          <span style="margin-right: 12px"><u>E</u>dit </span>
          <span style="margin-right: 12px"><u>V</u>iew </span>
          <span style="margin-right: 12px"><u>H</u>elp </span>
        </div>
      </div>
      <div
        class="file-explorer"
        @click.self="size = folderSize"
        ref="fileExplorer"
      >
        <nav class="grid-container-photos" :style="{ height: gridHeight }">
          <li v-for="file in files" :key="file.key">
            <button
              class="icon-photos"
              @click="setSize(file)"
              @touchstart="openWindow(file)"
              @dblclick="openWindow(file)"
            >
              <img
                v-if="file.type == 'file'"
                class="icon-image-photos"
                :src="require('../../assets/win95Icons/image.png')"
                :alt="file.altText"
              />
              <img
                v-else-if="file.type == 'folder'"
                class="icon-image-photos"
                :src="require('../../assets/win95Icons/folder.png')"
                :alt="file.altText"
              />
              <img
                v-else-if="file.type == 'video'"
                class="icon-image-photos"
                :src="require('../../assets/win95Icons/video.png')"
                :alt="file.altText"
              />
              <div class="border">
                <p class="icon-text">
                  {{ file.title }}
                </p>
              </div>
            </button>
          </li>
        </nav>
      </div>
      <div class="bottom-bar">
        <div class="left-bar bar">{{ files.length }} object(s)</div>
        <div class="right-bar bar">
          {{ convertBytestoMegabytes(size) }}
        </div>
      </div>
    </div>
  </interact>
</template>

<style scoped>
.icon-text {
  white-space: nowrap;
  display: block;
  overflow: hidden;
  width: 60px !important;
  font-size: 12px;
  font-weight: 300;
  color: black;
  text-overflow: ellipsis;
}

.icon-photos {
  color: black;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
  text-align: center;
  width: 60px;
  text-overflow: ellipsis;
}

.icon-photos:hover {
  cursor: pointer;
}

.icon-photos:focus .icon-image-photos {
  filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-180deg)
    saturate(400%) contrast(0.9);
}

.icon-photos:focus .icon-text {
  background: rgb(0, 0, 118);
  color: white;
  margin: 0px;
}

.icon-photos:focus .border {
  border: rgb(0, 0, 0) dotted 1px;
}

.icon-image-photos {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}

.grid-container-photos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 0 !important;
}

/*-------------------------------------------*\
            Windows/Display
        \*-------------------------------------------*/

.minimize {
  display: none;
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
  min-height: 350px;
  min-width: 400px;
  max-width: 100vw !important;
  max-height: 100vh !important;
  flex-direction: column;
}

@media only screen and (max-width: 600px) {
  .window {
    min-width: 80vw;
  }
}

.fullscreen {
  width: 100% !important;
  height: var(--fullscreen) !important;
  margin: 0;
  transition: all 0.5s ease;
  padding: 0;
}

.content {
  flex-grow: 1;
  overflow-x: hidden;
  padding-right: var(--content-padding-right);
  padding-left: var(--content-padding-left);
  padding-top: var(--content-padding-top);
  padding-bottom: var(--content-padding-bottom);
}

.file-explorer {
  background: white;
  box-shadow: none;
  border-top: solid rgb(0, 0, 0) 1.5px;
  border-left: solid rgb(0, 0, 0) 1.5px;
  border-bottom: solid rgb(250, 250, 250) 1.5px;
  border-right: solid rgb(250, 250, 250) 1.5px;
  height: calc(100% - 64px);
  width: auto;
  z-index: 10;
  margin: 2px;
  padding: 2px 2px 2px 2px;
  overflow-y: auto;
}

.top-bar-nav {
  display: flex;
  height: 22px;
  width: 100%;
}

.top-bar-text {
  height: 100%;
  padding-left: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.bottom-bar {
  height: 22px;
  display: flex;
  width: 100%;
}

.bar {
  height: 100%;
  margin: 2px 2px 2px 2px;
  padding: 0px 2px 1px 0px;
  box-shadow: none;
  border-top: solid rgb(0, 0, 0) 1.5px;
  border-left: solid rgb(0, 0, 0) 1.5px;
  border-bottom: solid rgb(250, 250, 250) 1.5px;
  border-right: solid rgb(250, 250, 250) 1.5px;
}

.left-bar {
  width: 100%;
  padding-left: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.right-bar {
  width: 100%;
  padding-left: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/*-------------------------------------------*\
            Top Bar
        \*-------------------------------------------*/

.top-bar {
  background: rgb(0, 0, 124);
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
    folderContent: {
      required: true,
      type: Array,
      default: () => [],
    },
    folderSize: {
      required: false,
      type: Number,
      default: 0,
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

      files: this.folderContent.sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { numeric: true })
      ),
      gridHeight: "",
      size: this.folderSize,
    };
  },
  mounted() {
    // assign the value of the heigh of the div file-explorer to the gridHeight variable
    let gridH = this.$refs.fileExplorer.clientHeight;
    this.gridHeight = gridH + "px";
  },
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
  },
  created() {
    this.window = this.$store.getters.getWindowById(this.ComponentName);
  },
  methods: {
    // functions to interact with window state

    closeWindow() {
      const payload = {
        windowState: "close",
        windowID: this.ComponentName,
      };
      this.$store.commit("setWindowState", payload);
    },

    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    openWindow(file) {
      if (file.type == "folder") {
        const windowId = "FolderWindow" + this.getRndInteger(1, 100000);
        const addWindowPayload = {
          windowId: windowId,
          windowState: "close",
          displayName: file.title,
          windowComponent: "FilesWindow",
          windowContent: "",
          windowContentPadding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          position: "absolute",
          positionX: this.getRndInteger(1, 10) + "vw",
          positionY: this.getRndInteger(1, 25) + "vh",
          iconImage: "folder.png",
          altText: file.title,
          fullscreen: false,
          showInAppGrid: false,
          showInNavbar: true,
          folderContent: file.content,
          folderSize: file.size,
        };
        const openWindowPayload = {
          windowState: "open",
          windowID: windowId,
        };
        this.$store.commit("pushNewWindow", addWindowPayload);
        this.$store.commit("setWindowState", openWindowPayload);
        // this.files = file.content
      } else if (file.type == "video") {
        this.$store.commit("setCurrentVideo", file.src);
        const openWindowPayload = {
          windowState: "open",
          windowID: "VideoPreviewWindow",
        };
        this.$store.commit("setWindowState", openWindowPayload);
      } else {
        const openWindowPayload = {
          windowState: "open",
          windowID: "ImagePreviewWindow",
        };
        // const contentPayload = this.files
        const contentPayload = this.files.slice(this.files.indexOf(file));
        contentPayload.push(...this.files.slice(0, this.files.indexOf(file)));
        const payload = {
          windowState: "close",
          windowID: "ImagePreviewWindow",
        };
        this.$store.commit("setWindowState", payload);
        setTimeout(() => {
          this.$store.commit("setPhotoFolderContent", contentPayload);
          // this.$store.commit('pushNewWindow', addWindowPayload)
          this.$store.commit("setWindowState", openWindowPayload);
        }, 100);
      }
    },

    convertBytestoMegabytes(bytes) {
      if (bytes !== 0) {
        return (bytes / 1000000).toFixed(2) + "MB";
      } else {
        return "";
      }
    },

    setSize(file) {
      this.size = file.size;
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
