import useHttp from "../hooks/http.hook";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import Loader from "../components/loader";
import LinksList from "../components/links-list";

export default function LinksPage() {
	const [links, setLinks] = useState(null);

	const { loading, request } = useHttp();
	const {token} = useContext(AuthContext);

  console.log(token)

	const getLinks = useCallback(async () => {
		try {
			const fetchedLinks = await request(`/api/link`, "GET", null, {
				Authorization: `Baerer ${token}`,
			});
			setLinks(fetchedLinks);
		} catch (err) {
			console.log("ошибка получения ссылки, - ", err);
		}
	}, [request, token]);
  
	useEffect(() => {
		getLinks();
	}, [getLinks]);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			{ !loading && links && <LinksList links={links}/> }
		</>
	);
}