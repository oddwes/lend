import {FC, useEffect} from "react";
import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";

export const BorrowView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])


  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6 self-start'>
          <h1 className=" text-5xl font-bold text-base-100">
            Borrow
          </h1>
          <p className="text-base-100 text-lg font-light pt-2">Borrow USDC on Shrub with fixed-rates as low as<span className="font-semibold"> 0%</span></p>

        </div>

        <div className="relative group mt-10 w-full">
          <div className="absolute -inset-1 shadow-shrub border rounded-3xl "></div>
          <div className="flex flex-col mt-2 ">
            <div className="card w-full text-left">
              <div className="card-body text-base-100">
                {/*amount control*/}
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-shrub-blue text-md">Amount</span>
                  </label>
                  <input type="text" placeholder="Enter amount"
                         className="input input-bordered w-full  bg-white border-solid border border-gray-200 text-lg focus:shadow-shrub-thin focus:border-shrub-green-50"/>
                  <label className="label">
                    <span className="label-text-alt text-gray-500 text-sm font-light">Wallet Balance:  {wallet &&

                        <span>
                          {(balance || 0).toLocaleString()} SOL
                        </span>

                    }</span>
                    <span className="label-text-alt btn-sm text-shrub-green bg-green-50 p-2 rounded-md cursor-pointer text-xs">ENTER MAX</span>
                  </label>
                </div>

                {/*interest rate control*/}
                <div className="form-control w-full  ">
                  <label className="label">
                    <span className="label-text text-shrub-blue">Interest Rate</span>
                  </label>
                  <div>

                    <ul className="flex flex-row">
                      <li className="mr-4">
                        <input type="radio" id="smallest-borrow" name="loan" value="smallest-borrow" className="hidden peer"
                               required/>
                        <label htmlFor="smallest-borrow"
                               className="inline-flex items-center justify-center w-full px-8 py-3 text-shrub-grey bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-shrub-green dark:border-gray-700 dark:peer-checked:text-shrub-green-500 peer-checked:shadow-shrub-thin peer-checked:border-shrub-green-50 peer-checked:bg-teal-50 peer-checked:text-shrub-green-500 hover:text-shrub-green hover:border-shrub-green hover:bg-teal-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">0%</div>
                          </div>
                        </label>
                      </li>
                      <li className="mr-4">
                        <input type="radio" id="small-borrow" name="loan" value="small-borrow" className="hidden peer"/>
                        <label htmlFor="small-borrow"
                               className="inline-flex items-center justify-center w-full px-8 py-3  text-shrub-grey bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-shrub-green dark:border-gray-700 dark:peer-checked:text-shrub-green-500 peer-checked:shadow-shrub-thin peer-checked:border-shrub-green-50 peer-checked:text-shrub-green-500 hover:text-shrub-green hover:border-shrub-green hover:bg-teal-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">1%</div>
                          </div>
                        </label>
                      </li>
                      <li className="mr-4">
                        <input type="radio" id="big-borrow" name="loan" value="big-borrow" className="hidden peer"
                               required/>
                        <label htmlFor="big-borrow"
                               className="inline-flex items-center justify-center w-full px-8 py-3  text-shrub-grey bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-shrub-green dark:border-gray-700 dark:peer-checked:text-shrub-green-500 peer-checked:shadow-shrub-thin peer-checked:border-shrub-green-50 peer-checked:text-shrub-green-500 hover:text-shrub-green hover:border-shrub-green hover:bg-teal-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">5%</div>
                          </div>
                        </label>
                      </li>
                      <li className="mr-4">
                        <input type="radio" id="biggest-borrow" name="loan" value="biggest-borrow" className="hidden peer"
                               required/>
                        <label htmlFor="biggest-borrow"
                               className="inline-flex items-center justify-center w-full px-8 py-3  text-shrub-grey bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-shrub-green dark:border-gray-700 dark:peer-checked:text-shrub-green-500 peer-checked:shadow-shrub-thin peer-checked:border-shrub-green-50 peer-checked:text-shrub-green-500 hover:text-shrub-green hover:border-shrub-green hover:bg-teal-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">8%</div>
                          </div>
                        </label>
                      </li>
                    </ul>

                  </div>

                </div>

                <div className="divider h-0.5 w-full bg-gray-100 my-8"></div>
                {/*spinner */}

                {/*<div className="hero-content flex-col mb-3">*/}
                {/*  <div role="status">*/}
                {/*    <svg aria-hidden="true"*/}
                {/*         className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-shrub-grey fill-shrub-green-500"*/}
                {/*         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*      <path*/}
                {/*        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"*/}
                {/*        fill="currentColor"/>*/}
                {/*      <path*/}
                {/*        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"*/}
                {/*        fill="currentFill"/>*/}
                {/*    </svg>*/}
                {/*    <span className="sr-only">Loading...</span>*/}
                {/*  </div>*/}
                {/*<p className="text-shrub-grey pt-3 text-sm">Calculating required collateral</p>*/}
                {/*</div>*/}

                {/*display estimate apy*/}
                <div className="hero-content mb-2 flex-col gap-2">
                  <div className="flex flex-row text-lg ">
                  <span className="w-[360px]">Required collateral</span>
                    <span><img src="/sol-logo.svg" className="w-4 inline align-baseline"/> SOL</span>
                  </div>
                  <div className="card w-full bg-teal-50 py-10">
                      <span className="text-5xl text-shrub-green-500 font-bold text-center">0.0123 SOL</span>
                  </div>
                </div>

                {/*cta*/}
                <button className="btn btn-block bg-shrub-green border-0 hover:bg-shrub-green-500 normal-case text-xl">Continue</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};
