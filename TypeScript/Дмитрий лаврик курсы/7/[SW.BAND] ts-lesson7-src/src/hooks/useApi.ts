import { useContext } from "react";
import apiContext from "../context/apiContext";

export default function useApi(){
	const api = useContext(apiContext);

	if(api !== null){
		return api;
	}

	throw new Error('Some moron run app without apiContext.Provider');
}