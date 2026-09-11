import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'map' | 'midgard' | 'rune'>('map');
  const [selectedRune, setSelectedRune] = useState<string>('fehu');
  const [wisdomSparks, setWisdomSparks] = useState(25);
  const [stepCompleted, setStepCompleted] = useState(false);

  // Главная карта: Древо Иггдрасиль с замками прямо на ветвях
  if (currentScreen === 'map') {
    return (
      <div style={styles.containerMap}>
        {/* Верхняя панель статуса */}
        <div style={styles.statusBarOverlay}>
          <span>🌳 Иггдрасиль</span>
          <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
        </div>

        {/* Область с картинкой-деревом и интерактивными точками замков */}
        <div style={styles.treeContainer}>
          <img 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop" 
            alt="Мировое Древо" 
            style={styles.treeImageBg}
          />
          {/* Затемнение для читаемости интерфейса */}
          <div style={styles.treeOverlay}></div>

          {/* Интерактивные замки на ветвях дерева */}
          <div style={styles.castlesWrapper}>
            
            {/* 1. Открытый замок Мидгарда (на средних ветвях, с домиками и рекой) */}
            <div 
              style={{...styles.castlePin, ...styles.pinMidgard}}
              onClick={() => setCurrentScreen('midgard')}
            >
              <div style={styles.pinIcon}>🏰</div>
              <div style={styles.pinLabelActive}>
                <strong>Мидгард</strong>
                <span>Домики, река, тропа</span>
              </div>
            </div>

            {/* 2. Заблокированные миры в дымке */}
            <div style={{...styles.castlePin, ...styles.pinLocked1}}>
              <div style={styles.pinIconLocked}>🔥</div>
              <div style={styles.pinLabelLocked}>Муспельхейм (В дымке)</div>
            </div>

            <div style={{...styles.castlePin, ...styles.pinLocked2}}>
              <div style={styles.pinIconLocked}>❄️</div>
              <div style={styles.pinLabelLocked}>Нифльхейм (В тумане)</div>
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

  // Экран локации Мидгарда: живописное пространство с домиками, рекой и тропой рун
  if (currentScreen === 'midgard') {
    return (
      <div style={styles.container}>
        <div style={styles.statusBar}>
          <button style={styles.backBtn} onClick={() => setCurrentScreen('map')}>⬅ На Древо</button>
          <span style={styles.sparks}>✨ {wisdomSparks} Искр</span>
        </div>

        <main style={styles.mapContent}>
          <div style={styles.locationHeader}>
            <span style={{fontSize: '36px'}}>🏡🌲</span>
            <div>
              <h2 style={styles.mapTitle}>Мидгард • Земля людей</h2>
              <p style={styles.mapSubtitle}>Уютные домики у реки, зелёные леса и горы вдалеке</p>
            </div>
          </div>

          <div style={styles.runesList}>
            <div 
              style={styles.runeNode}
              onClick={() => { setSelectedRune('fehu'); setCurrentScreen('rune'); }}
            >
              <span style={styles.nodeIcon}>ᚠ</span>
              <div style={{flex: 1}}>
                <div style={styles.nodeTitle}>1. Феху</div>
                <div style={styles.nodeDesc}>Искра в тумане у подножия гор</div>
              </div>
              <span style={{color: '#58a6ff', fontSize: '18px'}}>➔</span>
            </div>

            <div style={{...styles.runeNode, opacity: 0.5}}>
              <span style={styles.nodeIcon}>ᚢ</span>
              <div style={{flex: 1}}>
                <div style={styles.nodeTitle}>2. Уруз</div>
                <div style={styles.nodeDesc}>Сила дикой природы (скоро)</div>
              </div>
            </div>

            <div style={{...styles.runeNode, opacity: 0.5}}>
              <span style={styles.nodeIcon}>ᚦ</span>
              <div style={{flex: 1}}>
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

  // Экран конкретной руны (Феху)
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

      <main style={styles.mainContent}>
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

// Стили интерфейса
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100vh',
    justifyContent: 'space-between',
    background: 'linear-gradient(180deg, #0d1117 0%, #040609 100%)',
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
  statusBarOverlay: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    color: '#fff',
    padding: '4px 8px',
    zIndex: 10,
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
    backdropFilter: 'blur(4px)',
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
  treeContainer: {
    position: 'relative' as const,
    flex: 1,
    borderRadius: '16px',
    overflow: 'hidden',
    margin: '8px 0',
    border: '1px solid #30363d',
  },
  treeImageBg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    position: 'absolute' as const,
    top: 0,
    left: 0,
  },
  treeOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(7,9,14,0.3) 0%, rgba(7,9,14,0.7) 100%)',
  },
  castlesWrapper: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
  },
  castlePin: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 16px',
    borderRadius: '12px',
    cursor: 'pointer',
    backdropFilter: 'blur(6px)',
    transition: 'transform 0.2s',
    width: '80%',
    maxWidth: '260px',
  },
  pinMidgard: {
    background: 'rgba(22, 40, 30, 0.85)',
    border: '2px solid #2ea043',
    boxShadow: '0 0 15px rgba(46, 160, 67, 0.5)',
  },
  pinLocked1: {
    background: 'rgba(20, 24, 33, 0.75)',
    border: '1px solid #30363d',
    opacity: 0.8,
    cursor: 'default',
  },
  pinLocked2: {
    background: 'rgba(20, 24, 33, 0.75)',
    border: '1px solid #30363d',
    opacity: 0.8,
    cursor: 'default',
  },
  pinIcon: {
    fontSize: '26px',
  },
  pinIconLocked: {
    fontSize: '22px',
    filter: 'grayscale(50%)',
  },
  pinLabelActive: {
    display: 'flex',
    flexDirection: 'column' as const,
    fontSize: '13px',
    color: '#fff',
  },
  pinLabelLocked: {
    fontSize: '13px',
    color: '#8b949e',
  },
  locationHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    background: 'rgba(22, 27, 34, 0.8)',
    padding: '16px',
    borderRadius: '16px',
    border: '1px solid #30363d',
    marginBottom: '16px',
  },
  mapContent: {
    flex: 1,
    overflowY: 'auto' as const,
    paddingTop: '8px',
  },
  mapTitle: {
    fontSize: '18px',
    margin: '0 0 4px 0',
    color: '#c9d1d9',
  },
  mapSubtitle: {
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
    background: 'rgba(22, 27, 34, 0.9)',
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
