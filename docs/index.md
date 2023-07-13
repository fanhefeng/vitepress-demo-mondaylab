---
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
# https://vitepress.dev/reference/default-theme-home-page
# 提供三种布局，doc、page和home
layout: home
home: true

title: fhf的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: "FHF"
  text: "Stay foolish, Stay hungry."
  tagline: /斜杠青年/人间清醒/工具控/
  image:
    # 首页右边的图片
    src: /avatar.png
    # 图片的描述
    alt: avatar
  # 按钮相关
  actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 成长日记
      link: /column/Growing/
# 按钮下方的描述
features:
  - icon: 🤹♀️
    title: 前端
    details: 搬砖打工人
    link: /column/views/guide
  - icon: 🧩
    title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<!-- 自定义组件 -->
<script setup>
  import Home from "./components/Home.vue";
</script>
<Home />
