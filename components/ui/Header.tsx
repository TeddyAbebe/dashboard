import React from "react";
import Profile from "./Profile";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white p-4 border-b border-dashed border-black rounded-t-xl">
      <h1 className="text-xl font-semibold">VERP Agent’s Dashboard</h1>

      <div className="flex items-center space-x-4">
        <Profile name="Solomon Kebede" role="Agent" img="/profile.png" />
      </div>
    </header>
  );
}
