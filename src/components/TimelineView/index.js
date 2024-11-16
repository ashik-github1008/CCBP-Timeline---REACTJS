// Write your code here
import './index.css'
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard/index'
import ProjectTimelineCard from '../ProjectTimelineCard/index'

//  <h1 className="ccbp-heading"></h1>
// items={timelineItemsList.map(item => ({title: item.title}))}

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="timeline-view-container pt-4">
        <h1 className="my-journey-heading">MY JOURNEY OF CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            className="chrono-container"
            items={timelineItemsList.map(item => ({title: item.title}))}
          >
            {timelineItemsList.map(eachTimeline =>
              eachTimeline.categoryId === 'COURSE' ? (
                <CourseTimelineCard
                  key={eachTimeline.id}
                  courseDetails={eachTimeline}
                />
              ) : (
                <ProjectTimelineCard
                  key={eachTimeline.id}
                  projectDetails={eachTimeline}
                />
              ),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
