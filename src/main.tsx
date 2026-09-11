import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [wisdomSparks, setWisdomSparks] = useState(10);
  const [stepCompleted, setStepCompleted] = useState(false);

  const handleFehuClick = () => {
    if (!stepCompleted) {
      setWisdomSparks(wisdomSparks + 5);
      setStepCompleted(true);
    }
  };

  return (
    <div style={styles.container}>
      {/* Верхняя строка статуса */}
      <div style={styles.statusBar}>
        <span>🌲 Мидгард • Тропа у подножия</span>
        <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
      </div>

      {/* Центральная зона */}
      <main style={styles.mainContent}>
        <div style={styles.runeCard}>
          <div style={styles.runeSymbol}>ᚠ</div>
          <h2 style={styles.runeTitle}>Руна Феху • Искра в тумане</h2>
          <p style={styles.runeText}>
            Густой туман окутывает подножие гор. Здесь, на границе миров, зарождается твой путь. 
            Древний камень под ногами хранит первую искру — энергию начала, движения и обретения.
          </p>
          
          <button 
            style={{
              ...styles.actionBtn, 
              backgroundColor: stepCompleted ? '#30363d' : '#238636',
              color: stepCompleted ? '#8b949e' : '#ffffff'
            }}
            onClick={handleFehuClick}
          >
            {stepCompleted ? '✅ Первый шаг сделан' : 'Шагнуть в туман (Получить знак)'}
          </button>
        </div>
      </main>

      {/* Нижняя панель навигации */}
      <nav style={styles.bottomNav}>
        <button style={{...styles.navItem, ...styles.navActive}}>🌲 Путь</button>
        <button style={styles.navItem}>📜 Испытания</button>
        <button style={styles.navItem}>🎁 Дар</button>
        <button style={styles.navItem}>🏛 Чертог</button>
      </nav>
    </div>
  );
}

// Стили интерфейса
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100vh',
    justifyContent: 'space-between',
    background: 'linear-gradient(180deg, #121824 0%, #07090e 100% )',
    padding: '16px',
    boxSizing: 'border-box' as const,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#e6edf3',
    overflow: 'hidden',
  },
  statusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#8b949e',
    paddingBottom: '8px',
    borderBottom: '1px solid #21262d',
  },
  sparks: {
    color: '#f0883e',
    fontWeight: 'bold' as const,
  },
  mainContent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  runeCard: {
    background: 'rgba(22, 27, 34, 0.85)',
    border: '1px solid #30363d',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center' as const,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
    maxWidth: '340px',
    width: '100%',
  },
  runeSymbol: {
    fontSize: '64px',
    color: '#58a6ff',
    marginBottom: '12px',
    textShadow: '0 0 15px rgba(88, 166, 255, 0.4)',
  },
  runeTitle: {
    fontSize: '18px',
    margin: '0 0 12px 0',
    color: '#c9d1d9',
  },
  runeText: {
    fontSize: '13px',
    lineHeight: '1.5',
    color: '#8b949e',
    marginBottom: '20px',
  },
  actionBtn: {
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: 'bold' as const,
    width: '100%',
    cursor: 'pointer',
  },
  bottomNav: {
    display: 'flex',
    justifyContent: 'space-around',
    background: '#161b22',
    border: '1px solid #30363d',
    borderRadius: '12px',
    padding: '8px',
  },
  navItem: {
    background: 'none',
    border: 'none',
    color: '#8b949e',
    fontSize: '12px',
    cursor: 'pointer',
  },
  navActive: {
    color: '#58a6ff',
    fontWeight: 'bold' as const,
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
