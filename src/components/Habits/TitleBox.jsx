import React, { useState } from 'react';

import {
  FilledButtonStyle,
  TitleBoxStyle,
} from '../../styles/Styles';

import CreateNewHabit from './CreateNewHabit';

const TitleBox = function () {
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  return (
    <>
      <TitleBoxStyle>
        <h2>Meus hábitos</h2>
        <FilledButtonStyle onClick={() => setIsCreatingNew(true)}>
          +
        </FilledButtonStyle>
      </TitleBoxStyle>

      {
        isCreatingNew
          ? <CreateNewHabit setIsCreatingNew={setIsCreatingNew} />
          : null
      }
    </>
  );
};

export default TitleBox;
