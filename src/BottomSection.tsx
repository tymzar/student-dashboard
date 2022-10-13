import { useEffect, useState } from 'react';

import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
  Row,
  Column,
  Grid,
  // @ts-ignore
} from '@carbon/react';
import './App.css';
import './index.scss';
import { BubbleChart, DonutChart, RadarChart } from '@carbon/charts-react';
import { Tile } from './App';
import { generateTaskStatus } from './Data/generateTaskStatus';
import { getActivityOverTime } from './Data/generateActivityLeariningTime';
import { getPerformanceResult } from './Data/getPerformanceResult';
import { generateLearningTime } from './Data/generateLeariningTime';

type BottomSectionProps = {
  reload: boolean;
};

export default function BottomSection({
  reload,
}: BottomSectionProps): JSX.Element {
  const [performanceResult, setPerformanceResult] = useState(
    getPerformanceResult()
  );
  const [learningTime, setLearningTime] = useState(generateLearningTime());
  const [taskStatus, setTaskStatus] = useState(generateTaskStatus());
  const [activityOverTime, setActivityOverTime] = useState(
    getActivityOverTime()
  );

  useEffect(() => {
    setPerformanceResult(getPerformanceResult());
    setLearningTime(generateLearningTime());
    setTaskStatus(generateTaskStatus());
    setActivityOverTime(getActivityOverTime());
  }, [reload]);

  return (
    <Grid style={{ marginBottom: '32px' }}>
      <Column lg={4}>
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
                  Learning time
                </h3>

                <DonutChart
                  data={learningTime.data}
                  options={learningTime.options}
                />
              </Tile>
            </Column>
          </Grid>
        </Row>
        <Row>
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
                  Assignments
                </h3>
                <DonutChart
                  data={taskStatus.data}
                  options={taskStatus.options}
                />
              </Tile>
            </Column>
          </Grid>
        </Row>
      </Column>
      <Column lg={12}>
        <Row>
          <Grid>
            <Column lg={16}>
              <Grid>
                <Column lg={8} style={{ marginBottom: '32px' }}>
                  <Tile>
                    <h3 style={{ textAlign: 'center', marginBottom: '8px' }}>
                      Activity
                    </h3>
                    <BubbleChart
                      data={activityOverTime.data}
                      options={activityOverTime.options}
                    ></BubbleChart>
                  </Tile>
                </Column>
                <Column
                  lg={8}
                  style={{ marginBottom: '32px', justifyContent: 'center' }}
                >
                  <Tile>
                    <h3 style={{ textAlign: 'center', marginBottom: '8px' }}>
                      Performance
                    </h3>
                    <RadarChart
                      data={performanceResult.data}
                      options={performanceResult.options}
                    ></RadarChart>
                  </Tile>
                </Column>
              </Grid>
            </Column>
          </Grid>
        </Row>

        <Row>
          <Grid>
            <Column lg={16}>
              <Tile style={{ height: '100%' }}>
                <StructuredListWrapper>
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Subject</StructuredListCell>
                      <StructuredListCell head>Deadline</StructuredListCell>
                      <StructuredListCell head>Description</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    <StructuredListRow>
                      <StructuredListCell noWrap>ISW</StructuredListCell>
                      <StructuredListCell>10.10</StructuredListCell>
                      <StructuredListCell>
                        Submit a pdf file or a lucid chart url of a class
                        diagram (made with LucidChart) to cope with the user
                        story.
                      </StructuredListCell>
                    </StructuredListRow>
                    <StructuredListRow>
                      <StructuredListCell noWrap>ADE</StructuredListCell>
                      <StructuredListCell>14.10</StructuredListCell>
                      <StructuredListCell>
                        Once the data sources unit has been completed and
                        considering the importance of data obtained from virtual
                        learning environments, you should design a student
                        dashboard to help them monitor academic achievement at
                        the University.
                      </StructuredListCell>
                    </StructuredListRow>
                  </StructuredListBody>
                </StructuredListWrapper>
              </Tile>
            </Column>
          </Grid>
        </Row>
      </Column>
    </Grid>
  );
}
