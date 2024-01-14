import React, { useState } from 'react'
// fim uma alteração so no caminho do arquivo
import CrashForm from '../../../games/motograu/components/form/form'
import If from '@/core/components/conditions/if'

type Props = {
  color: string
}

export default function DesktopControl({ color }: Props) {
  const [second, setSecond] = useState<boolean>(true)

  return (
    <div className="hidden w-full gap-3 justify-center flex-wrap md:flex-nowrap md:flex">
      <CrashForm
        color={color}
        secondEnabled={second}
        toggleSecond={setSecond}
        position="left"
      />

      <If condition={second}>
        <CrashForm
          color={color}
          hideSelf={setSecond}
          position="right"
        />
      </If>
    </div>
  )
}
