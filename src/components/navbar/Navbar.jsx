import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Wawah Sri Sunenti
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/wawah.sri">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/chihuahuah.rar/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCOjlCh_VnlLXiKdC7twcnhQ">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://github.com/wawahsrisunenti">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/wawah-sri-sunenti/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://twitter.com/howyoulikedeath">
            <img src="/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
