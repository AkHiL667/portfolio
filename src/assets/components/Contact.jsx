import React from "react";
import { motion } from "framer-motion";

function Contact() {
  const contactOptions = [
    {
      icon: "ri-mail-line",
      title: "Email",
      value: "konda.akhil456@gmail.com",
      linkText: "Send Email",
      link: "mailto:konda.akhil456@gmail.com",
      buttonIcon: "ri-send-plane-fill"
    },
    {
      icon: "ri-linkedin-fill",
      title: "LinkedIn",
      value: "Akhil Konda",
      linkText: "Connect",
      link: "https://www.linkedin.com/in/akhil-konda-abb9252a0",
      buttonIcon: "ri-user-add-line"
    },
    {
      icon: "ri-github-fill",
      title: "GitHub",
      value: "akhilkonda",
      linkText: "Follow",
      link: "https://github.com/AkHiL667",
      buttonIcon: "ri-git-branch-line"
    },
    {
      icon: "ri-instagram-line",
      title: "Instagram",
      value: "@akhil_konda",
      linkText: "Follow",
      link: "https://www.instagram.com/akhil_129_/",
      buttonIcon: "ri-instagram-line"
    }
  ];

  return (
    <div className="w-full py-10 px-4 dark:bg-zinc-900 dark:text-white">
      <motion.h1 
        className="text-4xl mb-20 md:mb-30 font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h1>
      
      <motion.div 
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {contactOptions.map((option, index) => (
          <motion.div 
            key={index}
            className="h-fit p-4 dark:bg-zinc-700 bg-zinc-300 rounded-xl shadow-md hover:shadow-lg backdrop-blur-sm border border-gray-200 dark:border-zinc-700 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-black dark:bg-black flex items-center justify-center text-white">
                <i className={`${option.icon} text-xl`}></i>
              </div>
              <h2 className="text-lg font-bold">{option.title}</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 text-center">{option.value}</p>
              <a
                href={option.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-1 px-4 py-1.5 bg-black text-white text-sm rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-1"
              >
                <i className={option.buttonIcon}></i>
                {option.linkText}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        className="mt-16 py-8 border-t border-gray-200 dark:border-zinc-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">Akhil Konda</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
              I carry quiet storms inside me, but I move with purpose, not noise.
              I’ve failed, broken, rebuilt — still here, still building.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Home</a></li>
                <li><a href="" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-3">Let's Connect</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/akhil-konda-abb9252a0" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="https://github.com/AkHiL667" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  <i className="ri-github-fill text-xl"></i>
                </a>
                <a href="https://www.instagram.com/akhil_129_/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a href="mailto:konda.akhil456@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  <i className="ri-mail-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Akhil Konda. All rights reserved.
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
              Made with <span className="text-red-500">❤️</span> and lots of Tea <span className="text-red-500">☕</span>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default Contact;
