const Navbar = () => {
  return (
    <>
      <div className="fixed z-10 h-[8vh] min-h-[50px] flex px-12 justify-between w-full bg-[rgba(0,0,0,0.1)]"
      style={{backdropFilter:'blur(10px)'}}
      >
        <div className="h-full py-4">
          <img className="h-full" src="./logo-with-Black-text.png" alt="company logo" />
        </div>
        <ul className="flex h-full items-center gap-8 font-semibold text-[15px] text-[aliceblue] uppercase tracking-[2px]">
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
