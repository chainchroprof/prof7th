<template>
  <div id="app">
    <head>
      <link 
        rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      >
    </head>
    <AppTitle :titleText="titleText" />

    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">こちらに入力！</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <md-list-item>
          <md-field>
            <label for="backgroundImage">背景イメージ選択</label>
            <md-select v-model="baseImageTitle" name="baseImageTitle" id="baseImageTitle" @md-selected="updateBaseImageTitle(baseImageTitle)">
              <md-option value=ヘリオス>ヘリオス</md-option>
              <md-option value="アリーチェ">アリーチェ</md-option>
              <md-option value="エシャル">エシャル</md-option>
              <md-option value="セレステ">セレステ</md-option>
              <md-option value="アマツ">アマツ</md-option>
              <md-option value="つかむ">つかむ</md-option>
            </md-select>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>名前</label>
            <md-input v-model="userName" placeholder="名前"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>フレンドID</label>
            <md-input v-model="friendID" placeholder="フレンドID"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>キャラクター</label>
            <md-input v-model="charactorName" placeholder="キャラクター"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>メッセージ</label>
            <md-textarea v-model="messageText" placeholder="メッセージ(３行まで)"></md-textarea>
          </md-field>
        </md-list-item>

        <md-list-item>
          <label>文字色変更</label>
          <compact-picker v-model="colors" @input="updateTextColor"></compact-picker>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label >フォント変更</label>
            <md-select class="font-list-${textFont}" v-model="textFont" name="textFont" id="textFont" @md-selected="updateTextFont(textFont)" >
              <md-option class="font-list-Avenir"        value="Avenir">元に戻す</md-option>
              <md-option class="font-list-Tanuki"        value="Tanuki">たぬき油性マジック</md-option>
              <md-option class="font-list-LightNovelPop" value="LightNovelPop">ラノベPOP</md-option>
              <md-option class="font-list-Rounded"       value="Rounded">自家製 Rounded M+</md-option>
            </md-select>
          </md-field>
        </md-list-item>
      </md-list>
    </div>

    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">プレビュー</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <md-list-item>
          <ProfileCanvas
            :height="650"
            :width="1075"
            :userPhotoStartX="userPhotoStartX"
            :userPhotoStartY="userPhotoStartY"
            :fontSize="parseInt(fontSize)"

            :textFont="textFont"
            :customFontList="customFontList"
            :textColor='textColor'
            :baseImage="baseImage"
            :userName="userName"
            :friendID="friendID"
            :twitterName="twitterName"
            :charactorName="charactorName"
            :messageText="messageText"
            :profileImage="profileImage"
            v-on:updated="updateDataURL($event)"
          />
        </md-list-item>

        <Upload
          v-on:updated="updateProfileImage($event)"
        />

        <div class="md-title adjust-feature-layout" text-align=left >画像位置調整</div>
        <md-list-item>
          <div class="md-layout">
            <md-button class="md-layout-item md-size-15 md-raised md-primary" v-on:click="updateProfilePosX(10)">→</md-button>
            <md-button class="md-layout-item md-size-15 md-raised md-primary" v-on:click="updateProfilePosX(-10)">←</md-button>
            <md-button class="md-layout-item md-size-15 md-raised md-primary" v-on:click="updateProfilePosY(10)">↓</md-button>
            <md-button class="md-layout-item md-size-15 md-raised md-primary" v-on:click="updateProfilePosY(-10)">↑</md-button>
            <md-button class="md-layout-item md-size-25 md-raised md-primary" v-on:click="resetProfilePos()">reset</md-button>
          </div>
        </md-list-item>

        <DownloadButton
          :labelText="dlButtonLabel"
          :dataURL="dataURL"
        />
      </md-list>
    </div>

    <AppFooter/>
  </div>
</template>

<script>
import Vue from 'vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
//import 'vue-material/dist/theme/default-dark.css'

