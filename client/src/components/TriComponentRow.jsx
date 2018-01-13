import React from 'react';
import {Statistic} from 'semantic-ui-react';

const TriComponentRow = (props) => {
  const price = +props.state.chartData.datasets[0].data.slice(-1);
  const delta = price - (+props.state.chartData.datasets[0].data[0]);
  const percentDelta = 100 * (delta / (+props.state.chartData.datasets[0].data[0]));
  const renderNumber = (num) => {
    return Math.abs(num).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }
  return (
    <div>
      <Statistic.Group widths='three'>
        <Statistic>
          <Statistic.Value>${renderNumber(price)}</Statistic.Value>
          <Statistic.Label>{props.state.coins[props.state.currentCoin - 1][0] + ' Price'}</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>{delta > 0 ? '+' : '-'}${renderNumber(delta)}</Statistic.Value>
          <Statistic.Label>{props.state.labels[props.state.currentTimePeriod][3] + ' (USD)'}</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>{percentDelta > 0 ? '+' : '-'}{renderNumber(percentDelta)} %</Statistic.Value>
          <Statistic.Label>{props.state.labels[props.state.currentTimePeriod][3] + ' (%)'}</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
  );
};

export default TriComponentRow;
