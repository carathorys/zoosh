import React, {useState} from 'react';

import {SearchComponent} from "../../components/search/search.component";

export const SearchPage = () => {
  const [isLoading, setLoading] = useState(false);

  return <div>
    <SearchComponent hasFocus={false} isLoading={isLoading} doSearch={(term: string) => {
      console.log('Term is: ', term);
      setLoading(true);
      setTimeout(() => setLoading(false), 5000);
    }}/>
  </div>
}