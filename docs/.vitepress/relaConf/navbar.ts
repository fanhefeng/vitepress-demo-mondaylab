import { DefaultTheme } from "vitepress";
export const nav: DefaultTheme.NavItem[] = [
	{
		text: "首页",
		link: "/", // 表示docs/index.md
	},
	{
		text: "个人成长",
		items: [
			{
				text: "橘子熟了",
				link: "/column/Words/", // 表示docs/column/Words/index.md
			},
			{
				text: "成长日记",
				link: "/column/Growing/", // 表示docs/column/Growing/index.md
			},
		],
	},
	{
		text: "关于我",
		items: [
			{ text: "Github", link: "https://github.com/fanhefeng" },
			{
				text: "掘金",
				link: "https://juejin.cn/user/3069492194976983/posts",
			},
		],
	},
];

