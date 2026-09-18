// Renders a row of waveform bars, matching the brand's signature mark.
export default function Wave({
  heights,
  gap = 3,
  barWidth = 5,
  color = 'var(--brass)',
  radius = '2px 2px 0 0',
  style = {},
}) {
  return (
    <div aria-hidden="true" style={{ display: 'flex', alignItems: 'flex-end', gap, ...style }}>
      {heights.map((h, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            width: barWidth,
            height: h,
            background: color,
            borderRadius: radius,
          }}
        />
      ))}
    </div>
  );
}