import React from 'react';
import { parseISO, format } from 'date-fns';

const Date: React.FC<{ dateString: string }> = ({ dateString }) => (
  <time dateTime={dateString}>
    {format(parseISO(dateString), 'LLLL d, yyyy')}
  </time>
);

export default Date;
