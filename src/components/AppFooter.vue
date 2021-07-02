<template>
  <div>
    <md-card class="md-primary" md-theme="orange-card" >
      <md-card-header>
        <md-button class="md-title" align="center" href="https://chainchroprof.github.io/prof8th/">8周年版はこちら！</md-button>
        <div class="md-title">ベースの画像は公式サイトのものを利用しています</div>
        <br>
        <md-button class="md-title" align="center" href="http://chronicle.sega-net.com/7th_chain/">公式サイトへGo!</md-button>
      </md-card-header>

      <md-card-content>
        <a href="https://twitter.com/datsuns" target="_blank">by @datsuns</a>
        <br>
        <a href="https://github.com/chainchroprof/prof7th" target="_blank">source code(github)</a>

        <div class="md-subhead">更新履歴</div>
        <div class="md-subhead">2020.07.05: フォント変えられまっせー</div>
        <div class="md-subhead">2020.07.04: とりあえず作りましたぜー</div>
      </md-card-content>
    </md-card>

    <md-card>
      <md-dialog :md-active.sync="showSpecialThanks">
        <md-dialog-title>Special Thanks !!</md-dialog-title>

          <div class="md-title">以下のフォントを利用させてもらっています！</div>
          <div class="md-title">ありがとうございます！</div>
          <md-list>
            <md-list-item>
              <a href="https://tanukifont.com/tanuki-permanent-marker/" >たぬき油性マジック</a>
            </md-list-item>
            <md-list-item>
              <a href="http://www.fontna.com/blog/1706/" >ラノベPOP</a>
            </md-list-item>
            <md-list-item>
              <a href="http://jikasei.me/font/rounded-mplus/about.html" >自家製 Rounded M+</a>
            </md-list-item>
          </md-list>

        <md-dialog-actions>
          <md-button class="md-primary" @click="showSpecialThanks = false">閉じる</md-button>
        </md-dialog-actions>
      </md-dialog>
      <md-button class="md-primary md-raised" @click="showSpecialThanks = true">SpecialThanks!</md-button>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'AppFooter',
    data: () => ({
      showSpecialThanks: false
    })
  }
</script>

<style lang="scss" scoped>
  .md-card {
    margin: 10px;
  }
  .md-dialog {
    max-width: 768px;
  }
</style>
