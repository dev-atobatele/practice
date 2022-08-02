function formatDuration (seconds) {
    // Complete this function
    if(seconds===0){return 'now'};
    const _second = seconds % 60;
    const _minute = Math.floor(seconds / 60) % 60;
    const _hour = Math.floor(seconds / 3600) % 24;
    const _day = Math.floor(seconds / 86400) % 365;
    const _year = Math.floor(seconds / 86400 / 365);
    
    let year=``;
    if(_year === 1){year = `1 year`}
    else if(_year > 1){year = `${_year} years`};
    
    let y_comma = '';
    const year_list = [_day,_hour,_minute,_second];
    const y_filter = year_list.filter(time => time >= 1);
    if(y_filter.length === 1 && _year >= 1){y_comma=' and '}
    else if(y_filter.length > 1 && _year >= 1){y_comma=', '};
    
    let day=``;
    if(_day === 1){day = '1 day'}
    else if(_day > 1){day = `${_day} days`};
    
    let d_comma=''
    const day_list = [_hour,_minute,_second];
    const day_filter = day_list.filter(time => time >=1);
    if(day_filter.length === 1 && _day >= 1){d_comma=' and '}
    else if(day_filter.length > 1 && _day >= 1){d_comma=', '};
    
    let hour ='';
    if(_hour === 1){hour='1 hour'}
    else if(_hour > 1){hour=`${_hour} hours`};
    
    let h_and ='';
    const hour_list = [_minute,_second];
    const h_filter = hour_list.filter(time => time >= 1);
    if(h_filter.length === 1 && _hour >= 1){h_and =' and '}
    else if(y_filter.length > 1 && _hour >= 1){h_and =', '};
    
    let minute=``;
    if(_minute === 1){minute = '1 minute'}
    else if(_minute > 1){minute = `${_minute} minutes`};
    
    let and ='';
    if(_second >= 1 && _minute >= 1){and = ' and '};
    
    let second=``;
    if(_second === 1){second = '1 second'}
    else if(_second > 1){second = `${_second} seconds`};
    
    return `${year}${y_comma}${day}${d_comma}${hour}${h_and}${minute}${and}${second}`
  }