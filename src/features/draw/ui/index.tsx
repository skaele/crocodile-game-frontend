import { useInitDraw, useLastDraw } from '@entities/draw/model/draw'
import React, { useEffect, useRef } from 'react'
import drawLine from '../lib/draw-line'
import drawOnMouseMove from '../lib/draw-on-mouse-move'

const DrawPanel = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const lastDraw = useLastDraw()
    const initDraw = useInitDraw()

    useEffect(() => {
        const context = canvasRef?.current?.getContext('2d')

        if (context) {
            context.lineCap = 'round'
            context.lineWidth = 3

            canvasRef.current?.addEventListener('mousemove', drawOnMouseMove(context))
        }
    }, [])

    useEffect(() => {
        const context = canvasRef?.current?.getContext('2d')

        if (lastDraw && context) {
            console.log(lastDraw)
            drawLine(context, [lastDraw])
        }
    }, [lastDraw])

    useEffect(() => {
        const context = canvasRef?.current?.getContext('2d')

        if (initDraw && context) {
            drawLine(context, initDraw)
        }
    }, [initDraw])

    return (
        <div className="grid place-items-center rounded-lg bg-white">
            <canvas className="border" width={1400} height={800} ref={canvasRef} />
        </div>
    )
}

export default DrawPanel
