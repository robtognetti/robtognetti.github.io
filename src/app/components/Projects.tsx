'use client'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ProjectInfo from './ProjectInfo';

export type Project = {
  slug: string,
  projectname: string,
  description?: string,
  githuburl?: string | undefined,
  deployurl?: string | undefined,
  screenshot?: string,
  stacks: string[]
}
type Props = {}

export default function Projects({}: Props) {
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

  if (loading) return (<section><div className='flex items-center justify-center h-20 text-center'>Loading projects...</div></section>);

  return (
    <section>
      <Carousel
        infiniteLoop={true}
        showThumbs={true}
        showIndicators={ false }
        showStatus={ false }
        thumbWidth={ 100 }
        swipeable={false}
        autoPlay={ true }
        interval={ 5000 }
        transitionTime={ 1000 }
      >
        {!loading && projects.map((project: Project) => (
        <ProjectInfo key={ project.slug } project={ project }>
          <img
            key={project.slug}
            src={project.screenshot as string}
            alt={project.projectname}
            style={{ maxWidth: '95%', objectFit: 'contain', boxShadow: '-2px 2px 10px 0 #999' }}
          />
        </ProjectInfo>
        ))}
      </Carousel>
    </section>
  )
}