//import { MdButton, MdContent, MdTabs, MdIcon, MdDivider, MdToolbar, MdList } from 'vue-material/dist/components'
//
//Vue.use(MdButton)
//Vue.use(MdContent)
//Vue.use(MdTabs)
//Vue.use(MdIcon)
//Vue.use(MdDivider)
//Vue.use(MdToolbar)
//Vue.use(MdList)

import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

import ProfileCanvas  from './components/ProfileCanvas.vue'
import Upload         from './components/Upload.vue'
import DownloadButton from './components/DownloadButton.vue'
import AppTitle       from './components/AppTitle.vue'
import AppFooter      from './components/AppFooter.vue'

import baseProfileImage1 from "./assets/images_common_card_01a.png"
import baseProfileImage2 from "./assets/images_common_card_02a.png"
import baseProfileImage3 from "./assets/images_common_card_03a.png"
import baseProfileImage4 from "./assets/images_common_card_04a.png"
import baseProfileImage5 from "./assets/images_common_card_05a.png"
import baseProfileImage6 from "./assets/images_common_card_06a.png"

import {Compact} from 'vue-color'

export default {
  name: 'App',
  components: {
    ProfileCanvas,
    Upload,
    DownloadButton,
    AppTitle,
    AppFooter,
    'compact-picker': Compact
  },
  data () {
    return {
      titleText:       'チェンクロ名刺ジェネレータ',
      textFont:        'Avenir',
      fontSize:        30,
      userPhotoStartX: 45,
      userPhotoStartY: 45,
      dlButtonLabel:   '画像ダウンロード',
      userName:        '',
      friendID:        '',
      twitterName:     '',
      charactorName:   '',
      messageText:     '',
      baseImage:       baseProfileImage1,
      baseImageTitle:  'ヘリオス',
      dataURL:         '',
      profileImage:    null,
      textColor:       '#000000',
      colors:          {
          hex: '#000000',
      },
      customFontList:[
        'Tanuki',
        'LightNovelPop',
        'Rounded',
      ],
      baseImages:[
        {
          name: 'ヘリオス',
           img: baseProfileImage1,
        },
        {
          name: 'アリーチェ',
           img: baseProfileImage2,
        },
        {
          name: 'エシャル',
           img: baseProfileImage3,
        },
        {
          name: 'セレステ',
           img: baseProfileImage4,
        },
        {
          name: 'アマツ',
           img: baseProfileImage5,
        },
        {
          name: 'つかむ',
           img: baseProfileImage6,
        },
      ],
    }
  },

  methods: {
    updateDataURL: function (dataURL) {
      this.dataURL = dataURL
    },

    updateProfileImage: function (dataURL) {
      console.log("updateProfileImage:" + dataURL)
      this.profileImage = dataURL
    },

    updateBaseImage: function (name) {
      const entry = this.baseImages.find(x => x.name === name)
      this.baseImage = entry.img
    },

    updateBaseImageTitle: function(title) {
      const found = this.baseImages.find(x => x.name === title)
      this.baseImage = found.img
    },

    updateTextColor: function() {
      this.textColor = this.colors.hex
    },

    updateProfilePosX: function(posx) {
      this.userPhotoStartX += posx
    },

    updateProfilePosY: function(posy) {
      this.userPhotoStartY += posy
    },

    resetProfilePos: function() {
      this.userPhotoStartX = 45
      this.userPhotoStartY = 45
    },

    updateTextFont: function(fontName) {
      this.textFont = fontName
    },
  },
}
</script>

<style scope>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size:   50px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 5px;
  }

  .viewport {
    width: 600px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
  }

  .font-list-Avenir {
    font-family: 'Avenir';
  }

  .font-list-Tanuki {
    font-family: 'Tanuki';
  }

  .font-list-LightNovelPop {
    font-family: 'LightNovelPop';
  }

  .font-list-Rounded {
    font-family: 'Rounded';
  }

  .adjust-feature-layout {
    text-align: left;
    margin-left: 18px;
  }

</style>
