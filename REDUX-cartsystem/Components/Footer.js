import React from 'react'

const Footer = () => {
  return (
    <div className="container my-5">

  <footer style={{backgroundColor: "#eee6d3"}}>
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <h5 className="mb-3 text-dark">Redux-Cart</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
            voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-3 text-dark">links</h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <a href="/" style={{color: "#4f4f4f"}}>FAQ</a>
            </li>
            <li className="mb-1">
              <a href="/" style={{color: "#4f4f4f"}}>classNamees</a>
            </li>
            <li className="mb-1">
              <a href="/" style={{color: "#4f4f4f"}}>Pricing</a>
            </li>
            <li>
              <a href="/"style={{color: "#4f4f4f"}}>Safety</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-1 text-dark">opening hours</h5>
          <table className="table" style={{borderColor: "#666"}}>
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Sat - Sun:</td>
                <td>8am - 1am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <a className="text-dark" href="http://localhost:3000/">Redux-Cart.com</a>
    </div>

  </footer>
  
</div>
  )
}

export default Footer
