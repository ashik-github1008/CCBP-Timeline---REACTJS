// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} =
    projectDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt={projectTitle} className="project-img mb-3" />
      <div className="course-name-duration-container">
        <h1 className="course-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="clock-icon mr-1" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-desc">{description}</p>
      <a href={projectUrl} target="_blank" className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
