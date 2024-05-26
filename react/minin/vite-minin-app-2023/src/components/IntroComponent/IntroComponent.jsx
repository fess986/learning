import React from "react";
import "./IntroComponent.css";

// это классический jsx - компонент, ниже будет тоже самое только через React.createElement
// export default function IntroComponent() {
//   return (
//     <section>
//       <h1 className='center'>Intro Component h1</h1>
//       <h3 className='center' style={{color: 'red'}}>Intro Component h3 text</h3>
//     </section>
//   )
// }

// children-ов можно перечислять и без массива, при этом даже не нужно будет указывать ключ
export default function IntroComponent() {
	return React.createElement("section", null, 
		[React.createElement("h1", {className : 'center', key : 'ass'} , "Intro Component h1"),
		React.createElement("h3", {className : 'center', style : {color : 'red'}, key : 'ass2'} , "Intro Component h3 text")]
	);
}
