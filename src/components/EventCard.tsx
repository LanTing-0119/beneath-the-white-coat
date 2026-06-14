import type { GameEvent } from '../types'

interface EventCardProps {
  event: GameEvent
  onChoose: (optionId: string) => void
}

export function EventCard({ event, onChoose }: EventCardProps) {
  return (
    <div className="flex-1 overflow-auto">
      {/* Event Image - key forces re-render on event change */}
      <div className="w-full">
        <img
          key={event.id}
          src={`${import.meta.env.BASE_URL}images/${event.id}.jpg`}
          alt=""
          className="w-full max-h-52 object-cover"
          loading="eager"
        />
      </div>

      <div className="max-w-lg mx-auto px-3 py-3 space-y-3">
        {/* Title */}
        <h2 className="text-white text-base font-bold leading-snug">
          {event.title}
        </h2>

        {/* Description */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-3">
          <p className="text-slate-400 text-sm leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2">
          {event.options.map((option) => (
            <button
              key={option.id}
              onClick={() => onChoose(option.id)}
              className="w-full text-center py-3 px-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-800/50 active:scale-[0.99] transition-all"
            >
              <span className="text-white text-sm">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
