import { useParams } from "react-router-dom";
import useHttp from "../hooks/http.hook";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth-context";
import Loader from "../components/loader";
import LinkCard from "../components/link-card";

export default function DetailPage() {
	const [link, setLink] = useState(null);

	const { loading, request } = useHttp();
	const linkId = useParams().id;
	const {token} = useContext(AuthContext);

	const getLink = useCallback(async () => {
		try {
			const fetchedLink = await request(`/api/link/${linkId}`, "GET", null, {
				Authorization: `Baerer1 ${token}`,
			});
			setLink(fetchedLink);
			// console.log(link);
		} catch (err) {
			console.log("ошибка получения ссылки, - ", err);
		}
	}, [request, linkId, token]);
  
	useEffect(() => {
		getLink();
	}, [getLink]);

	if (loading) {
		return <Loader />;
	}

	console.log(link);

	return (
		<>
			{ !loading && link && <LinkCard link={link}/> }
		</>
	);
}
