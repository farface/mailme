const Footer = () => {
  return (
    <div className="text-center text-sm">
      This Website (Frontend/Backend) was developt in collaboration by{" "}
      <div>
        <a
          href="https://lexiechoi.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-progress-bar"
        >
          Lexie Choi
        </a>{" "}
        and
        <a
          href="https://hefigjim.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="mx-1 text-progress-bar"
        >
          Ruben Figueroa Jimenez
        </a>
        &copy;{new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
