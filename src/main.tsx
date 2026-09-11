import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'map' | 'midgard' | 'rune'>('map');
  const [wisdomSparks, setWisdomSparks] = useState(25);
  const [stepCompleted, setStepCompleted] = useState(false);

  // Главный экран: Иллюстрация Древа с замками на ветвях
  if (currentScreen === 'map') {
    return (
      <div style={styles.containerMap}>
        <div style={styles.statusBar}>
          <span>🌳 Мировое Древо Иггдрасиль</span>
          <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
        </div>

        {/* Область с живописным фоном-деревом */}
        <div style={styles.treeViewport}>
          {/* Твоя картинка Древа */}
          <img 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop" 
            alt="Иггдрасиль" 
            style={styles.treeBgImage}
          />
          <div style={styles.vignetteOverlay}></div>

          {/* Интерактивные замки на ветвях дерева */}
          <div style={styles.castlesLayer}>
            
            {/* Замок Мидгарда (на средних ветвях, где домики и река) */}
            <div style={styles.castlePinMidgard} onClick={() => setCurrentScreen('midgard')}>
              <div style={styles.pinGlow}></div>
              <span style={styles.pinCastleIcon}>🏰</span>
              <div style={styles.pinTooltip}>
                <strong>Мидгард</strong>
                <span>Домики у реки • Путь рун</span>
              </div>
            </div>

            {/* Заблокированные замки других миров */}
            <div style={styles.castlePinMuspel}>
              <span style={styles.pinLockedIcon}>🔥</span>
              <span style={styles.lockText}>Муспельхейм</span>
            </div>

            <div style={styles.castlePinNifil}>
              <span style={styles.pinLockedIcon}>❄️</span>
              <span style={styles.lockText}>Нифльхейм</span>
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

  // Экран локации Мидгарда: домики, река, тропа рун
  if (currentScreen === 'midgard') {
    return (
      <div style={styles.container}>
        <div style={styles.statusBar}>
          <button style={styles.backBtn} onClick={() => setCurrentScreen('map')}>⬅ На Древо</button>
          <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
        </div>

        <main style={styles.content}>
          <div style={styles.locationHeader}>
            <span style={{fontSize: '36px'}}>🏡🌲</span>
            <div>
              <h2 style={styles.locTitle}>Мидгард • Земля людей</h2>
              <p style={styles.locSubtitle}>Уютные домики у реки, зелёные леса и тропа рун</p>
            </div>
          </div>

          <div style={styles.runesList}>
            <div style={styles.runeNode} onClick={() => setCurrentScreen('rune')}>
              <span style={styles.nodeSymbol}>ᚠ</span>
              <div style={{flex: 1}}>
                <div style={styles.nodeName}>1. Феху</div>
                <div style={styles.nodeDesc}>Искра в тумане у подножия гор</div>
              </div>
              <span style={{color: '#58a6ff'}}>➔</span>
            </div>

            <div style={{...styles.runeNode, opacity: 0.5}}>
              <span style={styles.nodeSymbol}>ᚢ</span>
              <div style={{flex: 1}}>
                <div style={styles.nodeName}>2. Уруз</div>
                <div style={styles.nodeDesc}>Сила дикой природы (скоро)</div>
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
          <div style={styles.runeBigSymbol}>ᚠ</div>
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

// Стили с абсолютным позиционированием замков на ветвях дерева
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
    background: '#07090e',
    padding: '12px',
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
  treeViewport: {
    position: 'relative' as const,
    flex: 1,
    borderRadius: '16px',
    overflow: 'hidden',
    margin: '8px 0',
    border: '1px solid #30363d',
  },
  treeBgImage: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  vignetteOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle, rgba(0,0,0,0.1) 40%, rgba(7,9,14,0.75) 100%)',
    pointerEvents: 'none' as const,
  },
  castlesLayer: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none' as const,
  },
  castlePinMidgard: {
    position: 'absolute' as const,
    top: '42%',
    left: '52%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(15, 35, 20, 0.9)',
    border: '2px solid #2ea043',
    borderRadius: '12px',
    padding: '8px 12px',
    cursor: 'pointer',
    pointerEvents: 'auto' as const,
    boxShadow: '0 0 20px rgba(46, 160, 67, 0.6)',
    zIndex: 5,
  },
  pinGlow: {
    position: 'absolute' as const,
    inset: '-3px',
    borderRadius: '14px',
    border: '1px solid #56d364',
    animation: 'pulse 2s infinite',
  },
  pinCastleIcon: {
    fontSize: '24px',
  },
  pinTooltip: {
    display: 'flex',
    flexDirection: 'column' as const,
    fontSize: '11px',
    color: '#fff',
    whiteSpace: 'nowrap' as const,
  },
  castlePinMuspel: {
    position: 'absolute' as const,
    bottom: '22%',
    right: '18%',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(30, 15, 15, 0.8)',
    border: '1px solid #f85149',
    borderRadius: '10px',
    padding: '6px 10px',
    opacity: 0.85,
    pointerEvents: 'auto' as const,
  },
  castlePinNifil: {
    position: 'absolute' as const,
    bottom: '26%',
    left: '18%',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(15, 25, 35, 0.8)',
    border: '1px solid #58a6ff',
    borderRadius: '10px',
    padding: '6px 10px',
    opacity: 0.85,
    pointerEvents: 'auto' as const,
  },
  pinLockedIcon: {
    fontSize: '16px',
  },
  lockText: {
    fontSize: '11px',
    color: '#8b949e',
    whiteSpace: 'nowrap' as const,
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
  locationHeader: {
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
  nodeSymbol: {
    fontSize: '26px',
    color: '#58a6ff',
  },
  nodeName: {
    fontSize: '15px',
    fontWeight: 'bold' as const,
    color: '#c9d1d9',
  },
  nodeDesc: {
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
  runeBigSymbol: {
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
