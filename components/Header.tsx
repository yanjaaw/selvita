import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { FaTwitter, FaDiscord, FaShip, FaInfinity } from 'react-icons/fa';

import ConnectButton from './ConnectButton';
import Container from './Container';
import NextLink from './NextLink';
import projectConfig from '../config/projectConfig';
import { injected } from '../utils/wallet/connectors';
import Logo from '../public/assets/logo.png';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

export default function Header() {
  const { activate, setError, account, active } = useWeb3React();

  useEffect(() => {
    async function loadInjectedWallet() {
      const isAuthorized = await injected.isAuthorized();
      if (isAuthorized) {
        await activate(injected);
      }
    }
    try {
      loadInjectedWallet();
    } catch (error) {
      if (error instanceof Error) setError(error);
    }
  }, [activate, setError]);

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white-900 border-b py-2">
        <Container>
          <div className="flex justify-between items-center">
            <NextLink href="/" className="text-lg font-bold text-white">
              <span className="flex items-center">
                <Image
                  src={Logo}
                  alt={projectConfig.nftName}
                  width={160}
                  height={80}
                  className="rounded-full"
                />
                <span className="hidden sm:block ml-2">
                  Why the Amazon?
                </span>
                <span className="hidden sm:block ml-2">
                  NFTs
                </span>
                <span className="hidden sm:block ml-2">
                  Web3xNature
                </span>
                <span className="hidden sm:block ml-2">
                  Our mission
                </span>
                <span className="hidden sm:block ml-2">
                  FAQ
                </span>
                <span className="hidden sm:block ml-2">
                  Contact
                </span>
              </span>
            </NextLink>

            <div className="flex items-center space-x-2 ml-2 sm:ml-0">
              <ReactTooltip
                id="header"
                place="bottom"
                type="dark"
                effect="solid"
                textColor="#e2e8f0"
              />
              {active && account ? (
                <span className="flex items-center space-x-2 p-2 bg-white-700 rounded-full">
                  <Jazzicon
                    diameter={32}
                    seed={jsNumberForAddress(account.toLowerCase())}
                  />
                  <span>
                    {`${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`}
                  </span>
                </span>
              ) : (
                <ConnectButton />
              )}
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}
