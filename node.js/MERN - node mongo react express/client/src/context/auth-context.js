import { createContext } from "react";

const noop = () => {};

export const AuthContext = createContext({
	login: noop,
	logout: noop,
	token: null,
	userId: null,
	isAuth: false,
});

// через функцию лучше не создавать, так как будут создаваться новые инстансы контекста при каждом новом вызове этой функции, когда мы захотим использовать этот контекст
// export default function useAuthContext() {
// 	const authContext = createContext({
// 		login: noop,
// 		logout: noop,
// 		token: null,
// 		userId: null,
// 		isAuth: false,
// 	});

//   return authContext
// }



// export const AuthContextProvider = ({ children, value }) => {
// 	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuthContext = () => {
//   return useContext(AuthContext)
// }

// export const useAuthContext = useContext(AuthContext)
