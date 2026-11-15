# Handoff — loom-landing

更新时间：2026-11-15

## 项目概况
Loom 落地页：私域内容生产白名单平台（SaaS 后台）——13 段内容生产链（CHAIN_13），AI 只产候选、
人工 Gate 裁决、`final_id` 唯一出口、反馈回流反哺知识。Astro 7 静态站点（`output: 'static'`），
中英双语（`/` 英文默认，`/zh/` 中文），React 19 island 承载 final_id 六层快照演示，
`@bay/landing-ui` 提供品牌返链与 GitHub Star 组件，design token 集中在 `src/styles/global.css` 的 `@layer tokens`。

- 线上：`https://loom-landing-7b0.pages.dev`（已启用）· 自定义域名 `loom.bayjf.com`〔**待 owner 确认**〕
- Pages 项目：`loom-landing`（Cloudflare，Git 集成已连 `bayernjf/loom-landing`，生产分支 `main`）
- 产品仓库：`https://github.com/bayernjf/loom`

## 2026-11-15 CTA 收尾（Tier0 UIUX #12 已落地）

Hero 的 "Join the private beta" 为主 CTA，`Request access` 为站内表单（保留 mailto 兜底）。
三枚原子提交在 `dev`（未推送）：

- `9fcbfec` 表单校验：`novalidate` 下原来只查非空，`foo@` 会打开一封 owner 无法回复的
  邮件草稿；改为用 email input 自身 `checkValidity()`，新增双语 `cta.form.invalidEmail`。
- `f2d87d6` 触达目标：390px 视口实测表单提交按钮 37px、hero 主 CTA 43px，均低于 44px；
  只给这两个转化动作加 scoped `min-height: 44px`，不动共享 `.btn`。
- `94dfc4a` 源码卫生：删 `Cta.astro` 里多余的 `</section>`（Astro 编译器会直接丢弃，
  从未到达浏览器），fallback 行补空格（原来渲染成 `Prefer email?b4yernjf@gmail.com`）。

验证：`npm run check` 0 errors；`npm run build` 绿；Playwright 脚本 **29/29 通过**
（含 2 个正对照），覆盖 en/zh 黄金路径 mailto URL 逐字段断言、空提交/缺平台/坏邮箱的
阻断 + 焦点 + 文案、390px 无横向溢出、按钮 44px。

口径：按 bayjf UIUX 报告「站内表单（保留 mailto 兜底）」执行；静态站无后端，表单只
组合 mailto 草稿，不做存库。是否加后端存储待 owner 决策。

## 历史状态（骨架首版，2026-09-13）

按 `agent-world-landing` 惯例搭建的初始骨架：

- **技术栈与目录结构**：与 agent-world-landing 对齐（Astro 7 + React 19 island + 双语 i18n + shot.mjs 截图 + @bay/landing-ui）。
- **页面**：首页（Hero + 13 段链 Chain + final_id Guard 演示 + CTA）/ 双语、404、隐私与条款（双语）。
- **惯例文档**：README / handoff / AGENTS / CLAUDE / git-commit-message / docs/DEPLOYMENT。
- **文案**：首版基于产品仓库 README（13 段链、final_id 六层快照、白名单相撞产物），**未做逐项数字对账**，见下方对账清单。

## 数字型文案对账清单（产品迭代后优先核对，易过期）
| 落地页表述 | 产品事实来源（loom 仓库） | 对账状态 |
| --- | --- | --- |
| 13 段链（CHAIN_13）各段描述 | docs/01 PRD、README 一图流 | ✅ 2026-11-16 全量核对：s1–s13 与 docs/01:39-45 一图流一一对应（s4=approveAtomGuard、s6=PWS 冻结、s7=四态平台适配、s10=CP-BAN/CP-DOWN 规则库、s11=5 项 Guard 全过才出 final_id、s12=只读消费+强制复检）；**2 处数字漂移**见下行 |
| final_id = 6 层快照（PWS+PCP+CSP+CSTP+CEP+CCR） | README final 定义 | ✅ docs/01:14 一致（产品 PWS + 5 类通用原子 = 6 层） |
| 唯一出口 E1.1 publishFCW | README / docs/02 Q 记录 | ✅ docs/01:14,134 一致（全系统唯一能生成 `final_content_whitelist_id` 的出口，其余写入即越权） |
| approveAtomGuard 10 项 / pwsReadiness 5 项 / PCP 17 字段 Σ≤1.0 | README / docs/01 | ✅ 三项一致：docs/01:79（10 项清单）、:98（5 项清单）、:113-114（strategyFields17 + PT-PCP-V1.5 Σ≤1.0） |
| 内测（beta）定位 | 产品仓库未见「内测」记录 | ⬜ **待 owner 拍板**（影响 Hero/CTA 文案） |

**2026-11-16 对账发现的两处数字漂移（同日已按 PRD 定稿口径修正，落地页与产品 README 同步）**：

1. **「14-state machine」（`chain.s1d`）**：docs/01 §C1 Q5 已定稿「新增第 15 态『类目创建中』，升级为
   productIntake15」。已改：产品 README 一图流 `14态状态机 → 15态状态机`；落地页 `chain.s1d`
   双语改 15-state / 15 态。
2. **「C1 five-signal recognition」（`chain.s2d`）**：docs/01 §C1.1 Q2 定稿「第一期只启用文本三信号，
   图像后置」；五信号是全量设计（name/brief/卖点/主图/包装图，docs/01:60）。已改：产品 README
   一图流标注 `·首期文本三信号`；落地页 `chain.s2d` 双语改「five-signal model (text-first)」/
   「五信号模型（文本优先）」，与首期形态一致。

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
