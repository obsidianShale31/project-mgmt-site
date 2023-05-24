import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import ProjectSummary from './ProjectSummary';
import ProjectComments from './ProjectComments';

// Styles
import './Project.css';

export default function Project() {
  const { id } = useParams(); // get id off URL
  const { error, document } = useDocument('projects', id);

  // if there's an error, return
  if (error) {
    return <div className='error'>{error}</div>
  }

  // pending document
  if (!document) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='project-details'>
      <ProjectSummary project={document}/>
      <ProjectComments project={document} />
    </div>
  )
}
