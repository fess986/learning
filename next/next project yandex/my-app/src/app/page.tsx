'use client'
// указываем то, что этот компонент будет рендериться на клиенте а не на сервере, это позволяет нам использовать интерактивность

import {CompoundComponent} from './patterns/composedComponent/composedComponent.jsx' // базовое применение паттерна композитных компонентов на примере одного тогглера
import {AccordionComponent} from './patterns/composedComponent/accordion.jsx' // продвинутое использоване паттерна композитных компонентов на примере аккордиона со списком
import RenderProps from './patterns/renderProops/renderProps.jsx' // тут мы используем паттерн RenderProps , он же layout  , который помогает нам в случае, если мы хотим заранее сделать разметку страницы и потом туда кидать компоненты в виде функций, с нужными нам параметрами
import Hoc from './patterns/hoc/hoc.jsx' // название говорит само за себя, но в реализации странный баг
import ContextPage from './patterns/optimizationContext/contextPage.jsx'
import Redux from './reduxPage/redux.jsx'

import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Home1() { // от названия похоже ничего не зависит. Но обязательно нужно присутствие файла page.tsx и дефолтного экспорта по умолчанию

const router = useRouter();

  return (
    <div>
      <div>Main page</div>
      <Redux />
      {/* <Link href={"/selection"}>Перейти через ссылку</Link>
      <button onClick={() => router.push('/selection')}>Перейти через кнопку</button>
      <button onClick={() => router.push('/films')}>Перейти через кнопку на страницу фильмов</button> */}
    </div>
  )
}
