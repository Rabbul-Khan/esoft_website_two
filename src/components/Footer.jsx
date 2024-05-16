const Footer = () => {
  return (
    <footer className="flex flex-col justify-center gap-5 px-20 py-5 text-center text-white bg-blue-700 mt-14 md:flex-row">
      <p>© NexGen 2024. All rights reserved.</p>
      <ul className="flex justify-center gap-5 ">
        <li>
          <a className="text-white btn-link" href="#">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="text-white btn-link" href="#">
            Terms of Service
          </a>
        </li>
        <li>
          <a className="text-white btn-link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
