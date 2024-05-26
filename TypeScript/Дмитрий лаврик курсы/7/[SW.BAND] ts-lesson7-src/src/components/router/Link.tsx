import { TRoutes, route } from "../../router";
import { GetRouteParams, RoutesKeys } from "../../types/router";
import { Link, LinkProps } from 'react-router-dom';

type AppLinkProps<T extends RoutesKeys<TRoutes>> = Omit<LinkProps, 'to'> & {
	to: T
} & AppendParams<GetRouteParams<TRoutes, T>>

type AppendParams<T> = 
	T extends Record<string, never>
		? { params?: never }
		: { params: T }

export default function AppLink<T extends RoutesKeys<TRoutes>>({
	to,
	params,
	children,
	...native
}: AppLinkProps<T>){
	let path: string = route(to)['path'];
	
	Object.entries(params ?? {}).forEach(([key, value]) => {
		path = path.replace(`:${key}`, value as string);
	});

	return <Link {...native} to={path}>{children}</Link>
}