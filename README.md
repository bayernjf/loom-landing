# Loom — Landing

私域内容生产白名单平台的落地页：13 段内容生产链（CHAIN_13），AI 只产候选、人工 Gate 裁决、`final_id` 唯一出口、反馈回流反哺知识。

- 线上：https://loom.bayjf.com （English）· https://loom.bayjf.com/zh/ （简体中文）〔域名待确认，见 handoff〕
- 产品仓库：https://github.com/bayernjf/loom

## 技术栈

- [Astro 7](https://astro.build) 静态站点，`output: 'static'`
- React 19 island（`client:idle`）承载 final_id 快照演示
- 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens`
- `@bay/landing-ui` 提供品牌链接与 GitHub Star 组件
- 双语路由由 Astro i18n 提供：`/` 英文（默认，无前缀）、`/zh/` 中文

## 本地开发

需要 Node 22.12+（`node -v` 确认；Astro 7 会拒绝 20.x）。

```bash
npm install
npm run dev
```

开发服务器默认跑在 3017 端口（见 `.claude/launch.json`）。

## 构建

```bash
npm run build
```

`astro build` 之后会自动跑 `scripts/shot.mjs`：在 `dist/` 上起静态服务，用 Playwright 截取两种
语言的首屏，产出 `dist/preview-en.png` 与 `dist/preview-zh.png` 作为 og:image。预览图不入库，
每次构建现生成，所以改了首屏视觉不用手动重截。首次构建前装一次浏览器内核：

```bash
npx playwright install chromium
```

其他脚本：

```bash
npm run preview   # 预览 dist
npm run check     # astro check 类型检查
npm run shot      # 只重截预览图（需要 dist 已存在）
```

## 目录结构

```
public/            favicon、brand mark、robots.txt、llms.txt / llms-en.txt
scripts/shot.mjs   构建后截取 og:image
src/consts.ts      站点级常量（域名、社交、og 图路径）
src/i18n/          ui.ts 文案字典 + index.ts 语言工具
src/layouts/       Layout.astro（head、reveal 脚本）
src/components/    SEO、Hud、Hero、Chain（13 段链）、Guard（final_id 快照）、
                   Cta、Footer、LegalLayout
src/components/sandbox/GuardDemo.tsx（React island）
src/pages/         index.astro（en）、zh/index.astro、404.astro、
                   privacy / terms（两种语言各一份）
src/styles/        global.css
```

## 部署到 Cloudflare Pages（Git 集成）

项目已建好：Pages 项目 `loom-landing`，已连接 GitHub 仓库 `bayernjf/loom-landing`。
推送到 `main` 会自动构建发布，`dev` 等其他分支产出 preview 部署。配置如下（与 agent-world-landing 一致）：

- Production branch：`main`
- Build command：`npx playwright install chromium && npm run build`
- Build output directory：`dist`
- Environment variables：`NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0`

日常开发在 `dev` 分支进行，合并到 `main` 才会发版。

域名：`loom-landing.pages.dev` + 自定义域名 `loom.bayjf.com`
（DNS 里需要一条 `CNAME loom → loom-landing.pages.dev`，Proxied）。
换域名时要同步改 `src/consts.ts` 的 `SITE_URL` 和 `public/robots.txt` 里的 Sitemap 地址。

## SEO

- 每种语言独立的 title / description，取自 `src/i18n/ui.ts` 的 `meta.*`
- canonical + 三条 hreflang（自身、另一语言、x-default）
- Open Graph + Twitter `summary_large_image`，og:image 用构建时截图
- JSON-LD `@graph`：Organization / WebSite / SoftwareApplication
- `@astrojs/sitemap` 生成带 hreflang 互指的 sitemap
- `prefetch` 全站预取，`inlineStylesheets: 'auto'`

## GEO（生成式引擎优化）

- `public/robots.txt` 显式放行 GPTBot、ClaudeBot、PerplexityBot、CCBot 等 AI 爬虫
- `public/llms.txt`（中文）与 `public/llms-en.txt`（英文）用 markdown 自述产品定义、
  13 段链、final_id 机制与差异点，供答案引擎直接引用
