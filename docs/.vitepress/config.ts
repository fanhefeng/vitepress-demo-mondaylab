import { defineConfig } from "vitepress";
import { nav, sidebar } from "./relaConf";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/vitepress-demo-mondaylab/', // 这里将会影响之后生成的根路径（部署）
	title: "我的博客",
	description: "我的描述文字", // description 配置后会显示页面中 <meta name="description" content="xxxx"> 显示
	outDir: "../dist", // 打包后输出目录的配置
	head: [["meta", { name: "keywords", content: "HTML, CSS, JavaScript" }]], // head 配置后会显示在页面中的 head 中。可以配置多个。应该也能扩展 VitePress 的功能。
	lastUpdated: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		search: {
      provider: 'local'
    },
		i18nRouting: true,
		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }], // 右上角github图标
		logo: "/3.jpeg", // 表示docs/public/avartar.png
		nav: nav, // 把定义的nav给替换进来
		sidebar: sidebar,
		outlineTitle: "目录",
		outline: "deep",
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2019-present Evan You",
		},
		docFooter: { prev: "上一篇", next: "下一篇" },
		lastUpdatedText: "最近更新时间",
		lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
	},
});

