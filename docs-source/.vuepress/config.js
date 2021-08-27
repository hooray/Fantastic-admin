module.exports = {
	lang: 'zh-CN',
	title: 'Fantastic-admin 官网',
	description: '一款开箱即用的 Vue 中后台管理系统框架',
	base: '/fantastic-admin/',
	dest: 'docs',
	head: [
		['link', { rel: 'icon', href: `./favicon.ico` }],
		['keywords', { content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
		['description', { content: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。' }],
		['script', {}, `var _hmt = _hmt || [];
		(function() {
			if (location.origin.includes('gitee')) {
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?ba0ee7b31f404b7dc10bfcd8bdc7183d";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			}
			if (location.origin.includes('github')) {
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?d07a64f7a02cd5e9c01e1b36948ac4a5";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			}
		})();`]
	],
	themeConfig: {
		logo: '/logo.png',
		search: false,
		navbar: [
			{
				text: '指南',
				children: [
					{
						text: 'Vue3 版本指南',
						link: '/guide/ready.md',
						activeMatch: '/guide/',
					},
					{
						text: 'Vue2 版本指南',
						link: '/guide-vue2/start.md',
						activeMatch: '/guide-vue2/',
					}
				]
			},
			{
				text: '组件',
				link: '/components/'
			},
			{
				text: '演示地址',
				children: [
					{
						text: 'Vue 3',
						children: [
							{
								text: '基础版',
								link: 'https://hooray.gitee.io/fantastic-admin/vue3/basic'
							},
							{
								text: '专业版',
								link: 'https://hooray.gitee.io/fantastic-admin/vue3/pro'
							}
						]
					},
					{
						text: 'Vue 2',
						children: [
							{
								text: '基础版',
								link: 'https://hooray.gitee.io/fantastic-admin/vue2/basic'
							},
							{
								text: '专业版',
								link: 'https://hooray.gitee.io/fantastic-admin/vue2/pro'
							}
						]
					},
					{
						text: '备份地址',
						children: [
							{
								text: 'Vue3 基础版',
								link: 'https://hooray.github.io/fantastic-admin/vue3/basic'
							},
							{
								text: 'Vue3 专业版',
								link: 'https://hooray.github.io/fantastic-admin/vue3/pro'
							},
							{
								text: 'Vue2 基础版',
								link: 'https://hooray.github.io/fantastic-admin/vue2/basic'
							},
							{
								text: 'Vue2 专业版',
								link: 'https://hooray.github.io/fantastic-admin/vue2/pro'
							}
						]
					}
				]
			},
			{
				text: '视频教程',
				link: 'https://space.bilibili.com/3079082/channel/detail?cid=156985'
			},
			{
				text: '购买专业版',
				link: '/buy.md'
			},
			{
				text: '下载基础版',
				children: [
					{
						text: 'Gitee',
						link: 'https://gitee.com/hooray/fantastic-admin'
					},
					{
						text: 'Github',
						link: 'https://github.com/hooray/fantastic-admin'
					}
				]
			}
		],
		sidebar: {
			'/guide/': [
				'intro.md',
				{
					text: '指南',
					children: [
						'ready.md',
						'start.md',
						'coding-standard.md',
						'configure.md',
						'layout.md',
						'theme.md',
						'router.md',
						'axios.md',
						'vuex.md',
						'global-resources.md',
						'build.md'
					]
				},
				{
					text: '高级',
					children: [
						'permission.md',
						'tabbar.md',
						'keep-alive.md',
						'i18n.md',
						'plop.md',
						'plop-module.md',
						'global-properties.md',
						'storage.md',
						'error-log.md',
						'font.md',
						'position-fixed.md'
					]
				},
				{
					text: '其它',
					children: [
						'vue2-to-vue3.md',
						'vea-to-fa.md'
					]
				}
			],
			'/guide-vue2/': [
				{
					text: '指南',
					children: [
						'start.md',
						'coding-standard.md',
						'configure.md',
						'layout.md',
						'theme.md',
						'global-resources.md',
						'axios.md',
						'component.md',
						'vuex.md',
						'router.md',
						'permission.md',
						'tabbar.md',
						'keep-alive.md',
						'keep-alive-neste.md',
						'font.md',
						'i18n.md',
						'storage.md',
						'library.md',
						'cdn.md',
						'gzip.md',
						'mock.md',
						'build.md',
						'git.md',
						'bug.md',
						'plop.md',
						'module.md',
						'position-fixed.md',
						'upgrade.md'
					]
				}
			],
			'/components/': [
				'readme.md',
				'basic.md',
				{
					text: '扩展组件',
					children: [
						'auth.md',
						'auth-all.md',
						'page-header.md',
						'page-main.md',
						'result.md',
						'fixed-action-bar.md',
						'search-bar.md',
						'batch-action-bar.md',
						'image-upload.md',
						'images-upload.md',
						'file-upload.md',
						'image-preview.md',
						'svg-icon.md',
						'trend.md',
						'cascader-area.md',
						'chip.md',
						'colorful-card.md',
						'icon-picker.md',
						'sparkline.md',
						'i18n-selector.md'
					]
				}
			]
		}
	}
}