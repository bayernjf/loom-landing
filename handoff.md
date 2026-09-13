# Handoff — loom-landing

更新时间：2026-09-13

## 项目概况
Loom 落地页：私域内容生产白名单平台（SaaS 后台）——13 段内容生产链（CHAIN_13），AI 只产候选、
人工 Gate 裁决、`final_id` 唯一出口、反馈回流反哺知识。Astro 7 静态站点（`output: 'static'`），
中英双语（`/` 英文默认，`/zh/` 中文），React 19 island 承载 final_id 六层快照演示，
`@bay/landing-ui` 提供品牌返链与 GitHub Star 组件，design token 集中在 `src/styles/global.css` 的 `@layer tokens`。

- 线上：`https://loom.bayjf.com`（English）· `https://loom.bayjf.com/zh/`（简体中文）〔**域名待 owner 确认**〕
- Pages 项目：`loom-landing`（域名 `loom-landing.pages.dev`）
- 产品仓库：`https://github.com/bayernjf/loom`

## 当前状态（骨架首版，2026-09-13）

按 `agent-world-landing` 惯例搭建的初始骨架：

- **技术栈与目录结构**：与 agent-world-landing 对齐（Astro 7 + React 19 island + 双语 i18n + shot.mjs 截图 + @bay/landing-ui）。
- **页面**：首页（Hero + 13 段链 Chain + final_id Guard 演示 + CTA）/ 双语、404、隐私与条款（双语）。
- **惯例文档**：README / handoff / AGENTS / CLAUDE / git-commit-message / docs/DEPLOYMENT。
- **文案**：首版基于产品仓库 README（13 段链、final_id 六层快照、白名单相撞产物），**未做逐项数字对账**，见下方对账清单。

## 数字型文案对账清单（产品迭代后优先核对，易过期）
| 落地页表述 | 产品事实来源（loom 仓库） | 对账状态 |
| --- | --- | --- |
| 13 段链（CHAIN_13）各段描述 | docs/01 PRD、README 一图流 | 🟡 初版摘自 README，待按 docs 全量核对 |
| final_id = 6 层快照（PWS+PCP+CSP+CSTP+CEP+CCR） | README final 定义 | 🟡 待核对 docs/05 契约层 |
| 唯一出口 E1.1 publishFCW | README / docs/02 Q 记录 | 🟡 待核对 |
| approveAtomGuard 10 项 / pwsReadiness 5 项 / PCP 17 字段 Σ≤1.0 | README / docs/01 | 🟡 待核对 |
| 内测（beta）定位 | 产品仓库未见「内测」记录 | ⬜ **待 owner 拍板**（影响 Hero/CTA 文案） |

## 注意点
- **域名未定**：`src/consts.ts` 的 `SITE_URL` 与 `public/robots.txt` 的 Sitemap 均为占位
  `https://loom.bayjf.com`，确认后需同步两处（及 README / llms.txt / llms-en.txt）。
- Cloudflare Pages **Production branch 是 `main`**，日常开发在 `dev`；构建命令
  `npx playwright install chromium && npm run build`，输出目录 `dist`，
  环境变量 `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0`。
- `npm run build` 内含 `node scripts/shot.mjs`，构建时用 Playwright 截图产出预览 / OG 图；
  `public/preview*.png` 不在版本库里，属于构建产物。
- 所有文案必须走 `src/i18n/ui.ts` 且中英双语同时改；组件里不允许硬编码文案。
- 需要 Node >= 22.12（Astro 7 会拒绝 20.x），开发服务器端口 3017（见 `.claude/launch.json`）。

## 下一步
1. **owner 确认域名**（是否用 loom.bayjf.com）与 **内测定位**（保留内测漏斗还是开源可用导向）。
2. 按产品仓库 docs/ 全量对账 13 段链文案（含 S 级红旗 4 条裁决结果，裁决后会改口径）。
3. 补齐视觉细节：Hero 主视觉、链的横向连接线、OG 截图排版验证。
4. 与 hub 站 bayjf 的产品卡片封面保持一致（引用的是构建产出的 preview.png）。
