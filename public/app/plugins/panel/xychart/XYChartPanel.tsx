import React, { useCallback, useMemo } from 'react';
import { Button, GraphNGLegendEvent, TimeSeries, TooltipPlugin } from '@grafana/ui';
import { PanelProps } from '@grafana/data';
import { Options } from './types';
import { hideSeriesConfigFactory } from '../timeseries/overrides/hideSeriesConfigFactory';
import { getXYDimensions } from './dims';
import { prepareSeries } from './utils';

interface XYChartPanelProps extends PanelProps<Options> {}

export const XYChartPanel: React.FC<XYChartPanelProps> = ({
  data,
  timeRange,
  timeZone,
  width,
  height,
  options,
  fieldConfig,
  onFieldConfigChange,
}) => {
  const dims = useMemo(() => getXYDimensions(options.dims, data.series), [options.dims, data.series]);

  const frames = useMemo(() => [dims.frame], [dims]);

  const onLegendClick = useCallback(
    (event: GraphNGLegendEvent) => {
      onFieldConfigChange(hideSeriesConfigFactory(event, fieldConfig, frames));
    },
    [fieldConfig, onFieldConfigChange, frames]
  );

  if (dims.error) {
    return (
      <div>
        <div>ERROR: {dims.error}</div>
        {dims.hasData && (
          <div>
            <Button onClick={() => alert('TODO, switch vis')}>Show as Table</Button>
            {dims.hasTime && <Button onClick={() => alert('TODO, switch vis')}>Show as Time series</Button>}
          </div>
        )}
      </div>
    );
  }

  if (options.mode === 'scatter') {
    const series = prepareSeries(options, data.series)[0];
    return (
      <div style={{ height, overflow: 'scroll' }}>
        <h2>TODO, scatter {series.name}</h2>
        {series.x!.values.toArray().map((v: number, i: number) => (
          <div key={i}>
            {`${v}`} -- color: {series.color.get(i)} -- size: {series.size!.get(i)}
            {series.label && <span>&nbsp; -- {series.label.get(i)}</span>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <TimeSeries
      frames={frames}
      structureRev={data.structureRev}
      fields={dims.fields}
      timeRange={timeRange}
      timeZone={timeZone}
      width={width}
      height={height}
      legend={options.legend}
      onLegendClick={onLegendClick}
    >
      {(config, alignedDataFrame) => {
        return (
          <TooltipPlugin
            config={config}
            data={alignedDataFrame}
            mode={options.tooltip.mode as any}
            timeZone={timeZone}
          />
        );
      }}
    </TimeSeries>
  );
};
