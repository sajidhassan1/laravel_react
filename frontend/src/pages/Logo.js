export default function Logo() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <img src={require("../dist/img/logo.png")} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
