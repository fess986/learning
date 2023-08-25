"use client"
// паттерн аккардеон

import React from 'react';
import { useState, useContext, useCallback } from 'react';

const AccordionContext = React.createContext();

function AccordionCompaund( {children} ) {
  const [activeGroup, setActiveGroup] = useState();

  return (
    <AccordionContext.Provider value={ {activeGroup, setActiveGroup} }>{children}</AccordionContext.Provider>
  )
}

AccordionCompaund.Group = function Group( {children, title} ) {
  const {activeGroup, setActiveGroup} = useContext(AccordionContext);

  return (
    <div>
      <button onClick={() => {
        setActiveGroup((pressedTitle) => {
          return pressedTitle === title ? undefined : title
        })
        }}>{title}</button>
      { activeGroup === title && <div>{children}</div>}
    </div>
  )
}

AccordionCompaund.Item = function Item( {title} ) {
  return (
      <div>{title}</div>
  )
}

export function AccordionComponent() {
  return (
    <>
      <AccordionCompaund >
        <>
          <AccordionCompaund.Group title={'Группа 1'}>
            <AccordionCompaund.Item title={'элемент 1'}/>
            <AccordionCompaund.Item title={'элемент 2'}/>
            <AccordionCompaund.Item title={'элемент 3'}/>
          </AccordionCompaund.Group>
          <AccordionCompaund.Group title={'Группа 2'}>
            <AccordionCompaund.Item title={'элемент 4'}/>
            <AccordionCompaund.Item title={'элемент 5'}/>
            <AccordionCompaund.Item title={'элемент 6'}/>
          </AccordionCompaund.Group>
          <AccordionCompaund.Group title={'Группа 3'}>
            <AccordionCompaund.Item title={'элемент 7'}/>
            <AccordionCompaund.Item title={'элемент 8'}/>
            <AccordionCompaund.Item title={'элемент 9'}/>
          </AccordionCompaund.Group>
        </>
      </AccordionCompaund>
    </>
  )
}