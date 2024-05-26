'use client'

import React from "react"
import {usePathname} from 'next/navigation'

export default function Page2() {

  const path = usePathname()

  return (
    <>
      <div>Страница selection</div>
      <div>Вы сейчас на странице с адресом: {path}</div>
    </>
    
  )
}