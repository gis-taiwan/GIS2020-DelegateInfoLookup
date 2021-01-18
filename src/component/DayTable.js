import * as React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap'
import EventBlock from './EventBlock'

const DayTable = ({ data, day, eventkey }) => {
  return (
    <Card>
      <Accordion.Toggle
        as={Button}
        block
        variant="primary"
        eventKey={eventkey}
        style={{ backgroundColor: '#0D4081', color: 'white' }}
      >
        {day}
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={eventkey}>
        <Card.Body>
          {data.map((data) => (
            <EventBlock {...data} />
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}
export default DayTable
