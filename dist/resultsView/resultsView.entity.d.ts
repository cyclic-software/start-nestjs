import { formats } from "src/config/constants";
export declare class ResultsViewEntity {
    id_player: number;
    id_tournament: number;
    player_name: string;
    picture: string;
    t_picture: string;
    tournament_name: string;
    sets_played: number;
    sets_winned: number;
    games_played: number;
    games_winned: number;
    format: formats;
}
