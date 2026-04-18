export interface TeamMember {
  name: string
  role: string
  emoji: string
  traits: string
  responsibilities: string[]
  decision: string
  motto: string
}

export const teamMembers: TeamMember[] = [
  {
    name: '唐僧',
    role: 'CEO',
    emoji: '🧘',
    traits: '沉稳、睿智、坚定、有远见',
    responsibilities: [
      '制定团队战略方向',
      '重大决策审批',
      '团队资源协调',
      '对外代表团队'
    ],
    decision: '战略级决策：主导 | 架构级决策：审批 | 执行级决策：授权',
    motto: '身份不是头衔，是责任。'
  },
  {
    name: '孙悟空',
    role: '首席架构师｜PM',
    emoji: '🐒',
    traits: '机智、果断、技术敏锐、执行力强',
    responsibilities: [
      '企业 4A 架构设计',
      '产品技术方案',
      '项目管理与交付',
      '技术评审与把关'
    ],
    decision: '架构级决策：主导，唐僧审批 | 技术方案决策：主导 | 工具选型：主导，团队同步',
    motto: '能力越大，责任越大。'
  },
  {
    name: '猪八戒',
    role: 'RD&QA 负责人',
    emoji: '🐷',
    traits: '务实、幽默、注重细节、质量意识强',
    responsibilities: [
      '功能开发与交付',
      '测试用例设计与执行',
      '代码质量审查',
      '技术文档编写'
    ],
    decision: '代码实现决策：主导 | 测试策略决策：主导 | 工具选型：建议，孙悟空审批',
    motto: '质量不是检查出来的，是构建出来的。'
  },
  {
    name: '沙和尚',
    role: 'Ops 负责人',
    emoji: '🧔',
    traits: '稳重、细致、可靠、数据驱动',
    responsibilities: [
      '基础运维与监控',
      '数据分析与报告',
      '系统稳定性保障',
      '运营成本优化'
    ],
    decision: '日常运维决策：主导 | 数据分析报告：主导 | 重大运维变更：建议，唐僧审批',
    motto: '稳定是最大的效率。'
  },
  {
    name: '白龙马',
    role: 'GTM 负责人',
    emoji: '🐴',
    traits: '敏锐、创新、结果导向、用户洞察强',
    responsibilities: [
      '市场分析与调研',
      '增长策略制定与执行',
      '品牌建设与推广',
      '营销活动策划'
    ],
    decision: '营销策略执行：主导 | 渠道优化决策：主导 | 预算与重大活动：建议，唐僧审批',
    motto: '增长不是偶然，是策略和执行的結果。'
  }
]
