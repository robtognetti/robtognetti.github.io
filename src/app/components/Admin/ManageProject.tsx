import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Project = {
  slug: string,
  projectname: string,
  description?: string,
  githuburl?: string,
  deployurl?: string,
}
type Props = {}

export default function ManageProject({ }: Props) {
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
    <>
      { !loading && projects.map((project: Project) => (
          <Link key={ project.slug } href={ project.slug } className='flex flex-row gap-x-4'>
            <div>{ project?.projectname }</div>
            <div>{ project?.githuburl }</div>
          </Link>
        )
      )}
    </>
  )
}