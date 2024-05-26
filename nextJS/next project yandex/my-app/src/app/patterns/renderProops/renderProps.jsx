"use client"
// 

import React from "react";
import { useState } from "react";

const Layout = ( {
  renderHeader,
  renderLeftBar,
  renderMiddle,
  renderRightBar,
  renderFooter 
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Переключалка</button>
      <header className="header">
        {renderHeader?.()}
      </header>

      <div className="mainContent">
        <div className="leftBar">{renderLeftBar?.()}</div>
        <div className="middle">{renderMiddle?.(isOpen)}</div>
        <div className="rightBar">{renderRightBar?.()}</div>
      </div>

      <footer className="footer">
      {renderFooter?.(isOpen)}
      </footer>
    </div>
  )
}

export default function RenderProps() {
  return (
    <div>
      <Layout 
      renderHeader={() => (<div>header</div>)} 
      renderMiddle={(isOpen) => (<div>{isOpen ? 'открыто' : 'закрыто'}</div>)}
      renderFooter={() => (<div>footer</div>)}
      />
    </div>
  )
}