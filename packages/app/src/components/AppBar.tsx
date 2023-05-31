import { FC } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NetworkSwitcher from './NetworkSwitcher';
import NavElement from './nav-element';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex h-20 flex-row md:mb-2  bg-shrub-blue text-neutral-content drop-shadow-md">
        <div className="">
          <div className="hidden sm:inline w-22 h-22 md:p-2 ml-4">
            <NavElement chipLabel="isLogo"
                        // @ts-ignore
                        label={
              <svg width="100%" height="60" viewBox="0 0 334 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M166.577 101.016C166.561 101.031 166.532 101.047 166.489 101.063C166.397 101.417 166.454 99.282 166.66 94.6566C166.867 90.0312 166.751 85.0747 166.314 79.787C165.879 74.498 165.349 70.1921 164.724 66.8697C164.101 63.5473 163.415 60.1394 162.664 56.6459C161.915 53.1538 161.418 50.5629 161.172 48.8732C160.928 47.1835 160.553 45.2433 160.048 43.0528C159.542 40.8636 158.877 38.8685 158.053 37.0675C157.228 35.2678 156.511 33.7715 155.903 32.5785C155.295 31.3868 154.798 30.4471 154.413 29.759C154.028 29.0709 153.715 28.511 153.475 28.0794C153.457 28.0794 153.44 28.0794 153.424 28.0794C153.424 28.0631 153.424 28.0469 153.424 28.0306C153.407 28.0306 153.39 28.0306 153.373 28.0306C153.373 28.0156 153.373 28 153.373 27.9837C153.356 27.9837 153.34 27.9837 153.324 27.9837C152.887 27.7123 152.674 27.5792 152.685 27.5846C152.694 27.5914 152.712 27.6024 152.74 27.6173C152.194 27.202 151.921 26.9895 151.919 26.98C151.919 26.9691 151.923 26.9691 151.929 26.98C151.69 26.7126 150.776 26.0985 149.185 25.1376C147.594 24.1767 146.317 23.4323 145.352 22.9044C144.387 22.3764 143.085 21.9475 141.447 21.6177C139.809 21.2879 138.273 20.7077 136.84 19.8771C135.408 19.0479 133.297 18.5314 130.506 18.3278C127.716 18.1256 125.511 17.9817 123.89 17.8962C122.268 17.8107 120.82 17.901 119.546 18.167C118.271 18.4344 117.306 18.7377 116.649 19.077C115.993 19.4163 115.511 19.6633 115.203 19.818C114.894 19.9727 114.25 20.6846 113.271 21.9536C113.893 22.0771 115.672 22.3193 118.609 22.6803C121.546 23.0427 123.782 23.2613 125.315 23.3359C126.85 23.4119 128.079 23.5788 129.002 23.8367C129.925 24.0945 130.804 24.3722 131.638 24.6694C132.472 24.9667 134.212 25.538 136.86 26.3836C139.508 27.2291 141.557 27.9627 143.006 28.5843C144.456 29.2059 145.823 29.5614 147.109 29.651C148.395 29.7406 149.378 29.8003 150.056 29.8302C150.735 29.86 151.241 29.9096 151.575 29.9788C151.908 30.0494 152.108 30.0433 152.178 29.9605C152.248 29.8777 152.368 29.7535 152.538 29.5879C152.708 29.4237 152.811 29.2791 152.847 29.1542C152.884 29.0294 152.887 29.0151 152.856 29.1115C152.823 29.2065 152.883 29.1142 153.037 28.8346C153.189 28.555 153.399 28.0834 153.668 27.4197C153.937 26.7561 154.893 25.0561 156.538 22.32C158.183 19.5839 159.558 17.3629 160.663 15.6569C161.768 13.9522 162.915 12.3256 164.106 10.777C165.297 9.2284 166.207 8.10664 166.834 7.41175C167.461 6.71821 168.02 6.15229 168.513 5.71391C169.004 5.27417 169.519 4.9016 170.056 4.59623C170.595 4.29085 170.927 4.10293 171.052 4.03235C171.178 3.96313 171.221 3.94145 171.18 3.96724C171.141 3.99303 171.128 3.99568 171.141 3.97532C171.156 3.95632 171.327 3.89531 171.652 3.79216C171.978 3.69037 172.229 3.7147 172.406 3.86535C172.582 4.016 172.705 4.30854 172.774 4.74285C172.845 5.17851 172.845 5.55374 172.776 5.86861C172.707 6.18212 172.275 6.85871 171.479 7.89833C170.683 8.93931 169.761 10.3067 168.715 12.0005C167.667 13.6943 166.538 15.4065 165.327 17.1369C164.116 18.8673 162.401 21.0151 160.18 23.5802C157.96 26.1467 155.611 28.4817 153.135 30.5854C153.101 30.4375 153.067 30.2896 153.035 30.1417"
                  stroke="#64A56A"
                  strokeWidth="6.92177"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M251.975 164.345C251.975 224.462 210.374 214.781 163.021 214.781C115.648 214.781 80.4372 224.462 80.4372 164.345C80.4372 155.204 81.333 146.308 83.0227 137.818C92.3467 90.4856 126.06 55.4696 166.226 55.4696C205.965 55.4696 239.373 89.7323 249.125 136.291C250.998 145.249 251.975 154.654 251.975 164.345Z"
                  fill="#B0E8A1"
                />
                <path
                  d="M251.975 164.345C251.975 224.463 208.75 217.126 161.397 217.126C114.024 217.126 80.4372 224.463 80.4372 164.345C80.4372 155.204 81.333 146.308 83.0227 137.818C103.259 148.099 132.33 154.532 164.638 154.532C198.494 154.532 228.807 147.468 249.125 136.292C250.998 145.249 251.975 154.655 251.975 164.345Z"
                  fill="#B0E8A1"
                />
                <path
                  d="M210.485 145.025C210.485 153.718 205.09 159.215 198.433 159.215C191.776 159.215 186.381 153.738 186.381 145.025C186.381 136.332 189.536 127.7 196.194 127.7C202.851 127.7 210.485 136.332 210.485 145.025Z"
                  fill="#50514F"
                />
                <path
                  d="M201.1 138.327C203.112 138.327 204.744 136.696 204.744 134.683C204.744 132.671 203.112 131.039 201.1 131.039C199.087 131.039 197.456 132.671 197.456 134.683C197.456 136.696 199.087 138.327 201.1 138.327Z"
                  fill="white"
                />
                <path
                  d="M195.708 155.644C198.827 155.313 200.945 151.174 200.437 146.4C199.93 141.626 196.99 138.024 193.87 138.356C190.751 138.688 188.634 142.827 189.141 147.601C189.649 152.375 192.589 155.976 195.708 155.644Z"
                  fill="white"
                />
                <path
                  d="M212.867 117.745C211.89 117.745 210.913 117.277 210.322 116.402C210.057 115.994 203.563 106.569 193.364 108.258C191.715 108.523 190.127 107.403 189.842 105.754C189.557 104.085 190.697 102.517 192.346 102.232C206.108 99.9319 214.455 111.638 215.371 113.002C216.307 114.406 215.941 116.3 214.536 117.236C214.048 117.582 213.457 117.745 212.867 117.745Z"
                  fill="white"
                />
                <path
                  d="M120.807 145.025C120.807 153.718 126.202 159.215 132.859 159.215C139.517 159.215 144.911 153.738 144.911 145.025C144.911 136.332 141.756 127.7 135.099 127.7C128.442 127.7 120.807 136.332 120.807 145.025Z"
                  fill="#50514F"
                />
                <path
                  d="M130.193 138.327C132.205 138.327 133.837 136.696 133.837 134.683C133.837 132.671 132.205 131.039 130.193 131.039C128.18 131.039 126.548 132.671 126.548 134.683C126.548 136.696 128.18 138.327 130.193 138.327Z"
                  fill="white"
                />
                <path
                  d="M142.131 147.615C142.638 142.841 140.521 138.702 137.401 138.371C134.282 138.039 131.342 141.64 130.834 146.414C130.327 151.189 132.444 155.328 135.564 155.659C138.683 155.991 141.623 152.389 142.131 147.615Z"
                  fill="white"
                />
                <path
                  d="M118.426 117.745C117.855 117.745 117.265 117.582 116.736 117.236C115.331 116.3 114.944 114.406 115.881 113.002C116.247 112.472 124.777 99.8708 138.906 102.232C140.575 102.517 141.695 104.085 141.41 105.754C141.125 107.424 139.557 108.543 137.888 108.258C127.607 106.548 121.215 115.974 120.95 116.381C120.38 117.257 119.423 117.745 118.426 117.745Z"
                  fill="white"
                />
                <path
                  d="M162.84 217.848C113.859 217.848 77.3835 226.071 77.3835 164.345C77.3835 155.163 78.2793 146.043 80.0301 137.228C89.863 87.2894 125.307 52.4159 166.226 52.4159C206.536 52.4159 241.837 86.6583 252.097 135.66C254.051 144.944 255.049 154.593 255.049 164.345C255.029 226.071 211.822 217.848 162.84 217.848ZM166.206 58.5233C128.258 58.5233 95.2783 91.3814 85.995 138.409C84.3256 146.837 83.4706 155.571 83.4706 164.345C83.4706 222.691 112.547 211.713 158.149 211.713C203.752 211.713 248.901 222.691 248.901 164.345C248.901 155.021 247.944 145.799 246.091 136.922C236.442 90.7706 203.584 58.5233 166.206 58.5233Z"
                  fill="#50514F"
                />
                <path d="M330.394 163.042H3.60567V225.195H330.394V163.042Z" fill="white" />
                <path
                  d="M330.394 228.269L80.0097 228.249C78.32 228.249 83.0634 226.885 83.0634 225.195C83.0634 223.506 78.32 222.142 80.0097 222.142L327.341 222.162V166.096H6.65937V222.142H80.0097C81.6994 222.142 83.0634 223.506 83.0634 225.195C83.0634 226.885 81.6994 228.249 80.0097 228.249H3.60565C1.91592 228.249 0.551926 226.885 0.551926 225.195V163.042C0.551926 161.352 1.91592 159.988 3.60565 159.988H330.394C332.084 159.988 333.448 161.352 333.448 163.042V225.195C333.448 226.885 332.084 228.269 330.394 228.269Z"
                  fill="#50514F"
                />
                <path
                  d="M302.3 160.884V161.027C302.3 171.898 295.338 179.369 281.433 179.369C267.529 179.369 251.975 171.898 251.975 161.027C251.975 160.599 251.995 160.172 252.056 159.764C253.135 149.484 267.345 141.503 280.7 141.503C294.544 141.503 302.239 150.054 302.3 160.884Z"
                  fill="#B0E8A1"
                />
                <path
                  d="M281.433 182.423C265.737 182.423 248.921 173.832 248.921 161.027C248.921 160.436 248.962 159.866 249.043 159.317C250.346 146.898 266.47 138.47 280.7 138.47C295.358 138.47 305.272 147.468 305.354 160.884V161.047C305.354 174.219 296.193 182.423 281.433 182.423ZM280.7 144.557C268.16 144.557 255.945 151.947 255.09 160.09C255.029 160.497 255.029 160.762 255.029 161.027C255.029 169.781 268.974 176.316 281.433 176.316C292.915 176.316 299.246 170.88 299.246 161.027L302.3 160.884L299.246 160.904C299.185 150.97 291.918 144.557 280.7 144.557Z"
                  fill="#50514F"
                />
                <path
                  d="M30.1119 160.884V161.027C30.1119 171.898 37.0744 179.369 50.979 179.369C64.8836 179.369 80.4372 171.898 80.4372 161.027C80.4372 160.599 80.4169 160.172 80.3558 159.764C79.2768 149.484 65.0668 141.503 51.7119 141.503C37.8684 141.503 30.173 150.054 30.1119 160.884Z"
                  fill="#B0E8A1"
                />
                <path
                  d="M50.979 182.423C36.2194 182.423 27.0582 174.219 27.0582 161.027V160.864C27.1396 147.468 37.0337 138.449 51.7119 138.449C65.9422 138.449 82.0659 146.878 83.3892 159.439C83.4502 159.866 83.491 160.436 83.491 161.006C83.491 173.811 66.6751 182.423 50.979 182.423ZM33.1657 160.884V161.006C33.1657 170.86 39.497 176.295 50.979 176.295C63.4382 176.295 77.3835 169.76 77.3835 161.006C77.3835 160.742 77.3835 160.457 77.3428 160.192C76.4674 151.926 64.2729 144.536 51.7323 144.536C40.5149 144.557 33.2267 150.97 33.1657 160.884Z"
                  fill="#50514F"
                />
                <path
                  d="M155.619 24.2106C155.6 24.3273 155.593 24.3722 155.598 24.345C155.598 24.3518 155.572 24.461 155.519 24.6727C155.465 24.7636 155.484 24.6808 155.578 24.4243C155.672 24.1692 155.815 23.8428 156.008 23.4452C156.199 23.0475 156.454 22.5996 156.773 22.1015C157.091 21.602 157.359 21.1522 157.577 20.7518C157.796 20.3514 158.067 19.9157 158.391 19.4447C158.716 18.9738 159.047 18.4506 159.385 17.8751C159.723 17.2983 160.026 16.8485 160.295 16.5255C160.562 16.2025 160.775 15.9649 160.932 15.8129C161.088 15.6609 161.28 15.4641 161.508 15.2225C161.736 14.9809 161.895 14.8079 161.985 14.7034C162.074 14.5989 162.243 14.3498 162.492 13.9562C162.741 13.564 163.622 12.6424 165.134 11.1915C165.145 11.2092 165.156 11.2276 165.169 11.2466"
                  stroke="white"
                  strokeWidth="1.73044"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M167.186 9.0031C167.179 9.0031 167.173 9.0031 167.168 9.0031C167.439 9.0031 167.532 9.0031 167.447 9.0031C167.711 8.94609 167.805 8.92366 167.728 8.93587C167.661 9.00509 167.743 8.94737 167.974 8.76279C168.206 8.57821 168.383 8.37603 168.503 8.15617C168.624 7.93766 168.682 7.73133 168.676 7.53725C168.67 7.34452 168.596 7.23323 168.455 7.20337C168.315 7.17351 168.22 7.15587 168.172 7.15044C168.124 7.14637 168.032 7.17762 167.895 7.24413C167.758 7.31199 167.644 7.38799 167.555 7.47214C167.464 7.55764 167.414 7.60176 167.404 7.60447C167.393 7.60854 167.39 7.61119 167.394 7.61255C167.399 7.6139 167.393 7.64995 167.376 7.72052C167.359 7.78974 167.348 7.86638 167.341 7.95052C167.335 8.03331 167.326 8.13982 167.312 8.27011C167.299 8.39904 167.295 8.5334 167.3 8.6732C167.391 8.65827 167.426 8.66986 167.404 8.70786C167.382 8.74587 167.445 8.69356 167.593 8.55105C167.74 8.40855 167.836 8.30822 167.88 8.24986"
                  stroke="white"
                  strokeWidth="1.73044"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M120.43 19.6625C120.416 19.6653 120.424 19.6618 120.452 19.6523C120.481 19.6442 120.483 19.6476 120.46 19.6625C120.438 19.6775 120.371 19.706 120.257 19.748C120.143 19.7915 120.03 19.8289 119.919 19.8601C119.807 19.8913 119.748 19.9116 119.742 19.9211C119.735 19.9306 119.733 19.9286 119.737 19.915C119.742 19.9015 119.632 19.9496 119.408 20.0595C119.185 20.1695 118.935 20.2998 118.659 20.4504C118.382 20.6011 118.198 20.7029 118.109 20.7559C118.018 20.8088 117.941 20.876 117.877 20.9574C117.813 21.0402 117.777 21.087 117.769 21.0978C117.759 21.1073 117.751 21.1236 117.742 21.1467C117.734 21.1697 117.735 21.1508 117.744 21.0897C117.755 21.0287 117.649 21.3462 117.425 22.0424C117.394 22.1496 117.624 22.1143 118.117 21.9366C118.611 21.7601 119.03 21.6143 119.375 21.4989C119.721 21.3836 119.946 21.2865 120.049 21.2078C120.153 21.1277 120.22 21.0842 120.248 21.0774C120.276 21.0693 120.284 21.0659 120.273 21.0673C120.261 21.0673 120.316 21.0395 120.44 20.9839C120.563 20.9282 120.678 20.8766 120.784 20.8291C120.888 20.7829 120.996 20.7484 121.106 20.7253C121.215 20.7022 121.325 20.6826 121.435 20.6663C121.547 20.6514 121.591 20.6466 121.568 20.652C121.545 20.6588 121.605 20.6479 121.749 20.6194C121.894 20.5896 121.989 20.5543 122.034 20.5136C122.08 20.4715 122.271 20.4342 122.608 20.4016C122.945 20.369 123.225 20.354 123.449 20.3568C123.671 20.3608 123.842 20.3494 123.96 20.3222C124.078 20.2964 124.157 20.278 124.196 20.2672C124.237 20.2563 124.294 20.2408 124.367 20.2204C124.442 20.2001 124.48 20.1899 124.481 20.1899C124.484 20.1899 124.481 20.1913 124.473 20.194C124.466 20.1981 124.492 20.1892 124.552 20.1675C124.612 20.1458 124.95 20.126 125.566 20.1084C126.181 20.0894 126.631 20.0887 126.916 20.1064C127.201 20.1227 127.375 20.1409 127.437 20.1613C127.499 20.1817 127.647 20.2149 127.879 20.2611C128.109 20.3086 128.285 20.3296 128.406 20.3242C128.527 20.3201 128.61 20.3181 128.656 20.3181C128.704 20.3181 128.764 20.3215 128.838 20.3283C128.91 20.3351 128.902 20.3331 128.815 20.3222C128.728 20.3127 128.844 20.3304 129.163 20.3751C129.484 20.4186 129.707 20.4463 129.833 20.4585C129.959 20.4721 130.073 20.4857 130.173 20.4993C130.272 20.5129 130.352 20.5251 130.411 20.5359C130.471 20.5481 130.522 20.5604 130.564 20.5726C130.605 20.5862 130.617 20.5882 130.601 20.5787C130.584 20.5692 130.753 20.5794 131.105 20.6092C131.46 20.6405 131.754 20.6954 131.989 20.7741C132.224 20.8529 132.398 20.9207 132.512 20.9777C132.626 21.0333 132.735 21.0951 132.84 21.1629C132.946 21.2308 133.052 21.3 133.16 21.3706C133.265 21.4411 133.302 21.4582 133.27 21.4215C133.238 21.3849 133.27 21.4087 133.365 21.4928C133.462 21.5756 133.517 21.6278 133.53 21.6495C133.544 21.6699 133.575 21.7126 133.624 21.7778C133.671 21.8429 133.715 21.904 133.754 21.961C133.793 22.0194 133.812 22.0438 133.809 22.0343C133.923 22.2773 133.97 22.3824 133.95 22.3498C133.93 22.3173 133.929 22.373 133.945 22.5168C133.962 22.662 133.962 22.6966 133.945 22.6206C133.928 22.5432 133.929 22.6878 133.95 23.0542C133.97 23.422 134.091 23.8075 134.314 24.2106C134.395 24.2092 134.437 24.2078 134.44 24.2065C134.443 24.2051 134.445 24.2085 134.446 24.2167C134.448 24.2262 134.504 24.2139 134.615 24.18C134.725 24.1474 134.798 24.1013 134.835 24.0416C134.872 23.9832 134.986 23.8835 135.177 23.7424C135.367 23.6012 135.531 23.498 135.67 23.4328C135.807 23.3677 135.936 23.3175 136.057 23.2822C136.177 23.2483 136.272 23.228 136.342 23.2212C136.411 23.2144 136.447 23.211 136.449 23.211C136.452 23.2097 136.496 23.1961 136.582 23.1703C136.667 23.1459 136.843 23.12 137.109 23.0929C137.374 23.0657 137.624 23.0407 137.86 23.0176C138.095 22.9959 138.244 22.9762 138.306 22.9586C138.369 22.9423 138.635 22.9565 139.106 23.0013C139.577 23.0447 139.935 23.0997 140.179 23.1662C140.423 23.2313 140.6 23.2891 140.708 23.3393C140.817 23.3881 140.911 23.4248 140.989 23.4492C141.068 23.4723 141.203 23.4954 141.394 23.5185C141.586 23.5402 141.737 23.5612 141.848 23.5816C141.961 23.6019 142.037 23.6066 142.076 23.5957C142.116 23.5849 142.323 23.6595 142.697 23.8197C143.072 23.9784 143.374 24.1115 143.603 24.2188C143.833 24.326 144 24.3972 144.106 24.4325C144.213 24.4678 144.401 24.5546 144.67 24.693C144.937 24.8315 145.142 24.955 145.285 25.0636C145.426 25.1735 145.524 25.2469 145.58 25.2835C145.637 25.3215 145.698 25.3581 145.761 25.3934C145.824 25.43 145.891 25.4687 145.963 25.5094C146.035 25.5501 146.115 25.5874 146.203 25.6214C146.291 25.6539 146.616 25.8067 147.176 26.0795C147.737 26.3523 148.212 26.5925 148.603 26.8002C148.996 27.0065 149.286 27.1836 149.475 27.3315C149.663 27.4794 149.867 27.626 150.085 27.7712C150.304 27.9165 150.526 28.0765 150.753 28.2516C150.98 28.4267 151.183 28.6216 151.362 28.836C151.542 29.0504 151.797 29.3374 152.127 29.6971C152.458 30.0554 152.697 30.3289 152.842 30.5176C152.987 30.7062 153.11 30.8528 153.21 30.9573C153.312 31.0618 153.382 31.131 153.42 31.1649C153.458 31.2002 153.52 31.2545 153.607 31.3278C153.696 31.4011 153.729 31.4268 153.709 31.4051C153.687 31.3834 153.826 31.5131 154.124 31.794C153.925 31.7927 153.624 31.4913 153.221 30.8901C152.819 30.2875 152.438 29.7649 152.078 29.3225C151.72 28.88 151.437 28.5672 151.229 28.384C151.02 28.1994 150.896 28.0969 150.857 28.0765C150.816 28.0548 150.647 27.9558 150.348 27.7793C150.048 27.6015 149.778 27.4272 149.538 27.2562C149.296 27.0866 148.992 26.8381 148.626 26.511C148.258 26.184 147.803 25.8881 147.26 25.6235C146.718 25.3588 146.251 25.0602 145.859 24.7277C145.468 24.3952 144.904 24.0728 144.165 23.7606C143.427 23.4471 142.879 23.1981 142.522 23.0135C142.167 22.8275 141.691 22.6613 141.095 22.5147C140.499 22.3695 139.923 22.2556 139.367 22.1728C138.809 22.0886 138.147 21.9814 137.382 21.8511C136.618 21.7208 136.023 21.562 135.596 21.3747C135.172 21.1887 134.702 21.0489 134.188 20.9553C133.673 20.8603 133.119 20.7897 132.524 20.7436C131.929 20.6961 131.378 20.5956 130.873 20.4422C130.367 20.2875 129.948 20.1898 129.617 20.1491C129.286 20.1098 128.85 20.0907 128.31 20.0921C127.771 20.0934 127.235 20.0595 126.7 19.9903C126.165 19.9225 125.617 19.9387 125.055 20.0392C124.492 20.1396 124.026 20.1837 123.658 20.1715C123.289 20.1579 122.941 20.124 122.614 20.0697C122.287 20.0154 121.978 19.9707 121.686 19.9354C121.393 19.9001 121.18 19.8716 121.047 19.8499C120.914 19.8282 120.783 19.814 120.656 19.8072C120.528 19.8004 120.455 19.7976 120.438 19.799C120.42 19.8017 120.314 19.8017 120.118 19.799C119.923 19.7949 119.763 19.7943 119.64 19.797C119.516 19.7997 119.406 19.8152 119.31 19.8437C119.215 19.8722 119.194 19.877 119.247 19.858C119.301 19.8376 119.127 19.9076 118.724 20.0677C118.858 20.1641 119.06 20.2062 119.328 20.194C119.598 20.1818 119.779 20.1722 119.87 20.1654"
                  stroke="white"
                  strokeWidth="1.73044"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M134.904 22.8161C134.816 22.9626 134.777 23.0184 134.786 22.9831C134.774 22.9885 134.716 22.9775 134.611 22.9504C134.611 22.945 134.615 22.9267 134.621 22.8955C134.484 22.9552 134.765 22.8704 135.464 22.641C135.299 22.641 135.221 22.641 135.232 22.641C134.947 22.717 134.651 22.8602 134.344 23.0705C134.355 23.0705 134.463 23.0719 134.666 23.0746C134.87 23.0774 134.994 23.0821 135.039 23.0889"
                  stroke="white"
                  strokeWidth="1.73044"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M88.9559 214.79C86.0719 214.79 83.2726 214.434 80.5582 213.721C77.8438 213.009 75.6383 212.059 73.9418 210.871L77.25 203.441C78.8447 204.492 80.6939 205.341 82.7976 205.985C84.9013 206.63 86.971 206.952 89.0068 206.952C92.8749 206.952 94.8089 205.985 94.8089 204.051C94.8089 203.033 94.249 202.287 93.1293 201.812C92.0436 201.303 90.2792 200.777 87.8362 200.234C85.1557 199.657 82.9163 199.047 81.118 198.402C79.3197 197.723 77.7759 196.655 76.4866 195.196C75.1972 193.737 74.5525 191.769 74.5525 189.292C74.5525 187.12 75.1463 185.169 76.3339 183.439C77.5214 181.674 79.2858 180.283 81.627 179.265C84.0021 178.247 86.9031 177.738 90.3301 177.738C92.6713 177.738 94.9785 178.01 97.2519 178.553C99.5252 179.062 101.527 179.825 103.258 180.843L100.153 188.325C96.7599 186.492 93.4686 185.576 90.2792 185.576C88.2773 185.576 86.8183 185.882 85.9022 186.492C84.9861 187.069 84.528 187.833 84.528 188.783C84.528 189.733 85.0709 190.445 86.1567 190.92C87.2425 191.395 88.9899 191.887 91.3989 192.396C94.1133 192.973 96.3527 193.601 98.1171 194.279C99.9154 194.924 101.459 195.976 102.749 197.435C104.072 198.86 104.733 200.811 104.733 203.288C104.733 205.425 104.14 207.36 102.952 209.09C101.765 210.82 99.9833 212.212 97.6081 213.263C95.233 214.281 92.3489 214.79 88.9559 214.79ZM143.285 178.451V214.078H133.207V200.183H119.466V214.078H109.388V178.451H119.466V191.836H133.207V178.451H143.285ZM165.967 204.611H160.47V214.078H150.393V178.451H166.679C169.903 178.451 172.702 178.994 175.077 180.08C177.452 181.131 179.285 182.658 180.574 184.66C181.863 186.628 182.508 188.952 182.508 191.633C182.508 194.212 181.897 196.468 180.676 198.402C179.488 200.302 177.775 201.795 175.535 202.881L183.22 214.078H172.431L165.967 204.611ZM172.329 191.633C172.329 189.97 171.803 188.681 170.751 187.765C169.699 186.849 168.138 186.391 166.069 186.391H160.47V196.824H166.069C168.138 196.824 169.699 196.383 170.751 195.501C171.803 194.585 172.329 193.295 172.329 191.633ZM204.507 214.79C199.214 214.79 195.091 213.348 192.139 210.464C189.221 207.58 187.762 203.491 187.762 198.198V178.451H197.839V197.893C197.839 203.593 200.096 206.443 204.608 206.443C209.087 206.443 211.327 203.593 211.327 197.893V178.451H221.251V198.198C221.251 203.491 219.775 207.58 216.823 210.464C213.905 213.348 209.8 214.79 204.507 214.79ZM255.46 195.501C257.495 196.213 259.09 197.333 260.244 198.86C261.397 200.353 261.974 202.168 261.974 204.306C261.974 207.427 260.719 209.836 258.208 211.533C255.697 213.229 252.067 214.078 247.316 214.078H228.078V178.451H246.298C250.845 178.451 254.306 179.299 256.681 180.996C259.056 182.658 260.244 184.915 260.244 187.765C260.244 189.461 259.82 190.988 258.971 192.345C258.157 193.669 256.986 194.721 255.46 195.501ZM238.053 185.729V192.6H244.975C248.368 192.6 250.065 191.446 250.065 189.139C250.065 186.866 248.368 185.729 244.975 185.729H238.053ZM246.502 206.8C250.031 206.8 251.795 205.595 251.795 203.186C251.795 200.777 250.031 199.573 246.502 199.573H238.053V206.8H246.502Z"
                  fill="#50514F"
                />
              </svg>
            } href={"/"}
                        navigationStarts={() =>setIsNavOpen(false)}/>

          </div>
          <WalletMultiButtonDynamic className="btn-md relative flex md:hidden text-lg " />
        </div>
        <div className="navbar-start">
          <div className="hidden md:inline-flex align-items-center justify-items gap-4 ">
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
          <div className="hidden md:inline-flex align-items-center justify-items gap-6">

          <WalletMultiButtonDynamic className="bg-shrub-green btn-sm rounded-btn font-medium text-md mr-6 p-5" />
        </div>
          <label
              htmlFor="my-drawer"
              className="btn-gh items-center justify-between md:hidden mr-6 cursor-pointer"
              onClick={() => setIsNavOpen(!isNavOpen)}>
              <div className="HAMBURGER-ICON space-y-2.5 ml-5">
              <div className={`h-0.5 w-8 bg-shrub-green ${isNavOpen ? 'hidden' : ''}`} />
              <div className={`h-0.5 w-8 bg-shrub-green ${isNavOpen ? 'hidden' : ''}`} />
              <div className={`h-0.5 w-8 bg-shrub-green ${isNavOpen ? 'hidden' : ''}`} />
            </div>
            <div className={`absolute block h-0.5 w-8 animate-pulse bg-shrub-green ${isNavOpen ? "" : "hidden"}`}
              style={{ transform: "rotate(45deg)" }}>
            </div>
            <div className={`absolute block h-0.5 w-8 animate-pulse bg-shrub-green ${isNavOpen ? "" : "hidden"}`}
              style={{ transform: "rotate(135deg)" }}>
            </div>
        </label>
      <div>
        <span className="absolute block h-0.5 w-12 bg-zinc-600 rotate-90 right-14"></span>
      </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="btn btn-square btn-ghost text-right mr-4">
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52">
            <li>
              <div className="form-control bg-opacity-100">
                <label className="cursor-pointer label">
                  <a>Autoconnect</a>
                  <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                </label>
                <NetworkSwitcher />
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};