import { useEffect, useState } from 'react';
import {
  CaretDown,
  CaretUp,
  // @ts-ignore
} from '@carbon/icons-react';
import {
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  Row,
  Column,
  Grid,
  Toggle,
  Popover,
  PopoverContent,
  // @ts-ignore
} from '@carbon/react';
import './App.css';
import './index.scss';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { ComboChart, GaugeChart } from '@carbon/charts-react';
import { Tile } from './App';
import { getGradeOverAttendance } from './Data/generateGradeAttendance';
import {
  getGoodCoursesGrades,
  getWorstCoursesGrades,
} from './Data/generateGoodWorstCourses';
import { getAttendance } from './Data/generateAttendance';

ChartJS.register(ArcElement, Tooltip, Legend);

type TopSectionProps = {
  reload: boolean;
};

export default function TopSection({ reload }: TopSectionProps): JSX.Element {
  const [dataToggle, setDataToggle] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [gradeOverAttendance, setGradeOverAttendance] = useState(
    getGradeOverAttendance(dataToggle)
  );

  const [gradeOverAttendanceTime, setGradeOverAttendanceTime] = useState(
    getGradeOverAttendance(dataToggle)
  );

  const [gradeOverAttendanceLabel, setGradeOverAttendanceLabel] = useState(
    getGradeOverAttendance(dataToggle)
  );

  const [attendanceState, setAttendanceState] = useState(getAttendance());
  const [goodGrade, setGoodGrade] = useState(getGoodCoursesGrades());
  const [worstGrade, setWorstGrade] = useState(getWorstCoursesGrades());

  // generate grade with deciaml point from 1 - 10
  const [gradeAverage, setGradeAverage] = useState(
    (Math.floor(Math.random() * 10) - 1 + Math.random()).toFixed(1)
  );
  const [gradeChange, setGradeChange] = useState(
    Math.floor(Math.random() * 5) - 2
  );

  useEffect(() => {
    const gradeOverAttendanceTimeCurrent = getGradeOverAttendance(true);
    const gradeOverAttendanceLabelCurrent = getGradeOverAttendance(false);

    setGradeOverAttendanceTime(gradeOverAttendanceTimeCurrent);
    setGradeOverAttendanceLabel(gradeOverAttendanceLabelCurrent);
    setGradeOverAttendance(
      dataToggle
        ? gradeOverAttendanceTimeCurrent
        : gradeOverAttendanceLabelCurrent
    );
    setAttendanceState(getAttendance());
    setGoodGrade(getGoodCoursesGrades());
    setWorstGrade(getWorstCoursesGrades());

    setGradeAverage(
      (Math.floor(Math.random() * 10) + 1 + Math.random()).toFixed(1)
    );

    setGradeChange(Math.floor(Math.random() * 5) - 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  useEffect(() => {
    setGradeOverAttendance(
      dataToggle ? gradeOverAttendanceTime : gradeOverAttendanceLabel
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataToggle]);

  return (
    <Grid style={{ paddingTop: 'calc(3rem + 32px)' }}>
      <Column lg={3}>
        <Row style={{ marginBottom: '32px' }}>
          <Grid>
            <Column lg={16}>
              <Tile
                style={{
                  display: 'flex',
                  aspectRatio: '1/1',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <h3 style={{ textAlign: 'center', marginBottom: '8px' }}>
                  Grade average
                </h3>

                <div
                  style={{
                    display: 'flex',
                    height: '75%',
                    aspectRatio: '1',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    border: '16px solid #e0e0e0',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                    }}
                  >
                    {gradeChange < 0 ? (
                      <CaretDown
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '-20px',
                          transform: 'translateY(-50%)',
                        }}
                        color="red"
                        size={24}
                      />
                    ) : (
                      <CaretUp
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '-20px',
                          transform: 'translateY(-50%)',
                        }}
                        color="green"
                        size={24}
                      />
                    )}
                    <h1 style={{ marginLeft: '4px' }}>{gradeAverage}</h1>
                  </div>
                </div>
              </Tile>
            </Column>
          </Grid>
        </Row>
        <Row style={{ marginBottom: '32px' }}>
          <Grid>
            <Column lg={16}>
              <Tile
                style={{
                  display: 'flex',
                  aspectRatio: '1/1',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <h3 style={{ textAlign: 'center', marginBottom: '8px' }}>
                  Attendance
                </h3>
                <GaugeChart
                  data={attendanceState.data}
                  options={attendanceState.options}
                ></GaugeChart>
              </Tile>
            </Column>
          </Grid>
        </Row>
      </Column>
      <Column lg={10} style={{ marginBottom: '32px' }}>
        <Tile style={{ height: '100%' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              flexDirection: 'column',
            }}
          >
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>
              Term overview
            </h1>
            <ComboChart
              data={gradeOverAttendance.data}
              options={gradeOverAttendance.options}
            />

            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'end',
              }}
            >
              <small style={{ height: 'fit-content' }}>
                <strong>NOTE: </strong> From now on, data could be viewed from{' '}
                {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="./#"
                  onClick={() => {
                    setIsPopoverOpen(!isPopoverOpen);
                    setTimeout(() => setIsPopoverOpen(false), 4000);
                  }}
                >
                  time and course
                </a>{' '}
                perspective.
              </small>

              <div
                style={{
                  minWidth: '80px',
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'end',
                  height: '100%',
                }}
              >
                <Popover
                  style={{ zIndex: 100 }}
                  open={isPopoverOpen}
                  dropShadow
                  autoAlign
                >
                  <Toggle
                    labelText="Chart x-axis data type"
                    labelB="Time"
                    labelA="Course"
                    onToggle={() => {
                      setDataToggle(!dataToggle);
                    }}
                    id="toggle-1"
                  />
                  <PopoverContent
                    style={{
                      padding: '5px',
                    }}
                  >
                    <div style={{ margin: '10px' }}>
                      <p className="popover-title">
                        <strong>Axis change toggle</strong>!
                      </p>
                      <p className="popover-details">
                        By switching the toggle, you can change the x-axis of
                        the data from course to time and vice versa.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </Tile>
      </Column>
      <Column lg={3}>
        <Row style={{ height: '100%', paddingBottom: '32px' }}>
          <Grid style={{ height: '100%' }}>
            <Column style={{ height: '100%' }} lg={16}>
              <Tile style={{ height: '100%' }}>
                <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>
                  Status
                </h3>
                <Tabs style={{ justifyContent: 'center' }}>
                  <TabList style={{ justifyContent: 'center' }}>
                    <Tab>Best</Tab>
                    <Tab>Worst</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Pie data={goodGrade} />
                      <p style={{ marginTop: '8px' }}>
                        Above you can see your best courses. Check other types
                        of data in that we provided for you. Learn your strong
                        sides and improve your weak ones.
                        <br />
                        <strong>Keep it going!</strong>
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <Pie data={worstGrade} />
                      <p style={{ marginTop: '8px' }}>
                        Above you can see your worst courses. Use all of the
                        charts to see what you can do to improve your grades.
                        <br />
                        <strong>Keep your head up!</strong> <br />
                        We will create tips soon.
                      </p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Tile>
            </Column>
          </Grid>
        </Row>
      </Column>
    </Grid>
  );
}
