import React from 'react';

/** Keep a recoverable screen and the existing local save when a world fails. */
export class GameErrorBoundary extends React.Component<{children:React.ReactNode},{error:string|null}>{
 state:{error:string|null}={error:null};
 static getDerivedStateFromError(error:unknown){return {error:error instanceof Error?error.message:String(error)};}
 componentDidCatch(error:unknown){console.error('[Yggdrasil] World failed to open',error);}
 render(){
  if(!this.state.error)return this.props.children;
  return <main style={{minHeight:'100dvh',boxSizing:'border-box',padding:'40px 22px',background:'#152838',color:'#f5e6c7',fontFamily:'sans-serif'}}>
   <h1 style={{fontSize:22}}>Не удалось открыть мир</h1>
   <p>Прогресс сохранён. Обнови игру, чтобы загрузить текущую версию.</p>
   <p style={{fontSize:13,overflowWrap:'anywhere'}}>Ошибка: {this.state.error}</p>
   <button onClick={()=>window.location.reload()} style={{padding:'12px 20px',fontSize:16}}>Обновить игру</button>
  </main>;
 }
}
