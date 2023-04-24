import React from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';


import moment from 'moment';

const MyTimeline = () => {
    const groups = [
        { id: 1, title: 'Monday' },
        { id: 2, title: 'Tueday' },
        { id: 3, title: 'group 3' },
        { id: 4, title: 'group 4' },
        { id: 5, title: 'group 5' },
        { id: 6, title: 'group 6' },
        { id: 7, title: 'group 7' },
        { id: 8, title: 'group 8' },
        // More groups...
    ];

    const items = [
        {
            id: 1,
            group: 1,
            title: 'Random title',
            start_time: moment().valueOf(),
            end_time: moment().add(1, 'days').valueOf(),
        },
        {
            id: 2,
            group: 2,
            title: 'Another title',
            start_time: moment().add(-0.5, 'days').valueOf(),
            end_time: moment().add(0.5, 'days').valueOf(),
        },
    ];
    return (
        <Timeline
            groups={groups}
            items={items}
            defaultTimeStart={moment().add(-12, 'hour')}
            defaultTimeEnd={moment().add(12, 'hour')}
        />
    );
};

export default MyTimeline;
