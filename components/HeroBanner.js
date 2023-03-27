import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {
	return (
		<>
			<div className='hero-banner-container'>
				<div>
					<p className='beats-solo'>{heroBanner.smallText}</p>
					<h3>{heroBanner.midText}</h3>
					<h1>{heroBanner.discount}</h1>
					<picture>
						<img
							src={urlFor(heroBanner.image)}
							alt='headphones'
							className='hero-banner-image'
						/>
					</picture>

					<div>
						<Link href={`/product/${heroBanner.product}`}>
							<button type='button'>{heroBanner.buttonText}</button>
						</Link>
					</div>

					<div className='desc'>
						<h5>DESCRIPTION</h5>
						<p>{heroBanner.desc}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroBanner;
