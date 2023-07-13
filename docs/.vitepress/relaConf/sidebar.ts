import { DefaultTheme } from "vitepress";
export const sidebar: DefaultTheme.Sidebar = {
	// /column/Words/表示对这个文件夹下的所有md文件做侧边栏配置
	"/column/Words/": [
		// 第一部分
		{
			text: "栈和队列",
			items: [
				{
					text: "栈-深拷贝和浅拷贝",
					link: "/column/Words/001_text",
				},
				{
					text: "队列-事件循环",
					link: "/column/Words/002_text",
				},
			],
		},
		// 第二部分
		{
			text: "字典和树",
			items: [
				{
					text: "字典和集合-Set和Map",
					link: "/column/Words/003_text",
				},
				{
					text: "树-深/广度优先遍历",
					link: "/column/Words/004_text",
				},
			],
		},
	],
};
