// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails
  return (
    <div className="course-card-container">
      <div className="course-name-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock-icon mr-1" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-desc">{description}</p>
      <ul className="course-tags-list-container">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="course-tag mr-2 mb-2">
            {eachTag.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
