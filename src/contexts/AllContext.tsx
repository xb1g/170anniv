import React from "react";
import { BandData, chapelShow, Game } from "../../types";

export interface AllContextProvider {
  smallBands: BandData[];
  bigBands: BandData[];
  games: Game[];
  chapelShows: chapelShow[];
}

export const AllContext = React.createContext<AllContextProvider>(
  {} as AllContextProvider
);

export const AllContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [smallBands, setSmallBands] = React.useState<BandData[]>([]);
  const [bigBands, setBigBands] = React.useState<BandData[]>([]);
  const [games, setGames] = React.useState<Game[]>([]);
  const [chapelShows, setChapelShows] = React.useState<chapelShow[]>([]);

  return (
    <AllContext.Provider
      value={{
        smallBands,
        bigBands,
        games,
        chapelShows,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};
