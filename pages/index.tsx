import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Divider} from "@nextui-org/react";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block  max-w-lg text-left justify-center">
					<h1 className="text-7xl text-center">Rokus Sadée</h1>
						<h4 className="text-center mt-2">
							Saint-Gilles, Brussels, Belgium
					</h4>
				</div>

				<div className="flex items-start left gap-3">
					<Link
						isExternal
						href="mailto:r.c.m.sadee@proton.me"
						className={buttonStyles({
							color: "danger",
							radius: "full",
							variant: "shadow",
							size: "md"
						})}
					>
						Contact me
					</Link>
					<Link
						isExternal
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>
			</section>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
					<h3 className="">Selected projects</h3>
				<div className="max-w-4xl md:flex gap-4 ">
				<Card as={Link} href="/projects/0" isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 my-8">
					<Image
						removeWrapper
						alt="Card example background"
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
						src="lesateliersclaus.png"
					/>
					<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
						<div>
						<p className="text-black text-tiny">les ateliers claus</p>
						<p className="text-black text-tiny">full stack management system & website</p>
						</div>
						<Button className="text-tiny" radius="full" size="sm">
						View
						</Button>
					</CardFooter>
					</Card>
					<Card as={Link} href="/projects/1" isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 my-8">

					<Image
						removeWrapper
						alt="Card example background"
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
						src="DiscJunky.png"
					/>
					<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
						<div>
						<p className="text-black text-tiny">Disc Junky</p>
						<p className="text-black text-tiny">Webscraping app for LP deals</p>
						</div>
						<Button className="text-tiny" radius="full" size="sm">
						View
						</Button>
					</CardFooter>
					</Card>
					<Card as={Link} href="/projects/2" isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 my-8">

					<Image
						removeWrapper
						alt="Card example background"
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
						src="goplay.png"
					/>
					<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
						<div>
						<p className="text-black text-tiny">Go Play</p>
						<p className="text-black text-tiny">Fullstack Angular app</p>
						</div>
						<Button className="text-tiny" radius="full" size="sm">
						View
						</Button>
					</CardFooter>
					</Card>
				</div>
			</section>
		</DefaultLayout>
	);
}
