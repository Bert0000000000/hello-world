import './App.css'

const teamMembers = [
  { name: '唐僧', role: 'CEO', emoji: '🧙', color: '#FF6B6B', identity: '团队领导者，负责决策和方向把控' },
  { name: '孙悟空', role: '架构师｜PM', emoji: '🐵', color: '#4ECDC4', identity: '产品规划与架构设计，任务协调' },
  { name: '猪八戒', role: 'RD&QA', emoji: '🐷', color: '#45B7D1', identity: '全栈开发与测试，代码质量保障' },
  { name: '沙和尚', role: '运营', emoji: '🧔', color: '#96CEB4', identity: '进度跟踪，风险监控，文档管理' },
  { name: '白龙马', role: 'GTM', emoji: '🐴', color: '#FFEAA7', identity: '市场推广，用户增长，渠道策略' },
]

const difficulties81 = Array.from({ length: 81 }, (_, i) => ({
  number: 81 - i,
  name: `第${81 - i}难`,
  description: `取经路上的第${81 - i}个挑战`
}))

function App() {
  return (
    <div className="app">
      {/* 首屏 - Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Hello World</h1>
        <div className="team-preview">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card-mini" style={{ borderColor: member.color }}>
              <span className="emoji">{member.emoji}</span>
              <span className="name">{member.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 第二屏 - Team Section */}
      <section className="team-section">
        <h2 className="section-title">西游天团</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card" style={{ borderTopColor: member.color }}>
              <div className="card-header">
                <span className="emoji-large">{member.emoji}</span>
                <div>
                  <h3 className="card-name">{member.name}</h3>
                  <p className="card-role">{member.role}</p>
                </div>
              </div>
              <p className="card-identity">{member.identity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 第三屏 - 81 Difficulties Section */}
      <section className="difficulties-section">
        <h2 className="section-title">八十一难</h2>
        <div className="difficulties-list">
          {difficulties81.map((diff) => (
            <div key={diff.number} className="difficulty-item">
              <span className="diff-number">{diff.number}</span>
              <span className="diff-name">{diff.name}</span>
              <span className="diff-desc">{diff.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>西游天团 © 2026 | Hello World Project</p>
      </footer>
    </div>
  )
}

export default App
