import * as React from 'react'
import { graphql } from 'gatsby'
import { Accordion, Container, Row, Col, ListGroup } from 'react-bootstrap'
import DayTable from '../component/DayTable'

export const query = graphql`
  query Schedule($GIS_Code: String) {
    delegatesCsv(GIS_Code: { eq: $GIS_Code }) {
      Team
      LD_1
      LD_2
      LD_3
      Action_Project
      Banquet
      Day1CF2
      Day1Discuss
      Day1Mentor
      Day1_CF1
      Day1_Lunch
      Day2Speech
      Day2Lunch
      Day3Speech
      Day4Bus
      Day5Lunch
      GIS_Code
      Diet
      Lodging
      Name__English_
      Speech_1
      Speech_2
    }
  }
`
const format_data = (data) => {
  return {
    '1/25': [
      {
        EventName: 'Opening Ceremony',
        Time: '9:00-12:00',
        Room: 'Shih-Liang Chien Lecture Hall',
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'ceremony',
      },
      {
        EventName: 'Break Time',
        Time: '9:00-12:00',
        Room: data.Day1_Lunch,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'break',
      },
      {
        EventName: 'Cultural Festival 1',
        Time: '13:00-14:00',
        Room: data.Day1_CF1,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'cultural_festival',
      },
      {
        EventName: 'Cultural Festival 2',
        Time: '14:00-15:00',
        Room: data.Day1CF2,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'cultural_festival',
      },
      {
        EventName: 'Mentor Discussion',
        Time: '15:00-17:00',
        Room: data.Day1Discuss,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'mentor_discussion',
      },
    ],
    '1/26': [
      {
        EventName: 'Keynote Speech',
        Time: '09:30-12:00',
        Room: data.Action_Project,
        Building: data.Day2Speech,
        EventType: 'mentor_discussion',
      },
      {
        EventName: 'Break Time',
        Time: '12:00-13:20',
        Room: data.Day1Mentor,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'break',
      },
      {
        EventName: 'Group Discussion',
        Time: '13:20-14:30',
        Room: data.Day1Mentor,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'mentor_discussion',
      },
      {
        EventName: 'Carnival',
        Time: '14:30-17:30',
        Room: '1st Floor Gym',
        Building: 'NTU Sports Center',
        EventType: 'ceremony',
      },
    ],
    '1/27': [
      {
        EventName: 'Keynote Speech',
        Time: '09:30-12:00',
        Room: data.Speech_2,
        Building: data.Day2Speech,
        EventType: 'mentor_discussion',
      },
      {
        EventName: 'Break Time',
        Time: '12:00-13:20',
        Room: data.Day1Mentor,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'break',
      },
      {
        EventName: 'Group Discussion',
        Time: '13:20-14:30',
        Room: data.Day1Mentor,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'mentor_discussion',
      },
      {
        EventName: 'Coffee Break',
        Time: '14:30-15:00',
        Room: data.Day1Mentor,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'break',
      },
      {
        EventName: 'Mentor Discussion',
        Time: '15:00-17:00',
        Room: data.Day1Mentor,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'mentor_discussion',
      },
    ],
    '1/28': [
      {
        EventName: 'Summit',
        Time: '09:30-12:00',
        Room: 'GIS NTU Convention Center',
        Building: 'GIS NTU Convention Center',
        EventType: 'mentor_discussion',
      },
      {
        EventName: 'Transport to Hyatt',
        Time: '12:00-13:30',
        Room: data.Day4Bus,
        Building: 'Transport to Hyatt',
        EventType: 'break',
      },
      {
        EventName: 'Leaders Dialogue',
        Time: '13:30-17:40',
        Room: 'Round 1',
        Building: data.LD_1,
        EventType: 'ceremony',
      },
      {
        EventName: 'Leaders Dialogue',
        Time: '13:30-17:40',
        Room: 'Round 2',
        Building: data.LD_2,
        EventType: 'ceremony',
      },
      {
        EventName: 'Leaders Dialogue',
        Time: '13:30-17:40',
        Room: 'Round 3',
        Building: data.LD_3,
        EventType: 'ceremony',
      },
      {
        EventName: 'Banquet',
        Time: '18:00-21:00',
        Room: data.Banquet,
        Building: 'Grand Hyatt Hotel 3F Grand Ballroom',
        EventType: 'cultural_festival',
      },
    ],
    '1/29': [
      {
        EventName: 'Action Project Exhibition',
        Time: '09:30-12:00',
        Room: '201 & 202 & 203',
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'mentor_discussion',
      },
      {
        EventName: 'Break Time',
        Time: '12:00-13:00',
        Room: data.Day5Lunch,
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'break',
      },
      {
        EventName: 'Closing Ceremony',
        Time: '13:00-17:00',
        Room: 'Shih-Liang Chien Lecture Hall',
        Building: 'Multi-Purpose Classroom Building',
        EventType: 'ceremony',
      },
      {
        EventName: 'After Party',
        Time: '17:00-',
        Room: 'Buses at NTU Main Gate',
        Building: 'CLBC Soapbox',
        EventType: 'cultural_festival',
      },
    ],
  }
}

const Schedule = ({ data }) => {
  const schedule_data = data.delegatesCsv
  const every_day_data = format_data(schedule_data)
  return (
    <Container style={{ 'padding-top': '1em' }}>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              <Container>
                <Row>
                  <Col lg={6}>GIS_Code: {schedule_data.GIS_Code}</Col>
                  <Col lg={6}>Name: {schedule_data.Name__English_}</Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    Action Project: {schedule_data.Action_Project}
                  </Col>
                  <Col lg={6}>Team: {schedule_data.Team}</Col>
                </Row>
                <Row>
                  <Col lg={6}>Dietary Restrictions: {schedule_data.Diet}</Col>
                  <Col lg={6}>Accomodation: {schedule_data.Lodging}</Col>
                </Row>
              </Container>
            </ListGroup.Item>
            <Accordion defaultActiveKey="1/25">
              <ListGroup.Item>
                <DayTable
                  eventkey="0"
                  day="1/25"
                  data={every_day_data['1/25']}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <DayTable
                  eventkey="1"
                  day="1/26"
                  data={every_day_data['1/26']}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <DayTable
                  eventkey="3"
                  day="1/27"
                  data={every_day_data['1/27']}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <DayTable
                  eventkey="4"
                  day="1/28"
                  data={every_day_data['1/28']}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <DayTable
                  eventkey="5"
                  day="1/29"
                  data={every_day_data['1/29']}
                />
              </ListGroup.Item>
            </Accordion>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
export default Schedule
