import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  // Навигация: 'map' — общая карта миров, 'midgard' — тропа мира, 'rune' — конкретная руна
  const [currentScreen, setCurrentScreen] = useState<'map' | 'midgard' | 'rune'>('map');
  const [selectedRune, setSelectedRune] = useState<string>('fehu');
  const [wisdomSparks, setWisdomSparks] = useState(15);
  const [stepCompleted, setStepCompleted] = useState(false);

  // Экран 1: Главная карта Иггдрасиля с замками
  if (currentScreen === 'map') {
    return (
      <div style={styles.container}>
        <div style={styles.statusBar}>
          <span>🌳 Древо Иггдрасиль • Карта Миров</span>
          <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
        </div>

        <main style={styles.mapContent}>
          <h2 style={styles.mapTitle}>Девять Миров</h2>
          <p style={styles.mapSubtitle}>Выберите мир для исследования</p>

          <div style={styles.worldsGrid}>
            {/* Открытый мир: Мидгард */}
            <div 
              style={{...styles.worldCard, ...styles.worldOpen}}
              onClick={() => setCurrentScreen('midgard')}
            >
              <div style={styles.worldIcon}>🏰</div>
              <div style={styles.worldName}>Мидгард</div>
              <div style={styles.worldStatus}>Открыт • 3 руны</div>
            </div>

            {/* Закрытые миры в дымке */}
            <div style={{...styles.worldCard, ...styles.worldLocked}}>
              <div style={styles.worldIcon}>🔥</div>
              <div style={styles.worldName}>Муспельхейм</div>
              <div style={styles.worldStatus}>🔒 В тумане</div>
            </div>

            <div style={{...styles.worldCard, ...styles.worldLocked}}>
              <div style={styles.worldIcon}>❄️</div>
              <div style={styles.worldName}>Нифльхейм</div>
              <div style={styles.worldStatus}>🔒 В тумане</div>
            </div>

            <div style={{...styles.worldCard, ...styles.worldLocked}}>
              <div style={styles.worldIcon}>⛰️</div>
              <div style={styles.worldName}>Ётунхейм</div>
              <div style={styles.worldStatus}>🔒 В тумане</div>
            </div>
          </div>
        </main>

        <nav style={styles.bottomNav}>
          <button style={{...styles.navItem, ...styles.navActive}}>🌲 Путь</button>
          <button style={styles.navItem}>📜 Испытания</button>
          <button style={styles.navItem}>🎁 Дар</button>
          <button style={styles.navItem}>🏛 Чертог</button>
        </nav>
      </div>
    );
  }

  // Экран 2: Тропа внутри Мидгарда
  if (currentScreen === 'midgard') {
    return (
      <div style={styles.container}>
        <div style={styles.statusBar}>
          <button style={styles.backBtn} onClick={() => setCurrentScreen('map')}>⬅ На карту</button>
          <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
        </div>

        <main style={styles.mapContent}>
          <h2 style={styles.mapTitle}>Мидгард • Тропа у подножия</h2>
          <p style={styles.mapSubtitle}>Пройдите руны этого мира</p>

          <div style={styles.runesList}>
            <div 
              style={styles.runeNode}
              onClick={() => { setSelectedRune('fehu'); setCurrentScreen('rune'); }}
            >
              <span style={styles.nodeIcon}>ᚠ</span>
              <div>
                <div style={styles.nodeTitle}>1. Феху</div>
                <div style={styles.nodeDesc}>Искра в тумане</div>
              </div>
            </div>

            <div style={{...styles.runeNode, opacity: 0.6}}>
              <span style={styles.nodeIcon}>ᚢ</span>
              <div>
                <div style={styles.nodeTitle}>2. Уруз</div>
                <div style={styles.nodeDesc}>Сила дикой природы (скоро)</div>
              </div>
            </div>

            <div style={{...styles.runeNode, opacity: 0.6}}>
              <span style={styles.nodeIcon}>ᚦ</span>
              <div>
                <div style={styles.nodeTitle}>3. Турисаз</div>
                <div style={styles.nodeDesc}>Врата и молот (скоро)</div>
              </div>
            </div>
          </div>
        </main>

        <nav style={styles.bottomNav}>
          <button style={{...styles.navItem, ...styles.navActive}}>🌲 Путь</button>
          <button style={styles.navItem}>📜 Испытания</button>
          <button style={styles.navItem}>🎁 Дар</button>
          <button style={styles.navItem}>🏛 Чертог</button>
        </nav>
      </div>
    );
  }

  // Экран 3: Конкретная руна (Феху)
  const handleFehuClick = () => {
    if (!stepCompleted) {
      setWisdomSparks(wisdomSparks + 5);
      setStepCompleted(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.statusBar}>
        <button style={styles.backBtn} onClick={() => setCurrentScreen('midgard')}>⬅ К тропе</button>
        <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
      </div>

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
    background: 'linear-gradient(180deg, #121824 0%, #07090e 100%)',
    padding: '16px',
    boxSizing: 'border-box' as const,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#e6edf3',
    overflow: 'hidden',
  },
  statusBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    color: '#8b949e',
    paddingBottom: '8px',
    borderBottom: '1px solid #21262d',
  },
  sparks: {
    color: '#f0883e',
    fontWeight: 'bold' as const,
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#58a6ff',
    cursor: 'pointer',
    fontSize: '13px',
    padding: 0,
  },
  mapContent: {
    flex: 1,
    overflowY: 'auto' as const,
    paddingTop: '10px',
  },
  mapTitle: {
    fontSize: '20px',
    margin: '0 0 4px 0',
    color: '#c9d1d9',
  },
  mapSubtitle: {
    fontSize: '13px',
    color: '#8b949e',
    margin: '0 0 16px 0',
  },
  worldsGrid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
  },
  worldCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid #30363d',
    gap: '14px',
    cursor: 'pointer',
  },
  worldOpen: {
    background: 'rgba(35, 134, 54, 0.15)',
    borderColor: '#238636',
  },
  worldLocked: {
    background: 'rgba(22, 27, 34, 0.5)',
    opacity: 0.7,
    cursor: 'default',
  },
  worldIcon: {
    fontSize: '28px',
  },
  worldName: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: '#e6edf3',
    flex: 1,
  },
  worldStatus: {
    fontSize: '12px',
    color: '#8b949e',
  },
  runesList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  runeNode: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(22, 27, 34, 0.8)',
    border: '1px solid #30363d',
    borderRadius: '12px',
    padding: '12px 16px',
    gap: '16px',
    cursor: 'pointer',
  },
  nodeIcon: {
    fontSize: '28px',
    color: '#58a6ff',
  },
  nodeTitle: {
    fontSize: '15px',
    fontWeight: 'bold' as const,
    color: '#c9d1d9',
  },
  nodeDesc: {
    fontSize: '12px',
    color: '#8b949e',
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
