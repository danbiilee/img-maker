import React from 'react';
import SVG from '../../common/SVG';
import Range from '../../common/Range';
import ToggleWrapper from '../../layout/pattern/ToggleWrapper';
import ToggleTitle from '../../layout/pattern/ToggleTitle';
import ToggleContent from '../../layout/pattern/ToggleContent';

const SetGapSize = ({ ...props }) => {
  const { selected, handleSelected, gap, onChange } = props;
  return (
    <ToggleWrapper>
      <ToggleTitle selected={selected} type="gap" handleSelected={handleSelected}>
        <SVG width="10" height="10" path="M12 21l-12-18h24z" /> Set Gap Size
      </ToggleTitle>
      <ToggleContent selected={selected === 'gap'}>
        <Range name="gap" value={gap} min="5" max="100" onChange={onChange} />
      </ToggleContent>
    </ToggleWrapper>
  );
};

export default SetGapSize;