import Button from "../components/Button/Button";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Buttons</h1>
      <div className="container-buttons">
        <div className="row-container">
          <Button label="<Button />" />
          <Button label="&:hover, &:focus" hover={true} />
        </div>

        <div className="row-container">
          <Button
            variant="outline"
            color="primary"
            label="<Button variant=”outline” />"
          />
          <Button
            variant="outline"
            label="&:hover, &:focus"
            color="primary"
            hover={true}
          />
        </div>

        <div className="row-container">
          <Button
            variant="text"
            label="<Button variant=”text” />"
            color="primary"
          />
          <Button
            variant="text"
            label="&:hover, &:focus"
            hover={true}
            color="primary"
          />
        </div>

        <div className="row-container">
          <Button
            disableShadow={true}
            label="<Button disableShadow />"
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
