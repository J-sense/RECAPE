const Navbar = () => {
  return (
    <div>
      <nav className="text-base font-medium underline-offset-auto bg-zinc-900 p-5 list-none gap-10 text-lime-500 tracking-widest uppercase flex justify-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/form">Form</a>
        </li>
        <li>
          <a href="/api">Posts</a>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
