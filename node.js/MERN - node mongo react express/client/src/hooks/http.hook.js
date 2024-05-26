import { useCallback, useState } from "react";

export default function useHttp() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	// обрабатываем запрос и возвращаем response.json(), если произойдёт ошибка, то выкидываем её для дальнейшей обработки и меняем стейт, который содержит булево значение ошибки 
	const request = useCallback(
		// useCallback для того чтобы не войти в рекурсию
		async (url, method = "GET", body = null, headers = {}) => {
			try {
        setLoading(true)

				if (body) {
					body = JSON.stringify(body)
					headers['Content-Type'] = 'application/json'
				}

				const response = await fetch(url, {
					method,
					body,
					headers,
				});

        const data = await response.json();

        if (!response.ok) {
					let errMessage;
					if (data.errors && data.errors[0].msg) {
						errMessage = data.errors[0].msg
					} else {
						errMessage = data.message
					}
          throw new Error(errMessage || 'что-то пошло не так!')
        }

        setLoading(false)
        return data

			} catch (err) {
        setLoading(false)  // ошибка тоже является сигналом окончания загрузки
        setError(err.message) // получаем ошибку из throw new Error(data.message || 'что-то пошло не так!')
				console.log('выкидываем ошибку')
        throw err  // если не выкинуть ошибку дальше, то она будет считаться обработанной и скрипт попытается работать дальше, но в нём не будет возвращена data, поэтому он снова упадёт
      }
		},
		[]
	);

  // const clearError = () => setError(null)
  const clearError = useCallback(() => setError(null), [])

	return {loading, request, error, clearError};
}
