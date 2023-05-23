'use client'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type Project = {
  slug: string,
  projectname: string,
  description?: string,
  githuburl?: string | undefined,
  deployurl?: string | undefined,
  screenshot?: string,
}
type Props = {}

export default function Projects({ }: Props) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    setLoading(true);
    await fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        const projectsdata = data.projects
        const allprojects = projectsdata.map((p: any) => {
          return p[Object.keys(p)[0]]
        });
        setProjects(allprojects);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    getProjects();
  }, [])

  if (loading) return <div>Loading...</div>;

  return (
    <section className='flex items-center justify-center'>
      <div className='flex flex-row items-center justify-around max-h-screen max-w-screen'>
        <Carousel
          infiniteLoop={ true }
        >
          {!loading && projects.map((project: Project) => (
            <div className='flex flex-col md:flex-row items-center justify-around h-screen px-4 gap-x-4'>
              <div className='flex flex-col items-center max-w-md'>
                <h1 className='font-bold text-2xl mb-4'>{ project.projectname }</h1>
                <p className='text-sm text-justify'>{ project.description }</p>
              </div>
              <div className='w-fit'>
                <img
                  key={project.slug}
                  src={project.screenshot as string}
                  alt={project.projectname}
                  style={{ maxHeight: '90vh', maxWidth: '100%' }}
                  className='shadow-xl'
                />
              </div>
            </div>
            ))}
        </Carousel>
      </div>
    </section>
  )
}