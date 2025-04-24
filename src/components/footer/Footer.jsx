import "./footer.css";
import { motion } from "framer-motion";
import logo from "/assets/logo.png";
import facebook from "/assets/facebook.png";
import X from "/assets/X.png";
import linkedin from "/assets/linkedin.png";
import whatsapp from "/assets/whatsapp.png";
import { ArrowForward } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  // Add state for email input
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="footer-background"></div>
      <div>
        <div className="footer-list">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src={logo}
            alt="logo"
          />

          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#prayerTimings">Prayer Timings</a>
            </li>
            <li>
              <a href="#charity">Charity</a>
            </li>
            <li>
              <a href="#downloads">Downloads</a>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="footer-email"
          >
            <FormControl
              sx={{
                m: 1,
                width: "26ch",
                borderRadius: "70ch",
                [theme.breakpoints.down("1200")]: { width: "22ch" },
                [theme.breakpoints.down("970")]: { width: "19ch" },
              }}
              variant="outlined"
            >
              <InputLabel
                sx={{
                  top: "-6px",
                  [theme.breakpoints.down("970")]: { fontSize: ".8rem" },
                }}
                htmlFor="outlined-adornment-email"
              >
                Enter your email
              </InputLabel>

              <OutlinedInput
                sx={{
                  backgroundColor: "white",
                  borderRadius: "40px",
                  height: "40px",
                }}
                id="outlined-adornment-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="Subscribe to newsletter">
                      <ArrowForward
                        sx={{
                          color: "white",
                          backgroundColor: "green",
                          borderRadius: 20,
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
                label="Enter your email"
              />
            </FormControl>
            <p>
              Manage your email subscription easily—unsubscribe by clicking{" "}
              <b>here</b>.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="logos"
        >
          <a href="https://www.facebook.com/irenictech/" target="_blank">
            <img src={facebook} alt="Facebook logo" />
          </a>
          <a href="https://x.com/irenictech" target="_blank">
            <img src={X} alt="Twitter/X logo" />
          </a>
          <a
            href="https://www.linkedin.com/company/irenictech/"
            target="_blank"
          >
            <img src={linkedin} alt="LinkedIn logo" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=971503468938 "
            target="_blank"
          >
            <img src={whatsapp} alt="WhatsApp logo" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="line"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="copyright"
        >
          <p>© {new Date().getFullYear()} Al-Kitaab – All rights reserved.</p>
        </motion.div>
      </div>
    </>
  );
}
