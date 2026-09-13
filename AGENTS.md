# AGENTS.md — loom-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
Loom 落地页：私域内容生产白名单平台——13 段内容生产链（CHAIN_13），AI 只产候选、人工 Gate 裁决、
`final_id` 唯一出口。Astro 7 静态站点 + React 19 island（final_id 快照演示），中英双语。

产品规格的唯一事实源在**产品仓库**（`bayernjf/loom`，docs/），本仓库文案必须与其对账，不得自行编造产品事实。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（SSG，`output: 'static'`） |
| 交互 | React 19 island（`client:idle`） |
| 样式 | 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens` |
| i18n | Astro i18n：`/` 英文（默认无前缀）、`/zh/` 中文 |
| 共享包 | `@bay/landing-ui`（品牌返链、GitHub Star） |
| Node / 包管理 | >= 22.12 / npm |

## 常用命令
```bash
npm install
npm run dev       # 开发服务器（3017 端口）
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## 约定
- 所有文案走 `src/i18n/ui.ts`，新增字符串**必须**同时提供中英两版。
- 落地页中的产品数字（13 段链、final_id 快照、Guard 项数等）必须与产品仓库 docs/ 对账，改动记入 handoff 对账清单。
- `npm run build` 内含 `scripts/shot.mjs`（Playwright 截图），预览 / OG 图是构建产物，不要提交。
- 改域名要同步 `src/consts.ts` 的 `SITE_URL`、`public/robots.txt` 的 Sitemap、README 与两份 llms。
- 部署细节见 `docs/DEPLOYMENT.md`：Pages 生产分支是 `main`，日常开发在 `dev`。

## 不要做的事
- 不要直接改构建产物 `dist/`。
- 不要把文案硬编码进组件（一律走 i18n 字典）。
- 不要提交 `.env` 或任何密钥。
- 不要跳过 `git pull --rebase` 直接 push。
