const Footer = () => {
  return (
    <footer className="flex bg-blue-700 text-white px-20 py-5 mt-14 justify-center gap-5 flex-col text-center md:flex-row">
      <p>© NexGen 2024. All rights reserved.</p>
      <ul className="flex gap-5 justify-center ">
        <li>
          <a className="btn-link text-white" href="#">
            {' '}
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="btn-link text-white" href="#">
            Terms of Service
          </a>
        </li>
        <li>
          <a className="btn-link text-white" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
