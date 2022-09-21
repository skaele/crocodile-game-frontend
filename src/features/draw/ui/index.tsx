import { useLastPaint } from '@entities/paint/model'
import React, { useEffect, useRef } from 'react'
import drawLine from '../lib/draw-line'
import drawOnMouseMove from '../lib/draw-on-mouse-move'

const DrawPanel = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const lastPaint = useLastPaint()

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
        if (lastPaint && context) {
            drawLine(context, [lastPaint])
        }
    }, [lastPaint])

    return (
        <div className="grid place-items-center rounded-lg bg-white">
            <canvas className="border" width={1400} height={800} ref={canvasRef} />
        </div>
    )
}

export default DrawPanel
