import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'map' | 'midgard' | 'rune'>('map');
  const [wisdomSparks, setWisdomSparks] = useState(25);
  const [stepCompleted, setStepCompleted] = useState(false);

  // Главная карта: Иггдрасиль с замками
  if (currentScreen === 'map') {
    return (
      <div style={styles.containerMap}>
        <div style={styles.statusBar}>
          <span>🌳 Иггдрасиль • Выберите мир</span>
          <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
        </div>

        {/* Интерактивная карта мира */}
        <div style={styles.mapViewport}>
          <div style={styles.worldNodeCard} onClick={() => setCurrentScreen('midgard')}>
            <div style={styles.nodeIconWrap}>🏰</div>
            <div style={styles.nodeInfo}>
              <div style={styles.nodeTitle}>Мидгард</div>
              <div style={styles.nodeDesc}>Домики, реки, тропа людей (Открыть)</div>
            </div>
            <span style={styles.arrow}>➔</span>
          </div>

          <div style={{...styles.worldNodeCard, opacity: 0.6, cursor: 'default'}}>
            <div style={styles.nodeIconWrap}>🔥</div>
            <div style={styles.nodeInfo}>
              <div style={styles.nodeTitle}>Муспельхейм</div>
              <div style={styles.nodeDesc}>Огненные земли (В дымке тумана)</div>
            </div>
          </div>

          <div style={{...styles.worldNodeCard, opacity: 0.6, cursor: 'default'}}>
            <div style={styles.nodeIconWrap}>❄️</div>
            <div style={styles.nodeInfo}>
              <div style={styles.nodeTitle}>Нифльхейм</div>
              <div style={styles.nodeDesc}>Ледяные чертоги (Заблокировано)</div>
            </div>
          </div>
        </div>

        <nav style={styles.bottomNav}>
          <button style={{...styles.navItem, ...styles.navActive}}>🌲 Путь</button>
          <button style={styles.navItem}>📜 Испытания</button>
          <button style={styles.navItem}>🎁 Дар</button>
          <button style={styles.navItem}>🏛 Чертог</button>
        </nav>
      </div>
    );
  }

  // Экран локации Мидгарда (домики, река, путь рун)
  if (currentScreen === 'midgard') {
    return (
      <div style={styles.container}>
        <div style={styles.statusBar}>
          <button style={styles.backBtn} onClick={() => setCurrentScreen('map')}>⬅ На Древо</button>
          <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
        </div>

        <main style={styles.content}>
          <div style={styles.locationBanner}>
            <span style={{fontSize: '32px'}}>🏡</span>
            <div>
              <h2 style={styles.locTitle}>Мидгард • Земля людей</h2>
              <p style={styles.locSubtitle}>Уютные домики, реки и горы. Тропа начинается здесь.</p>
            </div>
          </div>

          <div style={styles.runesList}>
            <div 
              style={styles.runeNode}
              onClick={() => setCurrentScreen('rune')}
            >
              <span style={styles.runeSymbolSmall}>ᚠ</span>
              <div style={{flex: 1}}>
                <div style={styles.runeName}>1. Феху</div>
                <div style={styles.runeSub}>Искра в тумане</div>
              </div>
              <span style={{color: '#58a6ff'}}>➔</span>
            </div>

            <div style={{...styles.runeNode, opacity: 0.5}}>
              <span style={styles.runeSymbolSmall}>ᚢ</span>
              <div style={{flex: 1}}>
                <div style={styles.runeName}>2. Уруз</div>
                <div style={styles.runeSub}>Сила дикой природы (скоро)</div>
              </div>
            </div>

            <div style={{...styles.runeNode, opacity: 0.5}}>
              <span style={styles.runeSymbolSmall}>ᚦ</span>
              <div style={{flex: 1}}>
                <div style={styles.runeName}>3. Турисаз</div>
                <div style={styles.runeSub}>Врата и молот (скоро)</div>
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

  // Экран руны Феху
  const handleFehuClick = () => {
    if (!stepCompleted) {
      setWisdomSparks(wisdomSparks + 5);
      setStepCompleted(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.statusBar}>
        <button style={styles.backBtn} onClick={() => setCurrentScreen('midgard')}>⬅ К тропе Мидгарда</button>
        <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
      </div>

      <main style={styles.contentCenter}>
        <div style={styles.runeCard}>
          <div style={styles.runeSymbol}>ᚠ</div>
          <h2 style={styles.runeTitle}>Руна Феху • Искра в тумане</h2>
          <p style={styles.runeText}>
            Густой туман окутывает подножие гор Мидгарда. Здесь, у рек и лесов, зарождается твой путь. 
            Древний камень под ногами хранит первую искру — энергию начала, движения и обретения.
          </p>
          
          <button 
            style={{
              ...styles.actionBtn, 
              backgroundColor: stepCompleted ? '#21262d' : '#238636',
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

// Стили
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100vh',
    justifyContent: 'space-between',
    background: '#07090e',
    padding: '16px',
    boxSizing: 'border-box' as const,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#e6edf3',
    overflow: 'hidden',
  },
  containerMap: {
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
    fontSize: '13px',
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
  mapViewport: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    gap: '14px',
    padding: '10px 0',
  },
  worldNodeCard: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(22, 27, 34, 0.9)',
    border: '1px solid #30363d',
    borderRadius: '14px',
    padding: '16px',
    gap: '14px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  nodeIconWrap: {
    fontSize: '32px',
  },
  nodeInfo: {
    flex: 1,
  },
  nodeTitle: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: '#e6edf3',
    marginBottom: '2px',
  },
  nodeDesc: {
    fontSize: '12px',
    color: '#8b949e',
  },
  arrow: {
    color: '#58a6ff',
    fontSize: '18px',
    fontWeight: 'bold' as const,
  },
  content: {
    flex: 1,
    overflowY: 'auto' as const,
    paddingTop: '12px',
  },
  contentCenter: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    background: 'rgba(22, 27, 34, 0.85)',
    border: '1px solid #30363d',
    borderRadius: '14px',
    padding: '16px',
    marginBottom: '16px',
  },
  locTitle: {
    fontSize: '17px',
    margin: '0 0 4px 0',
    color: '#c9d1d9',
  },
  locSubtitle: {
    fontSize: '12px',
    color: '#8b949e',
    margin: 0,
  },
  runesList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  runeNode: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(22, 27, 34, 0.85)',
    border: '1px solid #30363d',
    borderRadius: '12px',
    padding: '14px 16px',
    gap: '14px',
    cursor: 'pointer',
  },
  runeSymbolSmall: {
    fontSize: '26px',
    color: '#58a6ff',
  },
  runeName: {
    fontSize: '15px',
    fontWeight: 'bold' as const,
    color: '#c9d1d9',
  },
  runeSub: {
    fontSize: '12px',
    color: '#8b949e',
  },
  runeCard: {
    background: 'rgba(22, 27, 34, 0.95)',
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
