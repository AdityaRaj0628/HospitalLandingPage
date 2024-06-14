import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="flex mt-2 py-3 items-center bg-slate-200">
			<CiFacebook />
			<FaGooglePlusG />
			<FaTwitter />
		</div>
	);
};

export default Footer;
