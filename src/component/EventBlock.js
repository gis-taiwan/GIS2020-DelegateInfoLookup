import * as React from 'react'
import { ListGroup} from 'react-bootstrap'

const eventColor = {
  ceremony: '#376E7B',
  break: '#B36481',
  cultural_festival: '#5B8AE6',
  mentor_discussion: '#7B64B6',
}

const EventBlock = ({ EventName, Time, Room, Building, EventType }) => {
  return (
    <ListGroup style={{ "paddingBottom": '0.5em' }}>
      <ListGroup.Item style={{ backgroundColor: eventColor[EventType] }}>
        <h3 style={{ color: '#F1E188' }}>{EventName}</h3>
      </ListGroup.Item>
      <ListGroup.Item
        style={{ backgroundColor: eventColor[EventType], color: 'white' }}
      >
        Time: {Time}
      </ListGroup.Item>
      <ListGroup.Item
        style={{ backgroundColor: eventColor[EventType], color: 'white' }}
      >
        {Room}
      </ListGroup.Item>
      <ListGroup.Item
        style={{ backgroundColor: eventColor[EventType], color: 'white' }}
      >
        {Building}
      </ListGroup.Item>
    </ListGroup>
  )
}
export default EventBlock
