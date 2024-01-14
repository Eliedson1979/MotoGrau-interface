import React from 'react'

export type Tab = {
  key: string
  title: string
}

type Props = {
  tabs: Tab[]
  active: string
  size: string
  toggle: Function
  variant: string
}

const getVariantColor = (variant: string) => {
  switch (variant) {
    case 'blue':
      return 'bg-blue-700'
    case 'lime':
      return 'bg-lime-600'
    case 'yellow':
      return 'bg-yellow-400'
    case 'red':
      return 'bg-red-700'
    case 'pink':
      return 'bg-pink-700'
    case 'rose':
      return 'bg-rose-700'
    case 'orange':
      return 'bg-orange-700'
    case 'slate':
      return 'bg-slate-600'
  }
}

export default function Tabs({
  tabs,
  size,
  active,
  toggle,
  variant = 'slate',
}: Props) {
  return (
    <div className={`tabs p-1 rounded bg-black bg-opacity-70 flex w-full justify-center`}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`tab tab-sm flex max:w-[50%] items-center text-xs font-medium ${size} ${
            active === tab.key ? 'rounded bg-yellow-500 text-black' : 'rounded bg-blue-500 text-white'
          }`}
          onClick={() => toggle(tab.key)}
          style={{
            boxShadow: active === tab.key ? '0 0 10px rgba(255, 255, 0, 0.8)' : 'none',
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}
