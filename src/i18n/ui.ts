export const languages = {
  en: "English",
  zh: "简体中文",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "meta.title": "Loom — Private Content Production Whitelist Platform",
    "meta.description":
      "A 13-stage content production chain: AI drafts candidates, human gates decide, final_id is the single publishable exit, feedback flows back into knowledge.",

    "nav.langSwitch": "中文",

    "hero.kicker": "CHAIN_13 · CONTENT FACTORY",
    "hero.title": "Turn product data into publishable content through one auditable chain.",
    "hero.sub":
      "Loom orchestrates a 13-stage production chain — intake, cold-start modeling, atom pools, frozen condition packages, compliance cleaning, and a readonly final_id assembly. AI only proposes candidates; human gates decide.",
    "hero.cta": "Join the private beta",
    "hero.cta2": "Read the spec",
    "hero.meta.chain": "13-stage chain",
    "hero.meta.gate": "human-gated",
    "hero.meta.exit": "single final_id exit",

    "chain.kicker": "THE CHAIN",
    "chain.title": "Thirteen stages, one auditable line",
    "chain.sub":
      "Every stage ends in a gate or a guard. Nothing reaches the publishable exit without passing the chain.",
    "chain.s1": "Product intake",
    "chain.s1d": "14-state product state machine",
    "chain.s2": "Cold-start modeling",
    "chain.s2d": "C1 five-signal recognition",
    "chain.s3": "Field pool planning",
    "chain.s3d": "planning + gate",
    "chain.s4": "Atoms under fields",
    "chain.s4d": "per-atom gate · approveAtomGuard ×10",
    "chain.s5": "PWC condition packages",
    "chain.s5d": "cross-field collisions within a PWS",
    "chain.s6": "PWS freeze",
    "chain.s6d": "pwsReadiness ×5 · downstream consumes frozen PWS only",
    "chain.s7": "Platform adaptation",
    "chain.s7d": "allow / downgrade / block / pending_review",
    "chain.s8": "PCP platform package",
    "chain.s8d": "17 fields · weights Σ ≤ 1.0",
    "chain.s9": "CSP / CSTP / CEP bundles",
    "chain.s9d": "strategy / structure / expression on layerSpaces",
    "chain.s10": "Compliance cleaning",
    "chain.s10d": "block_required vetoes",
    "chain.s11": "final_id assembly",
    "chain.s11d": "readonly · only when every guard passes",
    "chain.s12": "Content generation",
    "chain.s12d": "generate + compliance re-check",
    "chain.s13": "Feedback loop",
    "chain.s13d": "KUP proposals → human gate → knowledge write-back",

    "guard.kicker": "WHY A CHAIN, NOT A TOOL",
    "guard.title": "AI proposes. Gates dispose. One exit.",
    "guard.sub":
      "The whitelist is not a hand-written word list — it is the collision product of atoms under a (product × purpose × platform × account) context. Frozen PWS snapshots separate decisions from consumption, so what downstream reads can never drift.",
    "guard.p1": "AI drafts candidates only, never silently applies",
    "guard.p2": "Every publishable piece carries one final_id",
    "guard.p3": "Feedback flows back into the knowledge base",
    "guard.p4": "Each atom traces to an auditable decision (Q1–Q72)",

    "cta.title": "Run your content line on Loom",
    "cta.sub":
      "Private beta is open. Tell us which platforms and product lines you want to run first.",
    "cta.button": "Request access",
    "cta.email": "b4yernjf@gmail.com",

    "foot.tag": "Private content production whitelist platform",
    "foot.nav.chain": "The Chain",
    "foot.nav.cta": "Beta",
    "foot.nav.privacy": "Privacy",
    "foot.nav.terms": "Terms",

    "legal.privacyTitle": "Privacy Policy",
    "legal.privacyBody": "This is a placeholder. The privacy policy will be finalized before the public launch.",
    "legal.termsTitle": "Terms of Service",
    "legal.termsBody": "This is a placeholder. The terms of service will be finalized before the public launch.",
    "legal.updated": "Last updated",
  },

  zh: {
    "meta.title": "Loom — 私域内容生产白名单平台",
    "meta.description":
      "一条 13 段内容生产链：AI 只产候选、人工 Gate 裁决，final_id 唯一出口，反馈回流反哺知识。",

    "nav.langSwitch": "English",

    "hero.kicker": "CHAIN_13 · 内容工厂",
    "hero.title": "把产品信息变成可发布内容，走同一条可审计的产线。",
    "hero.sub":
      "Loom 编排 13 段生产链——产品录入、冷启动建模、原子池、冻结条件包、合规清洗、只读 final_id 组装。AI 只产候选，人工 Gate 裁决。",
    "hero.cta": "申请内测",
    "hero.cta2": "查看规格",
    "hero.meta.chain": "13 段链",
    "hero.meta.gate": "人工裁决",
    "hero.meta.exit": "final_id 唯一出口",

    "chain.kicker": "THE CHAIN",
    "chain.title": "十三段，一条可审计的产线",
    "chain.sub": "每一段都以 Gate 或 Guard 收口，没有一段能绕过链条直达可发布出口。",
    "chain.s1": "产品录入",
    "chain.s1d": "14 态产品状态机",
    "chain.s2": "冷启动建模",
    "chain.s2d": "C1 五信号识别",
    "chain.s3": "字段池规划",
    "chain.s3d": "规划 + Gate",
    "chain.s4": "字段下原子",
    "chain.s4d": "逐条 Gate · approveAtomGuard 10 项",
    "chain.s5": "PWC 条件包组合",
    "chain.s5d": "同 PWS 内跨字段相撞",
    "chain.s6": "PWS 冻结",
    "chain.s6d": "pwsReadiness 5 项 · 下游只能消费 frozen PWS",
    "chain.s7": "平台适配",
    "chain.s7d": "allow / downgrade / block / pending_review",
    "chain.s8": "PCP 平台条件包",
    "chain.s8d": "17 字段 · 权重 Σ ≤ 1.0",
    "chain.s9": "三包 CSP/CSTP/CEP",
    "chain.s9d": "策略/结构/表达 · layerSpaces 通用底座",
    "chain.s10": "合规清洗",
    "chain.s10d": "block_required 一票否决",
    "chain.s11": "final_id 组装",
    "chain.s11d": "只读 · Guard 全过才生成",
    "chain.s12": "内容生成",
    "chain.s12d": "生成 + 合规复检",
    "chain.s13": "反馈回流",
    "chain.s13d": "KUP 提案 → 人工 Gate → 回写知识",

    "guard.kicker": "WHY A CHAIN, NOT A TOOL",
    "guard.title": "AI 只产候选，Gate 裁决，单一出口。",
    "guard.sub":
      "白名单不是手写词表——它是在（产品 × 目的 × 平台 × 账号）上下文下各层原子相撞出的可用条件包。frozen PWS 快照隔离了「决策」与「消费」，下游读到的永远不会漂移。",
    "guard.p1": "AI 只产候选、不静默生效",
    "guard.p2": "每个可发布物只对应一个 final_id",
    "guard.p3": "反馈回流闭环反哺知识库",
    "guard.p4": "每个原子可追溯到可审计决策（Q1–Q72）",

    "cta.title": "让内容产线跑在 Loom 上",
    "cta.sub": "私域内测开放中。告诉我们你想先跑哪些平台和产品线。",
    "cta.button": "申请访问",
    "cta.email": "b4yernjf@gmail.com",

    "foot.tag": "私域内容生产白名单平台",
    "foot.nav.chain": "13 段链",
    "foot.nav.cta": "内测",
    "foot.nav.privacy": "隐私政策",
    "foot.nav.terms": "服务条款",

    "legal.privacyTitle": "隐私政策",
    "legal.privacyBody": "占位内容。公开上线前将完善隐私政策。",
    "legal.termsTitle": "服务条款",
    "legal.termsBody": "占位内容。公开上线前将完善服务条款。",
    "legal.updated": "最后更新",
  },
} as const;

export type Lang = keyof typeof languages;
export type UIKey = keyof (typeof ui)["en"];
