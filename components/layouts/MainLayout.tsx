import Head from 'next/head';
import React from 'react'
import { MainLayoutItems } from './NavbarItems';
import { SideMenu } from '@/components/ui/SideMenu';
import Script from 'next/script';
import { Footer } from '@/components/ui/Footer/Footer';
import { Navbar } from '../ui';
import { WhatsAppButton } from '../ui/WhatsAppButton/WhatsAppButton';

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ title, pageDescription, imageFullUrl, children}) => {
  return (
	<>
		<Head>
			<title>{ title }</title>

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@janiro_" />
			<meta name="twitter:creator" content="@janiro_" />

			<meta name="lang" content="ES-es" />
			<meta name="description" content={ pageDescription } />
			<meta name="keywords" content='seo web free suscription learn' />

			<meta name="og:title" content={ title } />
			<meta name="og:description" content={ pageDescription } />

			{
				imageFullUrl && (
					<meta name="og:image" content={ imageFullUrl } />
				)
			}
		</Head>
		

		<nav>
			<Navbar items={MainLayoutItems}/>
		</nav>

		<SideMenu />
		<main className='fadeIn' style={{
			margin: '0',
			padding: '0px'
		}}>
			{ children }
		</main>

		<footer>
			<Footer />
		</footer>
	</>
  )
}
