export default function ThankYou() {
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
      <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
        <h2>Thankyou...</h2>
      </div>

      <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h5>Lorem Ipsum is simply dummy text</h5>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.{" "}
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>Copyright@2022</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
