import React from "react";

export interface ICard {
  id: number;
  name: string;
  email: string;
}

const Card: React.FC<ICard> = (card: ICard) => {
  return (
    <div className="bg-slate-100 rounded-sm p-2 mb-2 shadow-sm">
      <div className="text-sm text-gray-600 font-semibold">{card.id}</div>
      <div className="text-sm text-gray-600 font-semibold">{card.name}</div>
      <div className="text-sm text-gray-600 font-semibold">{card.email}</div>
    </div>
  );
};

export default Card;
