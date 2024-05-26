import { FunctionComponent } from "react";

interface Props {
  title: string;
  genre: 'horor' | 'comedy';
  count: number;
}

// экспортируем через дженерик
export const FilmDetails : FunctionComponent<Props> = ( {
  title, genre, count
} ) => {
  return (
    <div>
      <p>{title || 'Unknown Film'}</p> 
      {Boolean(genre) && <p>{genre}</p>}
      <p>{count > 0 ? `кол-во ${count}` : 'нету'}</p>
    </div>
  )
}