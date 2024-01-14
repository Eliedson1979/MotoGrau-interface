import React, { useContext, useEffect, useState } from 'react'
import ProgressBar from '../progress-bar/progressbar'
import If from '@/core/components/conditions/if'
import { GameStatus } from '@/core/providers/enums/game-status'
import { CrashGameContext } from '@/core/providers/games/crash-game.provider'

import gta from '../imagens/mapa.png';
import { motion } from 'framer-motion';
// importação da fonte google
import WebFont from 'webfontloader';


type Props = {
  color: string
}

export default function Display({ color }: Props) {
  const { startTimeout, gameStatus, multiplier } =
    useContext<any>(CrashGameContext)

// fonte google
WebFont.load({
  google: {
    families: ['Stalinist One: 400,700', 'Black Ops One: 400, 700']  // Substitua 'Nome da Fonte' pela fonte desejada
  }
});

  return (
    <div className="absolute top-0 pointer-events-none left-0 flex flex-col gap-3 justify-center items-center w-full h-full">
       
      <If condition={gameStatus == GameStatus.IDLE}>
        <div className="w-full flex flex-col items-center justify-center color">
          <div className="w-44">
          
            <ProgressBar
              max={10}
              value={startTimeout}
              color={color = 'lime'} // fiz essa alteração de cor
            />
          </div>
        </div>
      </If>
         {/* Aqui foi colocado um Efeito de inicialização */}
      <If condition={gameStatus === GameStatus.RUNNING}>
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0, scale: 3.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
    <h1
      className="text-6xl md:text-6xl lg:text-6xl font-bold text-gray-200 drop-shadow"
      style={{
        WebkitTextStroke: '1px #000',
        fontStyle: 'italic',
        fontFamily: 'Black Ops One',
        color: '#07eb25'
      }}
    >
      {multiplier?.toFixed(2)}x
    </h1>
  </motion.div>
  
</If>

      <If condition={gameStatus == GameStatus.MAINTENANCE}>
        <div className="relative flex justify-center items-center">
          <h1
            className="text-2xl md:text-3xl uppercase lg:text-3xl font-bold text-gray-200 drop-shadow"
            style={{
              WebkitTextStroke: '1px #000',
            }}
          >
            Em manutenção!
          </h1>
        </div>
      </If>

      <If condition={gameStatus === GameStatus.GAME_OVER}>
  <div className="flex flex-col items-center">
    <h1
      className="text-2xl sm:text-2xl text-gray-200 font-extrabold uppercase animated-text"
      style={{
        WebkitTextStroke: '1px #000',
        animation: 'blink 1s infinite', // Adiciona a animação de piscar
        fontFamily: 'Stalinist One',
        fontSize: '20px',
        color: '#c8eb06'
      }}
    >
      O piloto tombou!
    </h1>
    <h1
      className={`text-6xl md:text-6xl lg:text-6xl font-bold text-red-600 drop-shadow`}
      style={{
        WebkitTextStroke: '1px #000',
        marginTop: '10px',
        fontFamily: 'Black Ops One',
        fontStyle: 'italic',
        textDecoration: 'underline',
      }}
    >
      {multiplier.toFixed(2)}x
    </h1>
  </div>
</If>

<div className='minimapa'>
  <img
    src={gta} // ajuste do caminho para a imagem do minimapa
    alt="Minimapa"
    className="w-full h-full object-cover"
  />
</div>
    </div>
  )
}
