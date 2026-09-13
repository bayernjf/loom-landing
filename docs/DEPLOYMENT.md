# 部署 — loom-landing

更新时间：2026-09-13

## 站点信息
- Pages 项目：`loom-landing`（已连接 GitHub 仓库 `bayernjf/loom-landing`）
- Pages 域名：`loom-landing-7b0.pages.dev`（Cloudflare 分配，已启用）
- 自定义域名：`loom.bayjf.com`〔**待 owner 确认**〕（确认后加 Custom Domain，DNS 加 `CNAME loom → loom-landing-7b0.pages.dev`，Proxied）
- 技术栈：Astro 7（SSG）+ React 19 island（final_id 快照演示）+ `@bay/landing-ui` + `@astrojs/sitemap`
- Node：`>=22.12.0`；包管理器 npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## Cloudflare Pages 配置（与 agent-world-landing 一致）
| 配置项 | 值 |
|---|---|
| Production branch | `main` |
| Build command | `npx playwright install chromium && npm run build` |
| Build output directory | `dist` |
| Environment variables | `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0` |

**分支策略**：日常开发在 `dev`，推送 `main` 才会构建发布；`dev` 等其他分支只产出 preview 部署。
（Pages 项目已通过 API 创建并启用 Git 集成：`build_command = npx playwright install chromium && npm run build`、
`destination_dir = dist`、环境变量 `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0`，与 agent-world-landing 一致。）

## 发布后验证
1. 英文首页（`/`）与中文首页（`/zh/`）可访问，React island（final_id 演示）正常加载。
2. 隐私政策与条款页（双语）可访问。
3. `robots.txt`、`sitemap.xml` 可访问且域名一致。
4. OG 图 / 预览图（构建时截出）可访问。

## 改域名时的同步点
- `src/consts.ts` 的 `SITE_URL`
- `public/robots.txt` 里的 Sitemap 地址
- `README.md`、`public/llms.txt`、`public/llms-en.txt`、`handoff.md` 中的域名引用
