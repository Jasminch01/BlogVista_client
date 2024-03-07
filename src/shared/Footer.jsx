import Container from "../Components/Container";

const Footer = () => {
  return (
    <div className="bg-[#e6f3ff] ">
      <Container>
        <footer className="footer p-10 text-base-content">
          <aside>
            <p className="text-3xl text-green-500 font-bold">Blogvista</p>
            <p>
              Most populer Bloging website
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
