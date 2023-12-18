import { useEffect } from 'react';
import { useRouter } from 'next/router'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import DefaultLayout from "@/layouts/default";
import {Card, Chip, CardHeader, CardBody, CardFooter, Image, Button, Divider, Link} from "@nextui-org/react";
import * as WebProjects from "../../public/web_projects.json" ;
import * as Tags from "../../public/tags.json" ;
import { siteConfig } from '@/config/site';
import { GithubIcon, WebsiteIcon } from '@/components/icons';

export default function Page() {
  const router = useRouter()

  const project = WebProjects[Number(router.query.projects)]

  return (
    <DefaultLayout>
            	<section className="flex items-center justify-center gap-8 py-8 md:py-10 ">
                <div className='grid grid-cols-4 max-w-7xl'>
                  <div className="inline-block col-span-4 md:col-span-3 justify-center">

                    <div className='flex justify-start'>                     
                      <Link className='text-color-black hover:text-color-blue' isExternal href={project.fields.site_link}>
                    <h1 className="text-4xl md:text-7xl align-center p-3 md:p-6 md:pt-0">
                      {project.fields.title}
                    </h1>
                      </Link>
                    
                    </div>
                    <div className='flex md:hidden relative pt-3'>
                    <h2 className="text-xl align-center px-3 md:px-6 text-gray-400 font-bold">{project.fields.year}</h2>
                    <Divider orientation='vertical' className='w-1'/>
                    <div className='pt-1 h-7 overflow-hidden'>
                      <div className='flex gap-x-s overflow-x-scroll'>
                        { project.fields.tags.map((tag, i) => (  
                          <Chip className="mb-2 mr-2" variant="flat" size='sm' key={`${i}`} >{Tags[tag-1].fields.title}</Chip>
                          ))}
                      </div>
                    </div>
                    <div className='absolute h-7 w-10 right-0 bg-gradient-to-r from-transparent light:to-white dark:to-black'></div>
                    </div>

                  <div className="mb-8 p-3 md:p-6">
                    <p className='text-justify md:columns-2'>
                      {project.fields.description}
                    </p>
                  </div>
                  <div className='p-3 md:p-6 flex flex-row flex-wrap flex-grow flex-1 gap-3'>
                    {project.fields.images.map((image, i) => (
                    <Image
                     key={i}  
                      shadow="lg"
                      removeWrapper
                      alt="Card example background"
                      className="w-full h-full object-cover "
                      src={`../${image}`}
                      />
                    ))}
                  </div>
                  </div>
                  <div className='hidden md:flex flex-col p-3 md:p-6'>
                    <h2 className='font-bold size-6 mb-6'>
                      Used Technologies
                    </h2>
                    <div className="flex flex-row overflow-hidden flex-wrap">
                      { project.fields.tags.map((tag, i) => (  
                          <Chip className="mb-2 mr-2" variant="flat" key={`${i}`} >{Tags[tag-1].fields.title}</Chip>
                      ))}
                    </div>
                    <div className='flex gap-2'>
                    {(project.fields.gh_link !== "" || null) && 

                      <Link isExternal href={project.fields.gh_link}>
                        <GithubIcon className="text-default-500" />
                      </Link>    
                    }

                    {(project.fields.site_link !== "" || null) && 
                    <Link isExternal href={project.fields.site_link}>
                        <WebsiteIcon className='text-default-500' ></WebsiteIcon>
                    </Link>
                      }

                    </div>
          </div>
                </div>
        </section>
    </DefaultLayout>
  )
}
type Repo = {
  name: string
  stargazers_count: number
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: Repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>
