import { useEffect, useState } from "react";
import { TApi, TApiKeys } from "../api";
import { getByDotKey, runFnWithTuple } from "../shared/objects";
import { GetByDotKey } from "../types/utility";
import useApi from "./useApi";

export default function useApiRequest<T extends TApiKeys>(
	schema: T, 
	...params: Parameters<GetByDotKey<TApi, T>>
){
	const api = useApi();
	const fn = getByDotKey(api, schema);
	type Data = Awaited<ReturnType<typeof fn>>;

	const [ result, setResult ] = useState<ApiRequestResult<Data>>({
		done: false,
		success: false,
		data: null,
		error: null
	})
	
	useEffect(() => {
		runFnWithTuple(fn, params)
			.then(data => setResult({
				done: true,
				success: true,
				data: data as Data,
				error: null
			}))
			.catch((e: Error) => setResult({
				done: true,
				success: false,
				data: null,
				error: e
			}))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	return result;
}

type ApiRequestLoading = {
	done: false,
	success: false,
	data: null,
	error: null
}

type ApiRequestDone<T> = {
	done: true,
	success: true,
	data: T,
	error: null
}

type ApiRequestError = {
	done: true,
	success: false,
	data: null,
	error: Error
}

type ApiRequestResult<T> = ApiRequestLoading | ApiRequestDone<T> | ApiRequestError;