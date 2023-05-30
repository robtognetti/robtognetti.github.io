import React, { useEffect, useState } from 'react'
import ProjectEditor from './ProjectEditor';

export type Project = {
  slug: string,
  projectname: string,
  description?: string,
  githuburl?: string,
  deployurl?: string,
  screenshot?: string,
  stacks: string[]
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
    <section>
      <div className='w-full flex flex-col gap-2 items-center justify-center mt-16'>
        { !loading && projects.map((project: Project) => (
            <ProjectEditor data={ project } />
          )
        )}
      </div>
    </section>
  )
}