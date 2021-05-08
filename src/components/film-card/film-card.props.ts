import {Movie} from "../../generated/graphql";

export interface FilmCardProps {
    film: Partial<Movie>,
    onClicked: (event: MouseEvent) => void
}
