import Button from "../components/Button/Button";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Buttons</h1>
      <div className="container-buttons">
        <div className="row-container">
          <div>
            <p>{" <Button />"}</p>
            <Button />
          </div>

          <div>
            <p>&:hover, &:focus</p>
            <Button />
          </div>
        </div>

        <div className="row-container">
          <div>
            <p>{" <Button variant=”outline” />"}</p>
            <Button variant={"outline"} />
          </div>

          <div>
            <p>&:hover, &:focus</p>
            <Button variant={"outline"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
