import { FC } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import NetworkSwitcher from './NetworkSwitcher';
import NavElement from './nav-element';
import { ConnectWallet } from '@thirdweb-dev/react';


export const AppBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex h-20 flex-row md:mb-2  bg-shrub-blue text-neutral-content drop-shadow-md">
        <div className="">
          <div className="sm:inline w-22 h-22 md:max-w-22">
            <NavElement chiplabel="isLogo"
                        // @ts-ignore
                        label={
                          <svg xmlns="http://www.w3.org/2000/svg" width="109" height="20" viewBox="0 0 323 59" fill="none">
                            <path opacity="0.7" d="M18.5885 28.0726C18.5885 13.2643 30.593 1.25986 45.4012 1.25986V1.25986C60.2095 1.25986 72.214 13.2643 72.214 28.0726V58.0328H18.5885V28.0726Z" fill="#38F6C9"/>
                            <path opacity="0.5" d="M0.223633 37.244C0.223633 27.1013 8.44588 18.8791 18.5885 18.8791V18.8791C28.7312 18.8791 36.9534 27.1013 36.9534 37.2439V58.0328H0.223633V37.244Z" fill="#38F6C9"/>
                            <path opacity="0.5" d="M53.8491 37.2439C53.8491 27.1013 62.0714 18.8791 72.214 18.8791V18.8791C82.3567 18.8791 90.5789 27.1013 90.5789 37.2439V58.0328H53.8491V37.2439Z" fill="#38F6C9"/>
                            <path d="M125.701 57.9585C120.58 57.9585 116.329 57.2196 112.949 55.7418C109.569 54.2113 107.009 52.2321 105.268 49.8043C103.527 47.3766 102.605 44.7904 102.502 42.046C102.502 41.6238 102.656 41.2543 102.963 40.9377C103.322 40.5682 103.731 40.3835 104.192 40.3835H113.871C114.588 40.3835 115.126 40.5154 115.484 40.7793C115.894 41.0432 116.253 41.3863 116.56 41.8085C116.97 42.6002 117.533 43.3654 118.25 44.1043C119.018 44.8432 119.991 45.4502 121.169 45.9252C122.398 46.3474 123.909 46.5585 125.701 46.5585C128.671 46.5585 130.899 46.0835 132.384 45.1335C133.921 44.1835 134.689 42.8904 134.689 41.2543C134.689 40.0932 134.279 39.1432 133.46 38.4043C132.64 37.6127 131.309 36.9266 129.465 36.346C127.673 35.7127 125.266 35.0793 122.244 34.446C118.352 33.6016 115.024 32.5196 112.258 31.2002C109.544 29.8279 107.47 28.0599 106.036 25.896C104.602 23.6793 103.885 20.9349 103.885 17.6627C103.885 14.4432 104.756 11.5668 106.497 9.0335C108.289 6.50016 110.773 4.521 113.948 3.096C117.123 1.671 120.887 0.958496 125.24 0.958496C128.774 0.958496 131.872 1.4335 134.535 2.3835C137.249 3.3335 139.528 4.60016 141.372 6.1835C143.215 7.76683 144.598 9.45572 145.52 11.2502C146.493 12.9918 147.005 14.7071 147.056 16.396C147.056 16.8182 146.903 17.2141 146.595 17.5835C146.288 17.9002 145.904 18.0585 145.443 18.0585H135.303C134.74 18.0585 134.253 17.9529 133.844 17.7418C133.434 17.5307 133.076 17.1877 132.768 16.7127C132.461 15.5515 131.642 14.5488 130.31 13.7043C129.03 12.8071 127.34 12.3585 125.24 12.3585C122.987 12.3585 121.22 12.7807 119.94 13.6252C118.711 14.4168 118.096 15.6571 118.096 17.346C118.096 18.4016 118.429 19.3252 119.095 20.1168C119.812 20.9085 120.964 21.5946 122.552 22.1752C124.19 22.7557 126.418 23.3627 129.235 23.996C133.895 24.8932 137.659 26.0279 140.527 27.4002C143.395 28.7196 145.494 30.4613 146.826 32.6252C148.157 34.7363 148.823 37.4016 148.823 40.621C148.823 44.2099 147.824 47.3238 145.827 49.9627C143.881 52.5488 141.167 54.5279 137.685 55.9002C134.202 57.2724 130.208 57.9585 125.701 57.9585Z" fill="#DFFFF7"/>
                            <path d="M155.284 57.1668C154.721 57.1668 154.26 56.9821 153.901 56.6127C153.543 56.2432 153.364 55.7682 153.364 55.1877V2.93766C153.364 2.35711 153.543 1.88211 153.901 1.51267C154.26 1.14322 154.721 0.958496 155.284 0.958496H165.117C165.68 0.958496 166.141 1.14322 166.499 1.51267C166.858 1.88211 167.037 2.35711 167.037 2.93766V20.5918C168.42 18.9557 170.11 17.6627 172.107 16.7127C174.156 15.7099 176.511 15.2085 179.174 15.2085C182.145 15.2085 184.782 15.8946 187.086 17.2668C189.442 18.6391 191.286 20.671 192.617 23.3627C193.949 26.0016 194.614 29.2474 194.614 33.1002V55.1877C194.614 55.7682 194.435 56.2432 194.077 56.6127C193.718 56.9821 193.257 57.1668 192.694 57.1668H182.785C182.273 57.1668 181.812 56.9821 181.402 56.6127C181.043 56.2432 180.864 55.7682 180.864 55.1877V33.5752C180.864 31.0946 180.275 29.1946 179.097 27.8752C177.971 26.5029 176.281 25.8168 174.027 25.8168C171.928 25.8168 170.238 26.5029 168.958 27.8752C167.677 29.1946 167.037 31.0946 167.037 33.5752V55.1877C167.037 55.7682 166.858 56.2432 166.499 56.6127C166.141 56.9821 165.68 57.1668 165.117 57.1668H155.284Z" fill="#DFFFF7"/>
                            <path d="M202.941 57.1668C202.377 57.1668 201.917 56.9821 201.558 56.6127C201.2 56.2432 201.02 55.7682 201.02 55.1877V17.9793C201.02 17.4516 201.2 17.0029 201.558 16.6335C201.917 16.2113 202.377 16.0002 202.941 16.0002H211.775C212.338 16.0002 212.799 16.2113 213.157 16.6335C213.516 17.0029 213.695 17.4516 213.695 17.9793V21.146C215.078 19.5099 216.717 18.2432 218.611 17.346C220.557 16.4488 222.734 16.0002 225.141 16.0002H228.521C229.033 16.0002 229.468 16.1849 229.827 16.5543C230.236 16.9238 230.441 17.3988 230.441 17.9793V26.1335C230.441 26.6613 230.236 27.1363 229.827 27.5585C229.468 27.9279 229.033 28.1127 228.521 28.1127H221.07C218.97 28.1127 217.331 28.7196 216.153 29.9335C215.027 31.0946 214.463 32.7571 214.463 34.921V55.1877C214.463 55.7682 214.258 56.2432 213.849 56.6127C213.49 56.9821 213.029 57.1668 212.466 57.1668H202.941Z" fill="#DFFFF7"/>
                            <path d="M248.271 57.9585C245.352 57.9585 242.74 57.2724 240.435 55.9002C238.182 54.5279 236.415 52.5224 235.135 49.8835C233.855 47.1918 233.215 43.9196 233.215 40.0668V17.9793C233.215 17.3988 233.394 16.9238 233.752 16.5543C234.111 16.1849 234.572 16.0002 235.135 16.0002H244.737C245.3 16.0002 245.761 16.1849 246.12 16.5543C246.478 16.9238 246.658 17.3988 246.658 17.9793V39.5918C246.658 44.764 248.911 47.3502 253.417 47.3502C255.517 47.3502 257.181 46.6904 258.411 45.371C259.691 43.9988 260.331 42.0724 260.331 39.5918V17.9793C260.331 17.3988 260.51 16.9238 260.869 16.5543C261.227 16.1849 261.688 16.0002 262.251 16.0002H271.854C272.417 16.0002 272.878 16.1849 273.236 16.5543C273.595 16.9238 273.774 17.3988 273.774 17.9793V55.1877C273.774 55.7682 273.595 56.2432 273.236 56.6127C272.878 56.9821 272.417 57.1668 271.854 57.1668H262.943C262.431 57.1668 261.97 56.9821 261.56 56.6127C261.202 56.2432 261.022 55.7682 261.022 55.1877V52.1793C259.691 54.0793 257.95 55.5307 255.799 56.5335C253.699 57.4835 251.19 57.9585 248.271 57.9585Z" fill="#DFFFF7"/>
                            <path d="M304.933 57.9585C302.065 57.9585 299.658 57.4571 297.712 56.4543C295.817 55.4516 294.255 54.1849 293.026 52.6543V55.1877C293.026 55.7682 292.821 56.2432 292.412 56.6127C292.053 56.9821 291.618 57.1668 291.106 57.1668H282.426C281.862 57.1668 281.401 56.9821 281.043 56.6127C280.684 56.2432 280.505 55.7682 280.505 55.1877V2.93766C280.505 2.35711 280.684 1.88211 281.043 1.51267C281.401 1.14322 281.862 0.958496 282.426 0.958496H291.797C292.361 0.958496 292.821 1.14322 293.18 1.51267C293.538 1.88211 293.718 2.35711 293.718 2.93766V19.8793C294.947 18.5071 296.483 17.3988 298.327 16.5543C300.221 15.6571 302.424 15.2085 304.933 15.2085C307.493 15.2085 309.747 15.6571 311.693 16.5543C313.69 17.3988 315.38 18.6391 316.763 20.2752C318.145 21.9113 319.221 23.864 319.989 26.1335C320.757 28.4029 321.193 30.9627 321.295 33.8127C321.346 34.8154 321.372 35.7391 321.372 36.5835C321.372 37.3752 321.346 38.2988 321.295 39.3543C321.193 42.3099 320.732 44.9488 319.912 47.271C319.144 49.5404 318.069 51.4932 316.686 53.1293C315.303 54.7127 313.639 55.9266 311.693 56.771C309.747 57.5627 307.493 57.9585 304.933 57.9585ZM300.785 47.3502C302.526 47.3502 303.883 46.9807 304.856 46.2418C305.829 45.5029 306.52 44.5002 306.93 43.2335C307.391 41.9668 307.673 40.5682 307.775 39.0377C307.878 37.4016 307.878 35.7654 307.775 34.1293C307.673 32.5988 307.391 31.2002 306.93 29.9335C306.52 28.6668 305.829 27.6641 304.856 26.9252C303.883 26.1863 302.526 25.8168 300.785 25.8168C299.197 25.8168 297.891 26.1863 296.867 26.9252C295.843 27.6113 295.075 28.5349 294.563 29.696C294.05 30.8043 293.769 32.0182 293.718 33.3377C293.666 34.3404 293.641 35.3168 293.641 36.2668C293.641 37.2168 293.666 38.2196 293.718 39.2752C293.769 40.7002 294.025 42.0196 294.486 43.2335C294.947 44.4474 295.689 45.4502 296.713 46.2418C297.738 46.9807 299.095 47.3502 300.785 47.3502Z" fill="#DFFFF7"/>
                          </svg>
            } href={"/"}
                        navigationStarts={() =>setIsNavOpen(false)}/>

          </div>
        </div>
        <div className="navbar-start">
          <div className="hidden md:inline-flex align-items-center justify-items gap-4">
            <NavElement
              label="Dashboard"
              href="/dashboard"
              navigationStarts={() => setIsNavOpen(false)}
            />
        <NavElement
          label="Lend"
          href="/lend"
          navigationStarts={() => setIsNavOpen(false)}
        />

        <NavElement
          label="Borrow"
          href="/borrow"
          navigationStarts={() => setIsNavOpen(false)}
        />

          </div>
        </div>

        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="md:inline-flex align-items-center justify-items gap-6 ">
            <ConnectWallet  btnTitle="Connect Wallet" className=" !border !border-shrub-green !bg-shrub-green-900 !rounded-3xl !text-white !text-[14px] " style={{border: "1px #16735B solid !important", }}/>
        </div>
        </div>
      </div>
    </div>
  );
};
