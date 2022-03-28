import React from 'react';
import Button from '../Button/Button';
import './ModelAdvertState.scss';

function ModelAdvertState({ title, onChangeState, onClose, advertState }) {
  const changeState = (state) => {
    onChangeState(state);
  };

  return (
    <div id="model-advert-state">
      <div className="content">
        <div className="header">
          {/* <AiOutlineInfoCircle className="icon" /> */}
          <h3>{title}</h3>
        </div>
        <div className="buttons">
          {advertState === 'ForSale' ? (
            <Button disabled onClick={() => onChangeState('ForSale')}>
              <span>icon</span>ForSale
            </Button>
          ) : (
            <Button primary onClick={() => onChangeState('ForSale')}>
              <span>icon</span>ForSale
            </Button>
          )}

          {advertState === 'Inactive' ? (
            <Button disabled onClick={() => onChangeState('Inactive')}>
              <span>icon</span>Inactive
            </Button>
          ) : (
            <Button primary onClick={() => onChangeState('Inactive')}>
              <span>icon</span>Inactive
            </Button>
          )}

          {advertState === 'Finished' ? (
            <Button disabled onClick={() => onChangeState('Finished')}>
              <span>icon</span>Finished
            </Button>
          ) : (
            <Button primary onClick={() => onChangeState('Finished')}>
              <span>icon</span>Finished
            </Button>
          )}

          <Button primaryOutline onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModelAdvertState;
