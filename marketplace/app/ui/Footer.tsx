"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons"; // Import icons
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-dark py-8 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; 2024 Myriad Flow. All rights reserved.
        </p>

        <div className="flex items-center space-x-4">
          <h4 className="text-lg font-semibold hidden md:block">Powered By:</h4>
          <div className="flex items-center space-x-4">
            <Link href={"https://huddle01.com/"} target="_blank">
              <Image
                src="/icons/huddle01-logo.webp"
                alt="Huddle01"
                width={40}
                height={30}
              />
            </Link>
            <Link href={"https://app.fleek.xyz/"} target="_blank">
              <Image
                src="/icons/fleek-logo.svg"
                alt="Fleek"
                width={70}
                height={40}
              />
            </Link>
            <Link href={"https://ens.domains/"} target="_blank">
              <Image
                src="/icons/ens-logo.svg"
                alt="ENS"
                width={30}
                height={30}
              />
            </Link>
            <Link href={"https://lilypad.tech/"} target="_blank">
              <Image
                src="/icons/lilypad-logo.avif"
                alt="Lilypad"
                width={100}
                height={30}
              />
            </Link>
            <Link href={"https://www.litprotocol.com/"} target="_blank">
              <div className="w-8 h-8 text-[#FF4204]">
                <svg
                  className="header_header__logo__zvoiE w-full h-full"
                  viewBox="0 0 62 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.8399 20.7629V10.204H50.9056V5.68713L50.9467 0H40.3174V34.5451C40.3174 35.9335 40.5912 37.3082 41.1231 38.5906C41.655 39.873 42.4346 41.0379 43.4173 42.0187C44.3999 42.9994 45.5663 43.7768 46.8498 44.3062C48.1332 44.8356 49.5085 45.1067 50.8968 45.104L61.8399 45.0864V34.7006H53.6421C53.2792 34.701 52.9197 34.6298 52.5843 34.4911C52.2489 34.3523 51.9442 34.1488 51.6876 33.8922C51.4309 33.6356 51.2274 33.3308 51.0887 32.9955C50.95 32.6601 50.8788 32.3006 50.8792 31.9377V27.8315H50.9085C50.9085 25.485 50.9085 23.1386 50.9085 20.7541L61.8399 20.7629Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M28.3854 10.204H36.6858V0H26.127V45.1246H36.6858V18.5713C36.6858 17.5327 36.2171 16.5496 35.4101 15.8958L28.3854 10.204Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M10.5589 31.9377V0H0V34.5451C-2.62455e-06 35.9335 0.273789 37.3082 0.805706 38.5906C1.33762 39.873 2.11722 41.0379 3.09988 42.0187C4.08254 42.9994 5.24896 43.7768 6.5324 44.3062C7.81583 44.8356 9.19107 45.1067 10.5794 45.104L22.4728 45.0864V34.7006H13.3218C12.589 34.7006 11.8863 34.4095 11.3681 33.8914C10.85 33.3732 10.5589 32.6705 10.5589 31.9377Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </Link>
            <Link href={"https://filecoin.io/"} target="_blank">
              <Image
                src="/icons/filecoin-logo.svg"
                alt="Filecoin"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/MyriadFlow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-xl text-white hover:text-accent transition-colors duration-300"
            />
          </a>
          <a
            href="https://twitter.com/0xMyriadFlow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-xl text-white hover:text-accent transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
