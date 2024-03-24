"use client";

export function ThemePicker() {
  return (
    <div>
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="bright"
        value="light"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="goofy"
        value="cupcake"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="melancholic"
        value="sunset"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="languid"
        value="retro"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="wiggly"
        value="aqua"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="mercurial"
        value="dark"
      />
    </div>
  );
}
