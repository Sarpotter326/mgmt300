export default function ProgressRing({size=64, stroke=8, progress=50}){
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress/100) * circumference
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={radius} stroke="#e6e7ee" strokeWidth={stroke} fill="none" />
      <circle cx={size/2} cy={size/2} r={radius} stroke="var(--brand)" strokeWidth={stroke} fill="none"
        strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`} />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="#111">{progress}%</text>
    </svg>
  )
}
