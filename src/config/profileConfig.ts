import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/nakoko1.png",

	// 名字
	name: "小鳥遊詩雨",

	// 个人签名
	bio: "如果要在这个世界上留下什么痕迹的话，我希望是温柔的。",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com/q/nCiwjd5FeK",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/TakanashiShiu",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:qikesang@gmail.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
