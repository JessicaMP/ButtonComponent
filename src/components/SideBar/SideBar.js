import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div>
        <a href="/" className="logo">
          <span className="color-red">Dev</span>challenges.io
        </a>

        <ul>
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li className="active">Inputs</li>
          <li>Grid</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
