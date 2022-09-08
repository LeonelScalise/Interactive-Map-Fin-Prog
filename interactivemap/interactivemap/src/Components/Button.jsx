import React from "react";

export const Buttons = ({ Zona, onClick }) => {
  return (
    <button
      onClick={onClick}
      class="rounded-xl px-3 py-1 shadow-lg bg-blue-400 hover:bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'"
    >
      {Zona}
    </button>
  );
};
