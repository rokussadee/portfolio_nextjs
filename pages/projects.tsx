import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles} from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {Card, Chip, CardHeader, CardBody, CardFooter, Image, Button, Divider} from "@nextui-org/react";
import { WebProject } from "@/components/web-project";
import * as WebProjects from "../public/web_projects.json" ;
import * as Tags from "../public/tags.json" ;


export default function ProjectsPage() {


	return (
		<DefaultLayout>
			{/* <section className="flex flex-col items-center  justify-center gap-8 py-8 md:py-10 ">
				<div className=" max-w-7xl ">
					<h1 className="text-7xl  ">
            Projects
					</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
					</h4>
				</div> */}
<section className="flex items-center justify-center gap-8 py-8 md:py-10 ">
                <div className='grid grid-cols-4 max-w-7xl'>
                  <div className="inline-block col-span-4 md:col-span-4 justify-center">
                    <div className='flex justify-start'>

                    <h1 className="text-7xl align-center p-3 md:p-6">
                      Projects
                    </h1>
                    
                    </div>
        <div className=" flex justify-center mx-auto w-full">
          <div className="md:columns-2 gap-8 md:w-[1280px] p-3 md:p-6">
            {WebProjects.map((project, index) => (
              <Card as={Link} href={`/projects/${index}`}  key= {`${index}_${project.fields.title}_${project.fields.year}`} isFooterBlurred className="w-full min-h-[250px] mb-8 col-span-12 sm:col-span-5 relative">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-gray-500 uppercase font-bold">{project.fields.year}</p>
                  <h4 className="text-black font-medium text-2xl  mb-2">{project.fields.title}</h4>
                  <div className="flex flex-wrap">
                  { project.fields.tags.map((tag, i) => (  
                      <Chip className="mb-2 mr-2 hidden md:flex" variant="shadow" size="sm" key={`${i}`} >{Tags[tag-1].fields.title}</Chip>
                      ))}
                      </div>
                </CardHeader>
                <Image  
                isBlurred
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full scale-125 -translate-y-6 object-cover"
                  src={project.fields.thumbnail}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                  <p className="text-black">{project.fields.short_description}</p>
                  </div>
                  <Button className="text-tiny" radius="full" size="sm">
                    View
                  </Button>
                </CardFooter>
                <div className="absolute left-0 w-full h-full bg-gradient-to-tl from-transparent to-[rgba(255,255,255,.4)]"></div>
              </Card>
            ))}
            {/* <div className="w-full">
            {WebProjects.map((project, index) => (

            <WebProject 
              key= {`${index}_${project.fields.title}_${project.fields.year}`}
              aria_label={project.fields.title}
              year={project.fields.year}
              name={project.fields.title}
              subtitle={project.fields.short_description}
              content={project.fields.description}
              tags={project.fields.tags}
              />
            ))}
            </div>
            <div className="w-full">
            {WebProjects.map((project, index) => (

            <WebProject 
              key= {`${index}_${project.fields.title}_${project.fields.year}`}
              aria_label={project.fields.title}
              year={project.fields.year}
              name={project.fields.title}
              subtitle={project.fields.short_description}
              content={project.fields.description}
              tags={project.fields.tags}
              />
            ))}
            </div> */}
            </div>
        </div>
        </div>
        </div>

			</section>
		</DefaultLayout>
	);
}
